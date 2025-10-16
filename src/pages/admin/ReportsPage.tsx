import { Download, TrendingUp, Users, DollarSign, Briefcase, Calendar } from 'lucide-react';
import { Card } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Badge } from '../../components/ui/badge';
import { Progress } from '../../components/ui/progress';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../components/ui/select';
import { toast } from 'sonner@2.0.3';
import AdminSidebar from '../../components/AdminSidebar';

const revenueByCategory = [
  { category: 'Desain', revenue: 45600, percentage: 32, growth: '+15%' },
  { category: 'Pengembangan', revenue: 38200, percentage: 27, growth: '+22%' },
  { category: 'Penulisan', revenue: 28400, percentage: 20, growth: '+8%' },
  { category: 'Pemasaran', revenue: 21300, percentage: 15, growth: '+12%' },
  { category: 'Video & Animasi', revenue: 8500, percentage: 6, growth: '+5%' }
];

const topClients = [
  { name: 'PT. Teknologi Maju', projects: 24, spent: 48500, growth: '+18%' },
  { name: 'CV. Digital Kreatif', projects: 18, spent: 36200, growth: '+25%' },
  { name: 'PT. Media Online', projects: 15, spent: 28900, growth: '+12%' },
  { name: 'Startup Innovation', projects: 12, spent: 22400, growth: '+30%' },
  { name: 'PT. Solusi Bisnis', projects: 10, spent: 18700, growth: '+8%' }
];

const topFreelancers = [
  { name: 'Sarah Johnson', completed: 87, earned: 52300, rating: 4.9 },
  { name: 'Marcus Chen', completed: 65, earned: 48900, rating: 5.0 },
  { name: 'Emma Watson', completed: 52, earned: 38200, rating: 4.8 },
  { name: 'David Anderson', completed: 48, earned: 34600, rating: 4.7 },
  { name: 'Lisa Martinez', completed: 42, earned: 29800, rating: 4.9 }
];

const monthlyComparison = [
  { month: 'Jul', revenue: 42000, projects: 156, users: 245 },
  { month: 'Aug', revenue: 48000, projects: 178, users: 289 },
  { month: 'Sep', revenue: 45000, projects: 165, users: 312 },
  { month: 'Oct', revenue: 52000, projects: 192, users: 356 },
  { month: 'Nov', revenue: 48000, projects: 184, users: 398 },
  { month: 'Dec', revenue: 58000, projects: 215, users: 445 },
  { month: 'Jan', revenue: 62000, projects: 234, users: 502 }
];

