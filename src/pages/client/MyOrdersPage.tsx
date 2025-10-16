import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Clock, CheckCircle, AlertCircle, XCircle, MessageSquare, Eye, Star } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Card } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import { Progress } from '../../components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs';
import { Avatar, AvatarImage, AvatarFallback } from '../../components/ui/avatar';
import { Input } from '../../components/ui/input';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';

const orders = [
  {
    id: 1,
    title: 'Modern Logo Design',
    service: 'Logo Design Package',
    freelancer: {
      name: 'Sarah Johnson',
      avatar: 'https://images.unsplash.com/photo-1670851810697-68ddb4ecae1c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHByb2Zlc3Npb25hbCUyMHdvcmt8ZW58MXx8fHwxNzYwNTg3MTc1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      rating: 4.9
    },
    amount: 150,
    status: 'in_progress',
    progress: 65,
    orderDate: 'Jan 10, 2025',
    dueDate: 'Jan 18, 2025',
    image: 'https://images.unsplash.com/photo-1656907959288-f5aa29da7020?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwY3JlYXRpdml0eXxlbnwxfHx8fDE3NjA1ODcxNzR8MA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    id: 2,
    title: 'E-commerce Website Development',
    service: 'Full Stack Development',
    freelancer: {
      name: 'Marcus Chen',
      avatar: 'https://images.unsplash.com/photo-1672685667592-0392f458f46f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjA1NTQxMzR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      rating: 5.0
    },
    amount: 800,
    status: 'pending',
    progress: 15,
    orderDate: 'Jan 12, 2025',
    dueDate: 'Jan 28, 2025',
    image: 'https://images.unsplash.com/photo-1699570047113-16fdf623e83e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHdvcmtzcGFjZSUyMGNvbGxhYm9yYXRpb258ZW58MXx8fHwxNzYwNTEyMTI2fDA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    id: 3,
    title: 'Content Writing & SEO',
    service: 'Professional Writing',
    freelancer: {
      name: 'Emma Watson',
      avatar: 'https://images.unsplash.com/photo-1602465750834-d43bfa8bbb6d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBmcmVlbGFuY2VyJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzYwNTg3MTc0fDA&ixlib=rb-4.1.0&q=80&w=1080',
      rating: 4.8
    },
    amount: 200,
    status: 'completed',
    progress: 100,
    orderDate: 'Jan 5, 2025',
    dueDate: 'Jan 12, 2025',
    image: 'https://images.unsplash.com/photo-1748346918817-0b1b6b2f9bab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB0ZWFtd29ya3xlbnwxfHx8fDE3NjA0OTYyNDV8MA&ixlib=rb-4.1.0&q=80&w=1080'
  }
];

