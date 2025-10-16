import { Link } from 'react-router-dom';
import { DollarSign, TrendingUp, Clock, Star, Award, MessageCircle, CheckCircle, AlertCircle } from 'lucide-react';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Avatar, AvatarImage, AvatarFallback } from '../components/ui/avatar';
import { Progress } from '../components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';

const stats = [
  {
    title: 'Total Earnings',
    value: '$12,450',
    change: '+12% from last month',
    icon: DollarSign,
    color: 'from-green-400 to-emerald-500',
    bgColor: 'from-green-50 to-emerald-50'
  },
  {
    title: 'Active Projects',
    value: '8',
    change: '3 new this week',
    icon: Clock,
    color: 'from-blue-400 to-cyan-500',
    bgColor: 'from-blue-50 to-cyan-50'
  },
  {
    title: 'Completed Jobs',
    value: '156',
    change: '+8 this month',
    icon: CheckCircle,
    color: 'from-blue-400 to-blue-600',
    bgColor: 'from-blue-50 to-blue-100'
  },
  {
    title: 'Average Rating',
    value: '4.9',
    change: '127 reviews',
    icon: Star,
    color: 'from-amber-400 to-orange-500',
    bgColor: 'from-amber-50 to-orange-50'
  }
];

const activeOrders = [
  {
    id: 1,
    title: 'E-commerce Website Design',
    client: 'TechStartup Inc.',
    avatar: 'https://images.unsplash.com/photo-1672685667592-0392f458f46f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjA1NTQxMzR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    progress: 65,
    dueDate: '5 days',
    amount: '$3,500',
    status: 'In Progress'
  },
  {
    id: 2,
    title: 'Mobile App UI/UX',
    client: 'Alex Rivera',
    avatar: 'https://images.unsplash.com/photo-1602465750834-d43bfa8bbb6d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBmcmVlbGFuY2VyJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzYwNTg3MTc0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    progress: 90,
    dueDate: '2 days',
    amount: '$2,800',
    status: 'Near Completion'
  },
  {
    id: 3,
    title: 'Brand Identity Package',
    client: 'Jessica Lee',
    avatar: 'https://images.unsplash.com/photo-1670851810697-68ddb4ecae1c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHByb2Zlc3Npb25hbCUyMHdvcmt8ZW58MXx8fHwxNzYwNTg3MTc1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    progress: 30,
    dueDate: '12 days',
    amount: '$1,500',
    status: 'Just Started'
  }
];

const recentMessages = [
  {
    id: 1,
    name: 'TechStartup Inc.',
    avatar: 'https://images.unsplash.com/photo-1672685667592-0392f458f46f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjA1NTQxMzR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    message: 'Can you send the updated mockups?',
    time: '10m ago',
    unread: true
  },
  {
    id: 2,
    name: 'Alex Rivera',
    avatar: 'https://images.unsplash.com/photo-1602465750834-d43bfa8bbb6d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBmcmVlbGFuY2VyJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzYwNTg3MTc0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    message: 'The design looks amazing!',
    time: '1h ago',
    unread: false
  }
];

const skillGrowth = [
  { skill: 'UI/UX Design', current: 95, target: 100 },
  { skill: 'Client Communication', current: 88, target: 95 },
  { skill: 'Project Management', current: 82, target: 90 }
];

