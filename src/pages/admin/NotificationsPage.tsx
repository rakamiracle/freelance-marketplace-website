import { useState } from 'react';
import { Bell, Send, Users, User, Briefcase } from 'lucide-react';
import { Card } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Textarea } from '../../components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '../../components/ui/radio-group';
import { Label } from '../../components/ui/label';
import { Badge } from '../../components/ui/badge';
import { toast } from 'sonner@2.0.3';
import AdminSidebar from '../../components/AdminSidebar';

const notificationHistory = [
  {
    id: 1,
    title: 'Platform Maintenance',
    message: 'Platform akan maintenance pada 20 Jan 2025',
    target: 'all',
    sentDate: '2025-01-15',
    recipients: 12458
  },
  {
    id: 2,
    title: 'New Feature Launch',
    message: 'Fitur video call telah diluncurkan!',
    target: 'freelancers',
    sentDate: '2025-01-12',
    recipients: 8245
  },
  {
    id: 3,
    title: 'Payment Update',
    message: 'Metode pembayaran baru tersedia',
    target: 'clients',
    sentDate: '2025-01-10',
    recipients: 4213
  }
];

export default function NotificationsPage() {
  const [formData, setFormData] = useState({
    title: '',
    message: '',
    target: 'all'
  });
  const [history] = useState(notificationHistory);

  const handleSend = () => {
    if (!formData.title || !formData.message) {
      toast.error('Judul dan pesan harus diisi');
      return;
    }

    toast.success('Notifikasi berhasil dikirim!', {
      description: `Dikirim ke ${formData.target === 'all' ? 'semua user' : formData.target}`
    });

    setFormData({ title: '', message: '', target: 'all' });
  };

  const getRecipientCount = (target: string) => {
    switch (target) {
      case 'all': return 12458;
      case 'freelancers': return 8245;
      case 'clients': return 4213;
      default: return 0;
    }
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-gray-100 to-gray-200">
      <AdminSidebar />
      
      <div className="flex-1 ml-64 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-2">
              <Bell className="w-8 h-8 text-gray-700" />
              <h1>Notification Center</h1>
            </div>
            <p className="text-gray-600">Kirim notifikasi ke user platform</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Send Notification Form */}
            <Card className="lg:col-span-2 p-6 border-0 bg-white shadow-lg">
              <h3 className="mb-6">Kirim Notifikasi Baru</h3>

              <div className="space-y-6">
                <div>
                  <Label>Target Penerima *</Label>
                  <RadioGroup 
                    value={formData.target} 
                    onValueChange={(value) => setFormData({ ...formData, target: value })}
                    className="mt-3 space-y-3"
                  >
                    <div className="flex items-center space-x-3 p-4 border-2 border-gray-200 rounded-xl hover:border-gray-400 transition-colors cursor-pointer">
                      <RadioGroupItem value="all" id="all" />
                      <Label htmlFor="all" className="flex-1 cursor-pointer flex items-center gap-2">
                        <Users className="w-5 h-5 text-gray-600" />
                        <div>
                          <p className="mb-1">Semua User</p>
                          <p className="text-sm text-gray-600">12,458 users</p>
                        </div>
                      </Label>
                    </div>

                    <div className="flex items-center space-x-3 p-4 border-2 border-gray-200 rounded-xl hover:border-gray-400 transition-colors cursor-pointer">
                      <RadioGroupItem value="freelancers" id="freelancers" />
                      <Label htmlFor="freelancers" className="flex-1 cursor-pointer flex items-center gap-2">
                        <Briefcase className="w-5 h-5 text-gray-600" />
                        <div>
                          <p className="mb-1">Freelancers Saja</p>
                          <p className="text-sm text-gray-600">8,245 freelancers</p>
                        </div>
                      </Label>
                    </div>

                    <div className="flex items-center space-x-3 p-4 border-2 border-gray-200 rounded-xl hover:border-gray-400 transition-colors cursor-pointer">
                      <RadioGroupItem value="clients" id="clients" />
                      <Label htmlFor="clients" className="flex-1 cursor-pointer flex items-center gap-2">
                        <User className="w-5 h-5 text-gray-600" />
                        <div>
                          <p className="mb-1">Clients Saja</p>
                          <p className="text-sm text-gray-600">4,213 clients</p>
                        </div>
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                <div>
                  <Label>Judul Notifikasi *</Label>
                  <Input
                    placeholder="contoh: Platform Update"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="mt-2 rounded-xl"
                  />
                </div>

                <div>
                  <Label>Pesan *</Label>
                  <Textarea
                    placeholder="Tulis pesan notifikasi yang akan dikirim..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="mt-2 rounded-xl h-32"
                  />
                  <p className="text-xs text-gray-500 mt-2">
                    {formData.message.length} karakter
                  </p>
                </div>

                <div className="p-4 bg-gray-100 border border-gray-300 rounded-xl">
                  <p className="text-sm text-gray-700">
                    <strong>ℹ️ Info:</strong> Notifikasi akan dikirim secara real-time ke {getRecipientCount(formData.target).toLocaleString()} user yang sedang online dan via email untuk yang offline.
                  </p>
                </div>

                <Button
                  onClick={handleSend}
                  className="w-full bg-gradient-to-r from-gray-700 to-black hover:from-gray-800 hover:to-gray-900"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Kirim Notifikasi
                </Button>
              </div>
            </Card>

            {/* Notification History */}
            <Card className="p-6 border-0 bg-white shadow-lg">
              <h3 className="mb-6">Riwayat Notifikasi</h3>

              <div className="space-y-4">
                {history.map((notif) => (
                  <div key={notif.id} className="p-4 bg-gray-50 rounded-2xl">
                    <div className="flex items-start justify-between mb-2">
                      <p className="text-sm mb-1">{notif.title}</p>
                      <Badge className="bg-gray-700 text-white text-xs">
                        {notif.target}
                      </Badge>
                    </div>
                    <p className="text-xs text-gray-600 mb-3">{notif.message}</p>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>{new Date(notif.sentDate).toLocaleDateString('id-ID')}</span>
                      <span>{notif.recipients.toLocaleString()} recipients</span>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