export default function MyOrdersPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="w-5 h-5 text-green-600" />;
      case 'in_progress':
        return <Clock className="w-5 h-5 text-indigo-600" />;
      case 'pending':
        return <AlertCircle className="w-5 h-5 text-yellow-600" />;
      default:
        return <XCircle className="w-5 h-5 text-red-600" />;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'completed':
        return <Badge className="bg-green-500 border-0">Completed</Badge>;
      case 'in_progress':
        return <Badge className="bg-indigo-500 border-0">In Progress</Badge>;
      case 'pending':
        return <Badge className="bg-yellow-500 border-0">Pending</Badge>;
      default:
        return <Badge className="bg-red-500 border-0">Cancelled</Badge>;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-indigo-50 to-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="mb-2">My Orders</h1>
            <p className="text-gray-600">Track and manage your project orders</p>
          </div>
          <Link to="/marketplace">
            <Button className="rounded-full bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700">
              Browse Services
            </Button>
          </Link>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="p-6 border-0 bg-white shadow-lg">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center">
                <AlertCircle className="w-5 h-5 text-yellow-600" />
              </div>
              <div>
                <p className="text-gray-600 text-sm">Pending</p>
                <p className="text-indigo-600">1</p>
              </div>
            </div>
          </Card>

          <Card className="p-6 border-0 bg-white shadow-lg">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center">
                <Clock className="w-5 h-5 text-indigo-600" />
              </div>
              <div>
                <p className="text-gray-600 text-sm">In Progress</p>
                <p className="text-indigo-600">1</p>
              </div>
            </div>
          </Card>

          <Card className="p-6 border-0 bg-white shadow-lg">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <p className="text-gray-600 text-sm">Completed</p>
                <p className="text-indigo-600">1</p>
              </div>
            </div>
          </Card>

          <Card className="p-6 border-0 bg-white shadow-lg">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center">
                <span className="text-indigo-600">$</span>
              </div>
              <div>
                <p className="text-gray-600 text-sm">Total Spent</p>
                <p className="text-indigo-600">$1,150</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Filters & Search */}
        <Card className="p-6 mb-6 border-0 bg-white shadow-lg">
          <div className="flex items-center gap-4">
            <Input
              placeholder="Search orders..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 rounded-xl"
            />
            <Tabs defaultValue="all" className="w-auto">
              <TabsList className="bg-gray-100 p-1 rounded-xl">
                <TabsTrigger value="all" className="rounded-lg">All</TabsTrigger>
                <TabsTrigger value="active" className="rounded-lg">Active</TabsTrigger>
                <TabsTrigger value="completed" className="rounded-lg">Completed</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </Card>

        {/* Orders List */}
        <div className="space-y-6">
          {orders.map((order) => (
            <Card key={order.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 border-0 bg-white">
              <div className="grid md:grid-cols-4 gap-6 p-6">
                {/* Order Image */}
                <div className="relative h-48 md:h-auto rounded-2xl overflow-hidden bg-gradient-to-br from-indigo-400 to-indigo-600">
                  <ImageWithFallback
                    src={order.image}
                    alt={order.title}
                    className="w-full h-full object-cover mix-blend-overlay"
                  />
                  {getStatusBadge(order.status)}
                </div>

                {/* Order Details */}
                <div className="md:col-span-2 space-y-4">
                  <div>
                    <h3 className="mb-2">{order.title}</h3>
                    <p className="text-gray-600 text-sm mb-3">{order.service}</p>
                    
                    {/* Freelancer Info */}
                    <div className="flex items-center gap-3 mb-4">
                      <Avatar className="w-10 h-10 border-2 border-indigo-200">
                        <AvatarImage src={order.freelancer.avatar} />
                        <AvatarFallback>{order.freelancer.name[0]}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm">{order.freelancer.name}</p>
                        <div className="flex items-center gap-1">
                          <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                          <span className="text-xs text-gray-600">{order.freelancer.rating}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Progress */}
                  {order.status !== 'completed' && (
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-gray-600">Progress</span>
                        <span className="text-sm text-indigo-600">{order.progress}%</span>
                      </div>
                      <Progress value={order.progress} className="h-2" />
                    </div>
                  )}

                  {/* Dates */}
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-100">
                    <div>
                      <p className="text-xs text-gray-500">Order Date</p>
                      <p className="text-sm">{order.orderDate}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Due Date</p>
                      <p className="text-sm">{order.dueDate}</p>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col justify-between">
                  <div className="text-right mb-4">
                    <p className="text-xs text-gray-500 mb-1">Order Total</p>
                    <p className="text-indigo-600">${order.amount}</p>
                  </div>

                  <div className="space-y-2">
                    <Link to={`/project/${order.id}`}>
                      <Button 
                        variant="outline" 
                        className="w-full rounded-full border-indigo-300 text-indigo-600 hover:bg-indigo-50"
                      >
                        <Eye className="w-4 h-4 mr-2" />
                        View Details
                      </Button>
                    </Link>
                    <Link to="/chat">
                      <Button 
                        className="w-full rounded-full bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700"
                      >
                        <MessageSquare className="w-4 h-4 mr-2" />
                        Message
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Empty State */}
        {orders.length === 0 && (
          <Card className="p-16 text-center border-0 bg-white shadow-lg">
            <AlertCircle className="w-20 h-20 text-gray-300 mx-auto mb-4" />
            <h3 className="mb-2">No orders yet</h3>
            <p className="text-gray-600 mb-6">Start exploring services and hire talented freelancers</p>
            <Link to="/marketplace">
              <Button className="rounded-full bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700">
                Browse Services
              </Button>
            </Link>
          </Card>
        )}
      </div>
    </div>
  );
}
