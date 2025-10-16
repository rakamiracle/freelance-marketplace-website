import { Users, DollarSign, Briefcase, AlertTriangle, TrendingUp, ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { Card } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import { Progress } from '../../components/ui/progress';
import { Avatar, AvatarImage, AvatarFallback } from '../../components/ui/avatar';
import AdminSidebar from '../../components/AdminSidebar';

const stats = [
  {
    title: 'Total Users',
    value: '12,458',
    change: '+12.5%',
    changeType: 'increase',
    icon: Users,
    color: 'from-gray-700 to-gray-900'
  },
  {
    title: 'Total Revenue',
    value: '$248,650',
    change: '+18.2%',
    changeType: 'increase',
    icon: DollarSign,
    color: 'from-gray-700 to-gray-900'
  },
  {
    title: 'Active Projects',
    value: '1,847',
    change: '+8.1%',
    changeType: 'increase',
    icon: Briefcase,
    color: 'from-gray-700 to-gray-900'
  },
  {
    title: 'Open Disputes',
    value: '23',
    change: '-4.3%',
    changeType: 'decrease',
    icon: AlertTriangle,
    color: 'from-gray-700 to-gray-900'
  }
];

const recentTransactions = [
  { id: 1, from: 'John Smith', to: 'Sarah Johnson', amount: 150, type: 'payment', status: 'completed' },
  { id: 2, from: 'Emma Watson', to: 'Bank **** 4567', amount: 500, type: 'withdrawal', status: 'pending' },
  { id: 3, from: 'Mike Davis', to: 'Marcus Chen', amount: 300, type: 'payment', status: 'completed' },
  { id: 4, from: 'Lisa Anderson', to: 'Emma Watson', amount: 200, type: 'payment', status: 'completed' },
  { id: 5, from: 'Tom Brown', to: 'Bank **** 8901', amount: 800, type: 'withdrawal', status: 'processing' }
];

const topFreelancers = [
  { name: 'Sarah Johnson', revenue: 15240, orders: 87, rating: 4.9, avatar: 'https://images.unsplash.com/photo-1670851810697-68ddb4ecae1c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHByb2Zlc3Npb25hbCUyMHdvcmt8ZW58MXx8fHwxNzYwNTg3MTc1fDA&ixlib=rb-4.1.0&q=80&w=1080' },
  { name: 'Marcus Chen', revenue: 12800, orders: 65, rating: 5.0, avatar: 'https://images.unsplash.com/photo-1672685667592-0392f458f46f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjA1NTQxMzR8MA&ixlib=rb-4.1.0&q=80&w=1080' },
  { name: 'Emma Watson', revenue: 10500, orders: 52, rating: 4.8, avatar: 'https://images.unsplash.com/photo-1602465750834-d43bfa8bbb6d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBmcmVlbGFuY2VyJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzYwNTg3MTc0fDA&ixlib=rb-4.1.0&q=80&w=1080' }
];

const monthlyRevenue = [
  { month: 'Jul', amount: 42000 },
  { month: 'Aug', amount: 48000 },
  { month: 'Sep', amount: 45000 },
  { month: 'Oct', amount: 52000 },
  { month: 'Nov', amount: 48000 },
  { month: 'Dec', amount: 58000 },
  { month: 'Jan', amount: 62000 }
];

export default function AdminDashboard() {
  return (
    <div className="flex min-h-screen bg-gradient-to-br from-gray-100 to-gray-200">
      <AdminSidebar />
      <div className="flex-1 ml-64 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="mb-2">Admin Dashboard</h1>
          <p className="text-gray-600">Platform overview and key metrics</p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="p-6 border-0 bg-white shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <Badge className={`${
                    stat.changeType === 'increase' ? 'bg-gray-100 text-gray-700' : 'bg-gray-200 text-gray-800'
                  } border-0`}>
                    {stat.changeType === 'increase' ? (
                      <ArrowUpRight className="w-3 h-3 mr-1" />
                    ) : (
                      <ArrowDownRight className="w-3 h-3 mr-1" />
                    )}
                    {stat.change}
                  </Badge>
                </div>
                <p className="text-gray-600 text-sm mb-1">{stat.title}</p>
                <p className="text-gray-900">{stat.value}</p>
              </Card>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          {/* Revenue Chart */}
          <Card className="lg:col-span-2 p-6 border-0 bg-white shadow-lg">
            <div className="flex items-center justify-between mb-6">
              <h3>Monthly Revenue</h3>
              <Badge className="bg-gray-100 text-gray-700 border-0">
                Last 7 months
              </Badge>
            </div>

            <div className="h-64 flex items-end justify-between gap-3">
              {monthlyRevenue.map((item, index) => {
                const maxAmount = Math.max(...monthlyRevenue.map(e => e.amount));
                const height = (item.amount / maxAmount) * 100;
                return (
                  <div key={index} className="flex-1 flex flex-col items-center gap-2">
                    <div className="w-full flex flex-col items-center justify-end" style={{ height: '200px' }}>
                      <span className="text-xs text-gray-700 mb-2">${(item.amount / 1000).toFixed(0)}k</span>
                      <div 
                        className="w-full bg-gradient-to-t from-gray-700 to-gray-900 rounded-t-lg hover:opacity-80 transition-opacity cursor-pointer"
                        style={{ height: `${height}%` }}
                      ></div>
                    </div>
                    <span className="text-xs text-gray-500">{item.month}</span>
                  </div>
                );
              })}
            </div>
          </Card>

          {/* User Growth */}
          <Card className="p-6 border-0 bg-white shadow-lg">
            <h3 className="mb-6">User Growth</h3>
            
            <div className="space-y-6">
              <div className="p-4 bg-gray-50 rounded-2xl">
                <div className="flex items-center justify-between mb-3">
                  <p className="text-sm text-gray-600">Freelancers</p>
                  <p className="text-gray-900">8,245</p>
                </div>
                <Progress value={65} className="h-2" />
                <p className="text-xs text-gray-500 mt-2">+524 this month</p>
              </div>

              <div className="p-4 bg-gray-50 rounded-2xl">
                <div className="flex items-center justify-between mb-3">
                  <p className="text-sm text-gray-600">Clients</p>
                  <p className="text-gray-900">4,213</p>
                </div>
                <Progress value={35} className="h-2" />
                <p className="text-xs text-gray-500 mt-2">+298 this month</p>
              </div>

              <div className="p-4 bg-gradient-to-br from-gray-700 to-gray-900 text-white rounded-2xl">
                <div className="flex items-center gap-2 mb-2">
                  <TrendingUp className="w-5 h-5" />
                  <p className="text-sm">Growth Rate</p>
                </div>
                <p className="text-white">+12.5%</p>
                <p className="text-xs text-gray-300 mt-1">vs last month</p>
              </div>
            </div>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Recent Transactions */}
          <Card className="p-6 border-0 bg-white shadow-lg">
            <h3 className="mb-6">Recent Transactions</h3>
            
            <div className="space-y-4">
              {recentTransactions.map((transaction) => (
                <div key={transaction.id} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0">
                  <div className="flex-1">
                    <p className="text-sm mb-1">{transaction.from} → {transaction.to}</p>
                    <div className="flex items-center gap-2">
                      <Badge className={`text-xs ${
                        transaction.type === 'payment' ? 'bg-gray-100 text-gray-700' : 'bg-gray-200 text-gray-800'
                      } border-0`}>
                        {transaction.type}
                      </Badge>
                      <Badge className={`text-xs ${
                        transaction.status === 'completed' 
                          ? 'bg-black text-white' 
                          : transaction.status === 'pending'
                          ? 'bg-gray-300 text-gray-800'
                          : 'bg-gray-200 text-gray-700'
                      } border-0`}>
                        {transaction.status}
                      </Badge>
                    </div>
                  </div>
                  <p className="text-gray-900">${transaction.amount}</p>
                </div>
              ))}
            </div>
          </Card>

          {/* Top Freelancers */}
          <Card className="p-6 border-0 bg-white shadow-lg">
            <h3 className="mb-6">Top Performing Freelancers</h3>
            
            <div className="space-y-4">
              {topFreelancers.map((freelancer, index) => (
                <div key={index} className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors">
                  <div className="flex items-center gap-3 flex-1">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center text-white">
                      #{index + 1}
                    </div>
                    <Avatar className="w-12 h-12 border-2 border-gray-200">
                      <AvatarImage src={freelancer.avatar} />
                      <AvatarFallback>{freelancer.name[0]}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <p className="text-sm mb-1">{freelancer.name}</p>
                      <div className="flex items-center gap-3 text-xs text-gray-600">
                        <span>{freelancer.orders} orders</span>
                        <span>•</span>
                        <span>⭐ {freelancer.rating}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-900">${freelancer.revenue.toLocaleString()}</p>
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
