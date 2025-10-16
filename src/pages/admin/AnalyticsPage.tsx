import { BarChart3, TrendingUp, Users, DollarSign, Clock, Target } from 'lucide-react';
import { Card } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import { Progress } from '../../components/ui/progress';
import AdminSidebar from '../../components/AdminSidebar';

const platformMetrics = [
  { label: 'Total Revenue', value: '$248,650', change: '+18.2%', trend: 'up' },
  { label: 'Active Users', value: '12,458', change: '+12.5%', trend: 'up' },
  { label: 'Completion Rate', value: '94.2%', change: '+2.1%', trend: 'up' },
  { label: 'Avg Project Value', value: '$842', change: '-3.4%', trend: 'down' }
];

const categoryPerformance = [
  { name: 'Development', revenue: 95000, projects: 387, growth: 24 },
  { name: 'Design', revenue: 78000, projects: 245, growth: 18 },
  { name: 'Marketing', revenue: 42000, projects: 198, growth: 15 },
  { name: 'Writing', revenue: 18000, projects: 156, growth: 12 },
  { name: 'Video', revenue: 12000, projects: 142, growth: 8 },
  { name: 'Music', revenue: 3650, projects: 89, growth: 5 }
];

const userActivity = [
  { day: 'Mon', freelancers: 1240, clients: 580 },
  { day: 'Tue', freelancers: 1380, clients: 620 },
  { day: 'Wed', freelancers: 1520, clients: 680 },
  { day: 'Thu', freelancers: 1680, clients: 720 },
  { day: 'Fri', freelancers: 1820, clients: 780 },
  { day: 'Sat', freelancers: 980, clients: 420 },
  { day: 'Sun', freelancers: 860, clients: 380 }
];

const topRegions = [
  { country: 'Indonesia', users: 4250, revenue: 85200, flag: '🇮🇩' },
  { country: 'United States', users: 2840, revenue: 128400, flag: '🇺🇸' },
  { country: 'India', users: 1920, revenue: 42800, flag: '🇮🇳' },
  { country: 'United Kingdom', users: 1480, revenue: 68200, flag: '🇬🇧' },
  { country: 'Australia', users: 980, revenue: 52400, flag: '🇦🇺' }
];

export default function AnalyticsPage() {
  const maxActivity = Math.max(...userActivity.map(d => d.freelancers + d.clients));

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-gray-100 to-gray-200">
      <AdminSidebar />
      
      <div className="flex-1 ml-64 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-2">
              <BarChart3 className="w-8 h-8 text-gray-700" />
              <h1>Platform Analytics</h1>
            </div>
            <p className="text-gray-600">Analisis mendalam performa platform</p>
          </div>

          {/* Key Metrics */}
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            {platformMetrics.map((metric, index) => (
              <Card key={index} className="p-6 border-0 bg-white shadow-lg">
                <div className="flex items-center justify-between mb-3">
                  <p className="text-sm text-gray-600">{metric.label}</p>
                  <Badge className={metric.trend === 'up' ? 'bg-black text-white' : 'bg-gray-300 text-gray-700'}>
                    {metric.change}
                  </Badge>
                </div>
                <p className="text-gray-900">{metric.value}</p>
              </Card>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-6 mb-8">
            {/* Category Performance */}
            <Card className="p-6 border-0 bg-white shadow-lg">
              <h3 className="mb-6">Performa per Kategori</h3>
              <div className="space-y-4">
                {categoryPerformance.map((cat, index) => (
                  <div key={index}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex-1">
                        <p className="text-sm mb-1">{cat.name}</p>
                        <p className="text-xs text-gray-600">{cat.projects} proyek</p>
                      </div>
                      <p className="text-gray-900">${(cat.revenue / 1000).toFixed(0)}k</p>
                    </div>
                    <Progress value={cat.growth * 4} className="h-2" />
                  </div>
                ))}
              </div>
            </Card>

            {/* User Activity */}
            <Card className="p-6 border-0 bg-white shadow-lg">
              <h3 className="mb-6">Aktivitas User (7 Hari Terakhir)</h3>
              <div className="h-64 flex items-end justify-between gap-2">
                {userActivity.map((day, index) => (
                  <div key={index} className="flex-1 flex flex-col items-center gap-2">
                    <div className="w-full flex flex-col items-center justify-end" style={{ height: '200px' }}>
                      <span className="text-xs text-gray-600 mb-2">
                        {((day.freelancers + day.clients) / 1000).toFixed(1)}k
                      </span>
                      <div className="w-full flex flex-col items-center justify-end gap-1" style={{ height: '180px' }}>
                        {/* Freelancers */}
                        <div 
                          className="w-full bg-gradient-to-t from-gray-700 to-black rounded-t-lg"
                          style={{ height: `${(day.freelancers / maxActivity) * 100}%` }}
                          title={`Freelancers: ${day.freelancers}`}
                        ></div>
                        {/* Clients */}
                        <div 
                          className="w-full bg-gradient-to-t from-gray-400 to-gray-600 rounded-t-lg"
                          style={{ height: `${(day.clients / maxActivity) * 100}%` }}
                          title={`Clients: ${day.clients}`}
                        ></div>
                      </div>
                    </div>
                    <span className="text-xs text-gray-500">{day.day}</span>
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-center gap-6 mt-6">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-gradient-to-br from-gray-700 to-black rounded"></div>
                  <span className="text-xs text-gray-600">Freelancers</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-gradient-to-br from-gray-400 to-gray-600 rounded"></div>
                  <span className="text-xs text-gray-600">Clients</span>
                </div>
              </div>
            </Card>
          </div>

          {/* Geographic Distribution */}
          <Card className="p-6 border-0 bg-white shadow-lg mb-8">
            <h3 className="mb-6">Distribusi Geografis</h3>
            <div className="space-y-4">
              {topRegions.map((region, index) => (
                <div key={index} className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors">
                  <div className="text-3xl">{region.flag}</div>
                  <div className="flex-1">
                    <p className="mb-1">{region.country}</p>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <span>{region.users.toLocaleString()} users</span>
                      <span>•</span>
                      <span>${region.revenue.toLocaleString()} revenue</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-900">
                      {((region.users / 12458) * 100).toFixed(1)}%
                    </p>
                    <p className="text-xs text-gray-500">market share</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Platform Health */}
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 border-0 bg-gradient-to-br from-gray-700 to-black text-white shadow-lg">
              <Users className="w-8 h-8 mb-3 opacity-90" />
              <p className="text-sm text-gray-300 mb-2">User Retention</p>
              <p className="text-white mb-1">87.4%</p>
              <p className="text-xs text-gray-300">+4.2% from last month</p>
            </Card>

            <Card className="p-6 border-0 bg-gradient-to-br from-gray-700 to-black text-white shadow-lg">
              <Target className="w-8 h-8 mb-3 opacity-90" />
              <p className="text-sm text-gray-300 mb-2">Success Rate</p>
              <p className="text-white mb-1">94.2%</p>
              <p className="text-xs text-gray-300">+2.1% from last month</p>
            </Card>

            <Card className="p-6 border-0 bg-gradient-to-br from-gray-700 to-black text-white shadow-lg">
              <Clock className="w-8 h-8 mb-3 opacity-90" />
              <p className="text-sm text-gray-300 mb-2">Avg Response Time</p>
              <p className="text-white mb-1">2.3 hours</p>
              <p className="text-xs text-gray-300">-0.5 hours improvement</p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
