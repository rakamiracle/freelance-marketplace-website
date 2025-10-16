import { useState } from 'react';
import { Search, Filter, Eye, CheckCircle, XCircle, Clock, TrendingUp } from 'lucide-react';
import { Card } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Badge } from '../../components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../components/ui/select';
import { Avatar, AvatarImage, AvatarFallback } from '../../components/ui/avatar';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '../../components/ui/dialog';
import { toast } from 'sonner@2.0.3';
import AdminSidebar from '../../components/AdminSidebar';

interface Project {
  id: number;
  title: string;
  client: { name: string; avatar: string };
  category: string;
  budget: string;
  proposals: number;
  status: 'pending' | 'active' | 'completed' | 'rejected';
  postedDate: string;
}

const mockProjects: Project[] = [
  {
    id: 1,
    title: 'Desain Logo Modern untuk Startup Teknologi',
    client: { name: 'Ahmad Rizki', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100' },
    category: 'Desain',
    budget: '$500 - $1,000',
    proposals: 12,
    status: 'active',
    postedDate: '2025-10-10'
  },
  {
    id: 2,
    title: 'Pengembangan Website E-commerce',
    client: { name: 'Siti Nurhaliza', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100' },
    category: 'Pengembangan',
    budget: '$2,000 - $5,000',
    proposals: 8,
    status: 'pending',
    postedDate: '2025-10-15'
  },
  {
    id: 3,
    title: 'Penulisan Konten Blog SEO (10 Artikel)',
    client: { name: 'Budi Santoso', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100' },
    category: 'Penulisan',
    budget: '$300 - $600',
    proposals: 15,
    status: 'active',
    postedDate: '2025-10-12'
  },
  {
    id: 4,
    title: 'Video Animasi Explainer 2 Menit',
    client: { name: 'Dewi Lestari', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100' },
    category: 'Video',
    budget: '$800 - $1,500',
    proposals: 6,
    status: 'completed',
    postedDate: '2025-09-28'
  },
  {
    id: 5,
    title: 'Strategi Media Sosial untuk Brand Fashion',
    client: { name: 'Rina Anggraini', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100' },
    category: 'Pemasaran',
    budget: '$1,000 - $2,000',
    proposals: 10,
    status: 'pending',
    postedDate: '2025-10-14'
  }
];

export default function ProjectsManagement() {
  const [projects, setProjects] = useState<Project[]>(mockProjects);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleStatusChange = (projectId: number, newStatus: 'active' | 'rejected') => {
    setProjects(projects.map(p => 
      p.id === projectId ? { ...p, status: newStatus } : p
    ));
    
    toast.success(
      newStatus === 'active' 
        ? 'Proyek berhasil disetujui' 
        : 'Proyek berhasil ditolak'
    );
    setDialogOpen(false);
  };

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.client.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === 'all' || project.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const stats = {
    total: projects.length,
    pending: projects.filter(p => p.status === 'pending').length,
    active: projects.filter(p => p.status === 'active').length,
    completed: projects.filter(p => p.status === 'completed').length
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-gray-100 to-gray-200">
      <AdminSidebar />
      <div className="flex-1 ml-64 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="mb-2">Manajemen Proyek</h1>
          <p className="text-gray-600">Kelola dan moderasi semua proyek di platform</p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="p-6 border-0 bg-white shadow-lg">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm text-gray-600">Total Proyek</p>
              <TrendingUp className="w-5 h-5 text-gray-600" />
            </div>
            <p className="text-gray-900">{stats.total}</p>
          </Card>
          <Card className="p-6 border-0 bg-white shadow-lg">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm text-gray-600">Menunggu Review</p>
              <Clock className="w-5 h-5 text-gray-600" />
            </div>
            <p className="text-gray-900">{stats.pending}</p>
          </Card>
          <Card className="p-6 border-0 bg-white shadow-lg">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm text-gray-600">Proyek Aktif</p>
              <CheckCircle className="w-5 h-5 text-gray-600" />
            </div>
            <p className="text-gray-900">{stats.active}</p>
          </Card>
          <Card className="p-6 border-0 bg-white shadow-lg">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm text-gray-600">Selesai</p>
              <CheckCircle className="w-5 h-5 text-gray-600" />
            </div>
            <p className="text-gray-900">{stats.completed}</p>
          </Card>
        </div>

        {/* Filters */}
        <Card className="p-6 border-0 bg-white shadow-lg mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                placeholder="Cari proyek atau klien..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 rounded-xl"
              />
            </div>
            <div className="w-full md:w-48">
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="rounded-xl">
                  <Filter className="w-4 h-4 mr-2" />
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Semua Status</SelectItem>
                  <SelectItem value="pending">Menunggu</SelectItem>
                  <SelectItem value="active">Aktif</SelectItem>
                  <SelectItem value="completed">Selesai</SelectItem>
                  <SelectItem value="rejected">Ditolak</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </Card>

        {/* Projects List */}
        <div className="space-y-4">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="p-6 border-0 bg-white shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="flex-1">{project.title}</h3>
                    <Badge className={`${
                      project.status === 'active' ? 'bg-black text-white' :
                      project.status === 'pending' ? 'bg-gray-400 text-white' :
                      project.status === 'completed' ? 'bg-gray-600 text-white' :
                      'bg-gray-300 text-gray-700'
                    } border-0`}>
                      {project.status === 'active' ? 'Aktif' :
                       project.status === 'pending' ? 'Menunggu' :
                       project.status === 'completed' ? 'Selesai' :
                       'Ditolak'}
                    </Badge>
                  </div>

                  <div className="flex items-center gap-4 mb-4">
                    <Avatar className="w-10 h-10 border-2 border-gray-200">
                      <AvatarImage src={project.client.avatar} />
                      <AvatarFallback>{project.client.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm">{project.client.name}</p>
                      <div className="flex items-center gap-3 text-xs text-gray-600">
                        <span>{project.category}</span>
                        <span>•</span>
                        <span>{project.budget}</span>
                        <span>•</span>
                        <span>{project.proposals} proposal</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-xs text-gray-500">
                    Diposting: {new Date(project.postedDate).toLocaleDateString('id-ID', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </p>
                </div>

                <div className="flex flex-col gap-2">
                  <Button
                    variant="outline"
                    className="rounded-full"
                    onClick={() => {
                      setSelectedProject(project);
                      setDialogOpen(true);
                    }}
                  >
                    <Eye className="w-4 h-4 mr-2" />
                    Lihat Detail
                  </Button>
                  
                  {project.status === 'pending' && (
                    <div className="flex gap-2">
                      <Button
                        className="rounded-full bg-black hover:bg-gray-800 text-white flex-1"
                        onClick={() => handleStatusChange(project.id, 'active')}
                      >
                        <CheckCircle className="w-4 h-4 mr-2" />
                        Setujui
                      </Button>
                      <Button
                        variant="outline"
                        className="rounded-full border-gray-300 flex-1"
                        onClick={() => handleStatusChange(project.id, 'rejected')}
                      >
                        <XCircle className="w-4 h-4 mr-2" />
                        Tolak
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </Card>
          ))}

          {filteredProjects.length === 0 && (
            <Card className="p-12 border-0 bg-white shadow-lg text-center">
              <p className="text-gray-500">Tidak ada proyek yang ditemukan</p>
            </Card>
          )}
        </div>
        </div>
      </div>

      {/* Detail Dialog */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>{selectedProject?.title}</DialogTitle>
            <DialogDescription>
              Detail lengkap proyek
            </DialogDescription>
          </DialogHeader>
          
          {selectedProject && (
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                <Avatar className="w-12 h-12 border-2 border-gray-200">
                  <AvatarImage src={selectedProject.client.avatar} />
                  <AvatarFallback>{selectedProject.client.name[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm">Klien: {selectedProject.client.name}</p>
                  <p className="text-xs text-gray-600">Diposting {new Date(selectedProject.postedDate).toLocaleDateString('id-ID')}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Kategori</p>
                  <Badge className="bg-black text-white border-0">{selectedProject.category}</Badge>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Anggaran</p>
                  <p className="text-sm">{selectedProject.budget}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Total Proposal</p>
                  <p className="text-sm">{selectedProject.proposals} proposal</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Status</p>
                  <Badge className={`${
                    selectedProject.status === 'active' ? 'bg-black text-white' :
                    selectedProject.status === 'pending' ? 'bg-gray-400 text-white' :
                    selectedProject.status === 'completed' ? 'bg-gray-600 text-white' :
                    'bg-gray-300 text-gray-700'
                  } border-0`}>
                    {selectedProject.status === 'active' ? 'Aktif' :
                     selectedProject.status === 'pending' ? 'Menunggu' :
                     selectedProject.status === 'completed' ? 'Selesai' :
                     'Ditolak'}
                  </Badge>
                </div>
              </div>
            </div>
          )}

          <DialogFooter>
            {selectedProject?.status === 'pending' && (
              <div className="flex gap-2 w-full">
                <Button
                  className="rounded-full bg-black hover:bg-gray-800 text-white flex-1"
                  onClick={() => selectedProject && handleStatusChange(selectedProject.id, 'active')}
                >
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Setujui Proyek
                </Button>
                <Button
                  variant="outline"
                  className="rounded-full border-gray-300 flex-1"
                  onClick={() => selectedProject && handleStatusChange(selectedProject.id, 'rejected')}
                >
                  <XCircle className="w-4 h-4 mr-2" />
                  Tolak Proyek
                </Button>
              </div>
            )}
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