export default function DashboardFreelancer() {
  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="mb-2">Welcome back, Sarah!</h1>
            <p className="text-gray-600">Here's what's happening with your freelance business today.</p>
          </div>
          <Link to="/marketplace">
            <Button className="rounded-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
              Find New Projects
            </Button>
          </Link>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          {stats.map((stat) => (
            <Card key={stat.title} className={`p-6 border-0 bg-gradient-to-br ${stat.bgColor} shadow-lg`}>
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
              </div>
              <div className="mb-2">{stat.value}</div>
              <p className="text-gray-600 text-sm mb-1">{stat.title}</p>
              <p className="text-gray-500 text-xs">{stat.change}</p>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Active Orders */}
            <Card className="p-6 border-0 bg-white shadow-lg">
              <div className="flex items-center justify-between mb-6">
                <h3>Active Orders</h3>
                <Button variant="link" className="text-purple-600">View All</Button>
              </div>

              <div className="space-y-4">
                {activeOrders.map((order) => (
                  <Card key={order.id} className="p-4 bg-gradient-to-br from-gray-50 to-gray-100 border-gray-200 hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <Avatar className="w-10 h-10">
                          <AvatarImage src={order.avatar} />
                          <AvatarFallback>{order.client[0]}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="mb-1">{order.title}</p>
                          <p className="text-sm text-gray-600">{order.client}</p>
                        </div>
                      </div>
                      <Badge className="bg-gradient-to-r from-blue-500 to-purple-600 border-0">
                        {order.amount}
                      </Badge>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">Progress</span>
                        <span className="text-purple-600">{order.progress}%</span>
                      </div>
                      <Progress value={order.progress} className="h-2" />
                      <div className="flex items-center justify-between text-sm">
                        <Badge variant="outline" className="border-gray-300 text-gray-700">
                          {order.status}
                        </Badge>
                        <span className="text-gray-600 flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          Due in {order.dueDate}
                        </span>
                      </div>
                    </div>

                    <div className="flex gap-2 mt-4">
                      <Link to="/chat" className="flex-1">
                        <Button variant="outline" className="w-full rounded-full border-gray-300 text-gray-700 hover:bg-gray-100">
                          <MessageCircle className="w-4 h-4 mr-2" />
                          Message
                        </Button>
                      </Link>
                      <Button className="flex-1 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
                        Update Progress
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </Card>

            {/* Earnings Chart */}
            <Card className="p-6 border-0 bg-white shadow-lg">
              <h3 className="mb-6">Earnings Overview</h3>
              <div className="h-64 flex items-end justify-between gap-2">
                {[3200, 4100, 3800, 5200, 4900, 6100, 5500, 7200, 6800, 8100, 7400, 9200].map((value, index) => (
                  <div key={index} className="flex-1 flex flex-col items-center gap-2">
                    <div className="text-xs text-gray-600">${(value / 1000).toFixed(1)}k</div>
                    <div 
                      className="w-full bg-gradient-to-t from-blue-500 to-purple-600 rounded-t-lg hover:opacity-80 transition-opacity cursor-pointer" 
                      style={{ height: `${(value / 9200) * 100}%` }}
                    ></div>
                    <span className="text-xs text-gray-500">
                      {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][index]}
                    </span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Skill Analytics */}
            <Card className="p-6 border-0 bg-white shadow-lg">
              <h3 className="mb-6">Skill Growth Analytics</h3>
              <div className="space-y-6">
                {skillGrowth.map((item) => (
                  <div key={item.skill}>
                    <div className="flex items-center justify-between mb-2">
                      <span>{item.skill}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-600">{item.current}%</span>
                        <TrendingUp className="w-4 h-4 text-green-500" />
                      </div>
                    </div>
                    <div className="relative">
                      <Progress value={item.current} className="h-3" />
                      <div className="absolute top-0 left-0 h-3 w-1 bg-gray-700" style={{ left: `${item.target}%` }}></div>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">Target: {item.target}%</p>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-1 space-y-6">
            {/* Reward Points */}
            <Card className="p-6 border-0 bg-gradient-to-br from-amber-400 to-orange-500 text-white shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-white/80 text-sm">Reward Points</p>
                  <p className="text-2xl">2,850</p>
                </div>
              </div>
              <Progress value={57} className="h-2 mb-2 bg-white/20" />
              <p className="text-white/80 text-sm">1,150 points to next level</p>
              <Button variant="outline" className="w-full mt-4 rounded-full border-white text-white hover:bg-white/20">
                Redeem Rewards
              </Button>
            </Card>

            {/* Balance */}
            <Card className="p-6 border-0 bg-white shadow-lg">
              <h4 className="mb-4">Available Balance</h4>
              <div className="mb-6">$4,250.00</div>
              <div className="space-y-2 mb-4 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Pending</span>
                  <span>$2,800.00</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">On Hold</span>
                  <span>$1,200.00</span>
                </div>
              </div>
              <Button className="w-full rounded-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
                Withdraw Funds
              </Button>
            </Card>

            {/* Recent Messages */}
            <Card className="p-6 border-0 bg-white shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <h4>Recent Messages</h4>
                <Link to="/chat">
                  <Button variant="link" className="text-purple-600 text-sm">View All</Button>
                </Link>
              </div>

              <div className="space-y-3">
                {recentMessages.map((msg) => (
                  <Link key={msg.id} to="/chat">
                    <div className="flex items-start gap-3 p-3 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer">
                      <div className="relative">
                        <Avatar className="w-10 h-10">
                          <AvatarImage src={msg.avatar} />
                          <AvatarFallback>{msg.name[0]}</AvatarFallback>
                        </Avatar>
                        {msg.unread && (
                          <span className="absolute top-0 right-0 w-3 h-3 bg-gray-700 border-2 border-white rounded-full"></span>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <p className="text-sm truncate">{msg.name}</p>
                          <span className="text-xs text-gray-500">{msg.time}</span>
                        </div>
                        <p className="text-sm text-gray-600 truncate">{msg.message}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </Card>

            {/* Quick Actions */}
            <Card className="p-6 border-0 bg-gradient-to-br from-gray-50 to-gray-100 border-gray-200 shadow-lg">
              <h4 className="mb-4">Quick Actions</h4>
              <div className="space-y-2">
                <Button variant="outline" className="w-full rounded-full border-purple-300 text-purple-600 hover:bg-purple-100 justify-start">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Submit Deliverable
                </Button>
                <Button variant="outline" className="w-full rounded-full border-purple-300 text-purple-600 hover:bg-purple-100 justify-start">
                  <AlertCircle className="w-4 h-4 mr-2" />
                  Request Extension
                </Button>
                <Link to="/freelancer/1" className="block">
                  <Button variant="outline" className="w-full rounded-full border-purple-300 text-purple-600 hover:bg-purple-100 justify-start">
                    <Star className="w-4 h-4 mr-2" />
                    Update Profile
                  </Button>
                </Link>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
