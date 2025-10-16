import { useState } from 'react';
import { Tag, Plus, Edit, Trash2, Save, X } from 'lucide-react';
import { Card } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Badge } from '../../components/ui/badge';
import { toast } from 'sonner@2.0.3';
import AdminSidebar from '../../components/AdminSidebar';

interface Category {
  id: number;
  name: string;
  icon: string;
  projectCount: number;
  active: boolean;
}

const initialCategories: Category[] = [
  { id: 1, name: 'Design', icon: '🎨', projectCount: 245, active: true },
  { id: 2, name: 'Development', icon: '💻', projectCount: 387, active: true },
  { id: 3, name: 'Writing', icon: '✍️', projectCount: 156, active: true },
  { id: 4, name: 'Marketing', icon: '📈', projectCount: 198, active: true },
  { id: 5, name: 'Video & Animation', icon: '🎬', projectCount: 142, active: true },
  { id: 6, name: 'Music & Audio', icon: '🎵', projectCount: 89, active: true }
];

export default function CategoriesPage() {
  const [categories, setCategories] = useState<Category[]>(initialCategories);
  const [isAdding, setIsAdding] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [newCategory, setNewCategory] = useState({ name: '', icon: '' });

  const handleAdd = () => {
    if (!newCategory.name || !newCategory.icon) {
      toast.error('Nama dan icon kategori harus diisi');
      return;
    }

    const category: Category = {
      id: Math.max(...categories.map(c => c.id)) + 1,
      name: newCategory.name,
      icon: newCategory.icon,
      projectCount: 0,
      active: true
    };

    setCategories([...categories, category]);
    setNewCategory({ name: '', icon: '' });
    setIsAdding(false);
    toast.success('Kategori berhasil ditambahkan');
  };

  const handleEdit = (id: number) => {
    setEditingId(id);
  };

  const handleSave = (id: number, name: string, icon: string) => {
    setCategories(categories.map(cat =>
      cat.id === id ? { ...cat, name, icon } : cat
    ));
    setEditingId(null);
    toast.success('Kategori berhasil diupdate');
  };

  const handleDelete = (id: number) => {
    if (confirm('Yakin ingin menghapus kategori ini?')) {
      setCategories(categories.filter(cat => cat.id !== id));
      toast.success('Kategori berhasil dihapus');
    }
  };

  const handleToggleActive = (id: number) => {
    setCategories(categories.map(cat =>
      cat.id === id ? { ...cat, active: !cat.active } : cat
    ));
    toast.success('Status kategori berhasil diubah');
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-gray-100 to-gray-200">
      <AdminSidebar />
      
      <div className="flex-1 ml-64 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-8 flex items-center justify-between">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <Tag className="w-8 h-8 text-gray-700" />
                <h1>Kelola Kategori</h1>
              </div>
              <p className="text-gray-600">Atur kategori layanan di platform</p>
            </div>
            <Button
              onClick={() => setIsAdding(true)}
              className="bg-gradient-to-r from-gray-700 to-black hover:from-gray-800 hover:to-gray-900"
            >
              <Plus className="w-4 h-4 mr-2" />
              Tambah Kategori
            </Button>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card className="p-6 border-0 bg-white shadow-lg">
              <p className="text-sm text-gray-600 mb-2">Total Kategori</p>
              <p className="text-gray-900">{categories.length}</p>
            </Card>
            <Card className="p-6 border-0 bg-white shadow-lg">
              <p className="text-sm text-gray-600 mb-2">Kategori Aktif</p>
              <p className="text-gray-900">{categories.filter(c => c.active).length}</p>
            </Card>
            <Card className="p-6 border-0 bg-white shadow-lg">
              <p className="text-sm text-gray-600 mb-2">Total Proyek</p>
              <p className="text-gray-900">{categories.reduce((sum, cat) => sum + cat.projectCount, 0)}</p>
            </Card>
          </div>

          {/* Add New Category Form */}
          {isAdding && (
            <Card className="p-6 border-0 bg-white shadow-lg mb-6">
              <h3 className="mb-4">Tambah Kategori Baru</h3>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="text-sm text-gray-600 mb-2 block">Nama Kategori</label>
                  <Input
                    placeholder="contoh: Photography"
                    value={newCategory.name}
                    onChange={(e) => setNewCategory({ ...newCategory, name: e.target.value })}
                    className="rounded-xl"
                  />
                </div>
                <div>
                  <label className="text-sm text-gray-600 mb-2 block">Icon (Emoji)</label>
                  <Input
                    placeholder="contoh: 📷"
                    value={newCategory.icon}
                    onChange={(e) => setNewCategory({ ...newCategory, icon: e.target.value })}
                    className="rounded-xl"
                  />
                </div>
              </div>
              <div className="flex gap-2">
                <Button
                  onClick={handleAdd}
                  className="bg-gradient-to-r from-gray-700 to-black hover:from-gray-800 hover:to-gray-900"
                >
                  <Save className="w-4 h-4 mr-2" />
                  Simpan
                </Button>
                <Button
                  variant="outline"
                  onClick={() => {
                    setIsAdding(false);
                    setNewCategory({ name: '', icon: '' });
                  }}
                >
                  <X className="w-4 h-4 mr-2" />
                  Batal
                </Button>
              </div>
            </Card>
          )}

          {/* Categories List */}
          <div className="grid md:grid-cols-2 gap-6">
            {categories.map((category) => (
              <Card key={category.id} className="p-6 border-0 bg-white shadow-lg hover:shadow-xl transition-shadow">
                {editingId === category.id ? (
                  <EditCategoryForm
                    category={category}
                    onSave={handleSave}
                    onCancel={() => setEditingId(null)}
                  />
                ) : (
                  <div>
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-16 h-16 bg-gradient-to-br from-gray-500 to-gray-700 rounded-2xl flex items-center justify-center text-3xl">
                          {category.icon}
                        </div>
                        <div>
                          <h3 className="mb-1">{category.name}</h3>
                          <p className="text-sm text-gray-600">{category.projectCount} proyek</p>
                        </div>
                      </div>
                      <Badge className={category.active ? 'bg-black text-white' : 'bg-gray-300 text-gray-700'}>
                        {category.active ? 'Aktif' : 'Nonaktif'}
                      </Badge>
                    </div>

                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleEdit(category.id)}
                        className="flex-1"
                      >
                        <Edit className="w-4 h-4 mr-2" />
                        Edit
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleToggleActive(category.id)}
                        className="flex-1"
                      >
                        {category.active ? 'Nonaktifkan' : 'Aktifkan'}
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleDelete(category.id)}
                        className="border-gray-400"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function EditCategoryForm({ 
  category, 
  onSave, 
  onCancel 
}: { 
  category: Category; 
  onSave: (id: number, name: string, icon: string) => void;
  onCancel: () => void;
}) {
  const [name, setName] = useState(category.name);
  const [icon, setIcon] = useState(category.icon);

  return (
    <div>
      <div className="space-y-4 mb-4">
        <div>
          <label className="text-sm text-gray-600 mb-2 block">Nama Kategori</label>
          <Input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="rounded-xl"
          />
        </div>
        <div>
          <label className="text-sm text-gray-600 mb-2 block">Icon (Emoji)</label>
          <Input
            value={icon}
            onChange={(e) => setIcon(e.target.value)}
            className="rounded-xl"
          />
        </div>
      </div>
      <div className="flex gap-2">
        <Button
          size="sm"
          onClick={() => onSave(category.id, name, icon)}
          className="bg-gradient-to-r from-gray-700 to-black hover:from-gray-800 hover:to-gray-900"
        >
          <Save className="w-4 h-4 mr-2" />
          Simpan
        </Button>
        <Button
          size="sm"
          variant="outline"
          onClick={onCancel}
        >
          <X className="w-4 h-4 mr-2" />
          Batal
        </Button>
      </div>
    </div>
  );
}
