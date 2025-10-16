import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Plus, Edit, Trash2, Eye, Package, DollarSign, Clock, Star } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Card } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '../../components/ui/dialog';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { Textarea } from '../../components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../components/ui/select';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';

const myServices = [
  {
    id: 1,
    title: 'Modern Logo Design for Your Brand',
    category: 'Design',
    price: 150,
    deliveryTime: '3 days',
    orders: 24,
    rating: 4.9,
    reviews: 87,
    status: 'active',
    image: 'https://images.unsplash.com/photo-1656907959288-f5aa29da7020?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwY3JlYXRpdml0eXxlbnwxfHx8fDE3NjA1ODcxNzR8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 2,
    title: 'UI/UX Design for Mobile Apps',
    category: 'Design',
    price: 300,
    deliveryTime: '5 days',
    orders: 12,
    rating: 5.0,
    reviews: 42,
    status: 'active',
    image: 'https://images.unsplash.com/photo-1699570047113-16fdf623e83e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHdvcmtzcGFjZSUyMGNvbGxhYm9yYXRpb258ZW58MXx8fHwxNzYwNTEyMTI2fDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 3,
    title: 'Brand Identity Package',
    category: 'Design',
    price: 500,
    deliveryTime: '7 days',
    orders: 8,
    rating: 4.8,
    reviews: 23,
    status: 'paused',
    image: 'https://images.unsplash.com/photo-1748346918817-0b1b6b2f9bab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB0ZWFtd29ya3xlbnwxfHx8fDE3NjA0OTYyNDV8MA&ixlib=rb-4.1.0&q=80&w=1080',
  }
];

export default function MyServicesPage() {
  const [isCreateOpen, setIsCreateOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="mb-2">My Services</h1>
            <p className="text-gray-600">Create and manage your service offerings</p>
          </div>
          <Dialog open={isCreateOpen} onOpenChange={setIsCreateOpen}>
            <DialogTrigger asChild>
              <Button className="rounded-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700">
                <Plus className="w-4 h-4 mr-2" />
                Create Service
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>Create New Service</DialogTitle>
              </DialogHeader>
              <div className="space-y-6 py-4">
                <div>
                  <Label>Service Title</Label>
                  <Input placeholder="e.g., Modern Logo Design" className="mt-2 rounded-xl" />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label>Category</Label>
                    <Select>
                      <SelectTrigger className="mt-2 rounded-xl">
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="design">Design</SelectItem>
                        <SelectItem value="development">Development</SelectItem>
                        <SelectItem value="writing">Writing</SelectItem>
                        <SelectItem value="marketing">Marketing</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label>Price ($)</Label>
                    <Input type="number" placeholder="150" className="mt-2 rounded-xl" />
                  </div>
                </div>
                
                <div>
                  <Label>Description</Label>
                  <Textarea 
                    placeholder="Describe your service in detail..."
                    className="mt-2 rounded-xl h-32"
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label>Delivery Time</Label>
                    <Select>
                      <SelectTrigger className="mt-2 rounded-xl">
                        <SelectValue placeholder="Select delivery time" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1 day</SelectItem>
                        <SelectItem value="3">3 days</SelectItem>
                        <SelectItem value="5">5 days</SelectItem>
                        <SelectItem value="7">7 days</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label>Revisions</Label>
                    <Input type="number" placeholder="3" className="mt-2 rounded-xl" />
                  </div>
                </div>
                
                <div>
                  <Label>Service Image</Label>
                  <div className="mt-2 border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-blue-400 transition-colors cursor-pointer">
                    <Package className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                    <p className="text-sm text-gray-600">Click to upload or drag and drop</p>
                    <p className="text-xs text-gray-500 mt-1">PNG, JPG up to 5MB</p>
                  </div>
                </div>
                
                <div className="flex gap-3 pt-4">
                  <Button 
                    variant="outline" 
                    className="flex-1 rounded-full"
                    onClick={() => setIsCreateOpen(false)}
                  >
                    Cancel
                  </Button>
                  <Button 
                    className="flex-1 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700"
                    onClick={() => setIsCreateOpen(false)}
                  >
                    Create Service
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {/* Stats Overview */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="p-6 border-0 bg-white shadow-lg">
            <div className="flex items-center justify-between mb-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                <Package className="w-6 h-6 text-white" />
              </div>
            </div>
            <p className="text-gray-600 text-sm mb-1">Active Services</p>
            <p className="text-blue-600">12</p>
          </Card>

          <Card className="p-6 border-0 bg-white shadow-lg">
            <div className="flex items-center justify-between mb-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-white" />
              </div>
            </div>
            <p className="text-gray-600 text-sm mb-1">Total Revenue</p>
            <p className="text-blue-600">$15,240</p>
          </Card>

          <Card className="p-6 border-0 bg-white shadow-lg">
            <div className="flex items-center justify-between mb-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                <Star className="w-6 h-6 text-white" />
              </div>
            </div>
            <p className="text-gray-600 text-sm mb-1">Avg. Rating</p>
            <p className="text-blue-600">4.9</p>
          </Card>

          <Card className="p-6 border-0 bg-white shadow-lg">
            <div className="flex items-center justify-between mb-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                <Clock className="w-6 h-6 text-white" />
              </div>
            </div>
            <p className="text-gray-600 text-sm mb-1">Total Orders</p>
            <p className="text-blue-600">156</p>
          </Card>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {myServices.map((service) => (
            <Card key={service.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 border-0 bg-white">
              <div className="relative h-48 bg-gradient-to-br from-blue-400 to-blue-600">
                <ImageWithFallback 
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover mix-blend-overlay"
                />
                <Badge className={`absolute top-4 right-4 border-0 ${
                  service.status === 'active' 
                    ? 'bg-green-500' 
                    : 'bg-gray-500'
                }`}>
                  {service.status}
                </Badge>
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <Badge variant="outline" className="mb-2 border-blue-300 text-blue-600 text-xs">
                      {service.category}
                    </Badge>
                    <h3 className="mb-2">{service.title}</h3>
                  </div>
                </div>

                <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    <span>{service.rating}</span>
                    <span className="text-gray-400">({service.reviews})</span>
                  </div>
                  <span>•</span>
                  <span>{service.orders} orders</span>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div>
                    <p className="text-xs text-gray-500">Price</p>
                    <p className="text-blue-600">${service.price}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="rounded-full border-blue-300 text-blue-600 hover:bg-blue-50"
                    >
                      <Eye className="w-4 h-4" />
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="rounded-full border-blue-300 text-blue-600 hover:bg-blue-50"
                    >
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="rounded-full border-red-300 text-red-600 hover:bg-red-50"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Empty State for new users */}
        {myServices.length === 0 && (
          <Card className="p-16 text-center border-0 bg-white shadow-lg">
            <Package className="w-20 h-20 text-gray-300 mx-auto mb-4" />
            <h3 className="mb-2">No services yet</h3>
            <p className="text-gray-600 mb-6">Create your first service to start receiving orders</p>
            <Button 
              className="rounded-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700"
              onClick={() => setIsCreateOpen(true)}
            >
              <Plus className="w-4 h-4 mr-2" />
              Create Your First Service
            </Button>
          </Card>
        )}
      </div>
    </div>
  );
}