export default function ReportsPage() {
  const handleExportReport = (type: string) => {
    toast.success(`Laporan ${type} berhasil diekspor`, {
      description: 'File akan diunduh dalam beberapa detik'
    });
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-gray-100 to-gray-200">
      <AdminSidebar />
      <div className="flex-1 ml-64 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="mb-2">Laporan & Analitik</h1>
            <p className="text-gray-600">Analisis performa platform secara mendalam</p>
          </div>
          
          <div className="flex items-center gap-3">
            <Select defaultValue="7days">
              <SelectTrigger className="w-40 rounded-xl">
                <Calendar className="w-4 h-4 mr-2" />
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="7days">7 Hari Terakhir</SelectItem>
                <SelectItem value="30days">30 Hari Terakhir</SelectItem>
                <SelectItem value="3months">3 Bulan Terakhir</SelectItem>
                <SelectItem value="year">1 Tahun Terakhir</SelectItem>
              </SelectContent>
            </Select>
            <Button 
              className="rounded-full bg-black hover:bg-gray-800 text-white"
              onClick={() => handleExportReport('lengkap')}
            >
              <Download className="w-4 h-4 mr-2" />
              Ekspor Laporan
            </Button>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="p-6 border-0 bg-white shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-gray-700 to-black flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-white" />
              </div>
              <Badge className="bg-gray-100 text-gray-700 border-0">
                <TrendingUp className="w-3 h-3 mr-1" />
                +18.5%
              </Badge>
            </div>
            <p className="text-sm text-gray-600 mb-1">Total Pendapatan</p>
            <p className="text-gray-900">$142,500</p>
            <p className="text-xs text-gray-500 mt-1">vs bulan lalu</p>
          </Card>

          <Card className="p-6 border-0 bg-white shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-gray-700 to-black flex items-center justify-center">
                <Briefcase className="w-6 h-6 text-white" />
              </div>
              <Badge className="bg-gray-100 text-gray-700 border-0">
                <TrendingUp className="w-3 h-3 mr-1" />
                +12.3%
              </Badge>
            </div>
            <p className="text-sm text-gray-600 mb-1">Proyek Selesai</p>
            <p className="text-gray-900">1,234</p>
            <p className="text-xs text-gray-500 mt-1">vs bulan lalu</p>
          </Card>

          <Card className="p-6 border-0 bg-white shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-gray-700 to-black flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
              <Badge className="bg-gray-100 text-gray-700 border-0">
                <TrendingUp className="w-3 h-3 mr-1" />
                +8.7%
              </Badge>
            </div>
            <p className="text-sm text-gray-600 mb-1">Pengguna Aktif</p>
            <p className="text-gray-900">8,542</p>
            <p className="text-xs text-gray-500 mt-1">vs bulan lalu</p>
          </Card>

          <Card className="p-6 border-0 bg-white shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-gray-700 to-black flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <Badge className="bg-gray-100 text-gray-700 border-0">
                <TrendingUp className="w-3 h-3 mr-1" />
                +15.2%
              </Badge>
            </div>
            <p className="text-sm text-gray-600 mb-1">Tingkat Konversi</p>
            <p className="text-gray-900">68.4%</p>
            <p className="text-xs text-gray-500 mt-1">vs bulan lalu</p>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 mb-6">
          {/* Revenue by Category */}
          <Card className="p-6 border-0 bg-white shadow-lg">
            <div className="flex items-center justify-between mb-6">
              <h3>Pendapatan per Kategori</h3>
              <Button 
                variant="outline" 
                className="rounded-full"
                onClick={() => handleExportReport('kategori')}
              >
                <Download className="w-4 h-4" />
              </Button>
            </div>

            <div className="space-y-4">
              {revenueByCategory.map((item, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center">
                        <span className="text-sm">{index + 1}</span>
                      </div>
                      <div>
                        <p className="text-sm">{item.category}</p>
                        <p className="text-xs text-gray-600">{item.percentage}% dari total</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm">${item.revenue.toLocaleString()}</p>
                      <Badge className="text-xs bg-gray-100 text-gray-700 border-0">
                        {item.growth}
                      </Badge>
                    </div>
                  </div>
                  <Progress value={item.percentage} className="h-2" />
                </div>
              ))}
            </div>
          </Card>

          {/* Monthly Comparison Chart */}
          <Card className="p-6 border-0 bg-white shadow-lg">
            <div className="flex items-center justify-between mb-6">
              <h3>Perbandingan Bulanan</h3>
              <Button 
                variant="outline" 
                className="rounded-full"
                onClick={() => handleExportReport('bulanan')}
              >
                <Download className="w-4 h-4" />
              </Button>
            </div>

            <div className="h-64 flex items-end justify-between gap-2">
              {monthlyComparison.map((item, index) => {
                const maxRevenue = Math.max(...monthlyComparison.map(m => m.revenue));
                const height = (item.revenue / maxRevenue) * 100;
                
                return (
                  <div key={index} className="flex-1 flex flex-col items-center gap-2">
                    <div className="w-full flex flex-col items-center justify-end" style={{ height: '200px' }}>
                      <span className="text-xs text-gray-700 mb-2">${(item.revenue / 1000).toFixed(0)}k</span>
                      <div 
                        className="w-full bg-gradient-to-t from-gray-700 to-black rounded-t-lg hover:opacity-80 transition-opacity cursor-pointer"
                        style={{ height: `${height}%` }}
                        title={`Revenue: $${item.revenue.toLocaleString()}\nProjects: ${item.projects}\nUsers: ${item.users}`}
                      ></div>
                    </div>
                    <span className="text-xs text-gray-500">{item.month}</span>
                  </div>
                );
              })}
            </div>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Top Clients */}
          <Card className="p-6 border-0 bg-white shadow-lg">
            <div className="flex items-center justify-between mb-6">
              <h3>Klien Teratas</h3>
              <Button 
                variant="outline" 
                className="rounded-full"
                onClick={() => handleExportReport('klien')}
              >
                <Download className="w-4 h-4" />
              </Button>
            </div>

            <div className="space-y-4">
              {topClients.map((client, index) => (
                <div key={index} className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-700 to-black flex items-center justify-center text-white">
                    #{index + 1}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm mb-1">{client.name}</p>
                    <div className="flex items-center gap-3 text-xs text-gray-600">
                      <span>{client.projects} proyek</span>
                      <span>•</span>
                      <span>${client.spent.toLocaleString()} total</span>
                    </div>
                  </div>
                  <Badge className="bg-gray-100 text-gray-700 border-0">
                    {client.growth}
                  </Badge>
                </div>
              ))}
            </div>
          </Card>

          {/* Top Freelancers */}
          <Card className="p-6 border-0 bg-white shadow-lg">
            <div className="flex items-center justify-between mb-6">
              <h3>Freelancer Teratas</h3>
              <Button 
                variant="outline" 
                className="rounded-full"
                onClick={() => handleExportReport('freelancer')}
              >
                <Download className="w-4 h-4" />
              </Button>
            </div>

            <div className="space-y-4">
              {topFreelancers.map((freelancer, index) => (
                <div key={index} className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-700 to-black flex items-center justify-center text-white">
                    #{index + 1}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm mb-1">{freelancer.name}</p>
                    <div className="flex items-center gap-3 text-xs text-gray-600">
                      <span>{freelancer.completed} selesai</span>
                      <span>•</span>
                      <span>⭐ {freelancer.rating}</span>
                    </div>
                  </div>
                  <p className="text-sm">${freelancer.earned.toLocaleString()}</p>
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
