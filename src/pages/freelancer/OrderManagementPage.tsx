import { useState } from 'react';
import { Upload, Clock, CheckCircle, AlertCircle, MessageSquare, FileText, Calendar } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Card } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import { Progress } from '../../components/ui/progress';
import { Textarea } from '../../components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs';
import { Avatar, AvatarImage, AvatarFallback } from '../../components/ui/avatar';
import { Separator } from '../../components/ui/separator';

const orders = [
  {
    id: 1,
    title: 'Modern Logo Design',
    client: {
      name: 'John Smith',
      avatar: 'https://images.unsplash.com/photo-1672685667592-0392f458f46f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjA1NTQxMzR8MA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    amount: 150,
    deadline: '2 days',
    status: 'in_progress',
    progress: 65,
    orderDate: 'Jan 10, 2025',
    deliveryDate: 'Jan 18, 2025',
    requirements: 'Need a modern, minimalist logo for a tech startup. Prefer blue and gray colors.',
    milestones: [
      { title: 'Initial Concept', status: 'completed' },
      { title: 'Revision Round 1', status: 'current' },
      { title: 'Final Delivery', status: 'pending' }
    ]
  },
  {
    id: 2,
    title: 'UI/UX Design for Mobile App',
    client: {
      name: 'Sarah Johnson',
      avatar: 'https://images.unsplash.com/photo-1670851810697-68ddb4ecae1c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHByb2Zlc3Npb25hbCUyMHdvcmt8ZW58MXx8fHwxNzYwNTg3MTc1fDA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    amount: 300,
    deadline: '5 days',
    status: 'pending',
    progress: 20,
    orderDate: 'Jan 12, 2025',
    deliveryDate: 'Jan 22, 2025',
    requirements: 'Design a clean and modern UI for a fitness tracking app.',
    milestones: [
      { title: 'Wireframes', status: 'current' },
      { title: 'High-Fidelity Design', status: 'pending' },
      { title: 'Final Delivery', status: 'pending' }
    ]
  }
];

export default function OrderManagementPage() {
  const [selectedOrder, setSelectedOrder] = useState(orders[0]);
  const [deliveryMessage, setDeliveryMessage] = useState('');

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="mb-2">Order Management</h1>
          <p className="text-gray-600">Track and manage your active orders</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Orders List */}
          <div className="lg:col-span-1">
            <Card className="p-4 border-0 bg-white shadow-lg">
              <Tabs defaultValue="active" className="w-full">
                <TabsList className="w-full bg-gray-100 p-1 rounded-xl mb-4">
                  <TabsTrigger value="active" className="flex-1 rounded-lg">Active (2)</TabsTrigger>
                  <TabsTrigger value="completed" className="flex-1 rounded-lg">Completed</TabsTrigger>
                </TabsList>

                <TabsContent value="active" className="space-y-3 mt-0">
                  {orders.map((order) => (
                    <Card
                      key={order.id}
                      className={`p-4 cursor-pointer transition-all hover:shadow-md ${
                        selectedOrder.id === order.id
                          ? 'border-2 border-blue-500 bg-blue-50'
                          : 'border border-gray-200'
                      }`}
                      onClick={() => setSelectedOrder(order)}
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <p className="mb-1">{order.title}</p>
                          <p className="text-sm text-gray-600">{order.client.name}</p>
                        </div>
                        <Badge className={`${
                          order.status === 'in_progress'
                            ? 'bg-blue-500'
                            : 'bg-yellow-500'
                        } border-0`}>
                          {order.status === 'in_progress' ? 'In Progress' : 'Pending'}
                        </Badge>
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-600">Progress</span>
                          <span className="text-blue-600">{order.progress}%</span>
                        </div>
                        <Progress value={order.progress} className="h-2" />
                      </div>

                      <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-100">
                        <div className="flex items-center gap-1 text-xs text-gray-600">
                          <Clock className="w-3 h-3" />
                          <span>{order.deadline}</span>
                        </div>
                        <span className="text-blue-600">${order.amount}</span>
                      </div>
                    </Card>
                  ))}
                </TabsContent>

                <TabsContent value="completed">
                  <div className="text-center py-8">
                    <CheckCircle className="w-12 h-12 text-gray-300 mx-auto mb-2" />
                    <p className="text-sm text-gray-600">No completed orders</p>
                  </div>
                </TabsContent>
              </Tabs>
            </Card>
          </div>

          {/* Order Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* Client Info & Status */}
            <Card className="p-6 border-0 bg-white shadow-lg">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <Avatar className="w-16 h-16 border-2 border-blue-200">
                    <AvatarImage src={selectedOrder.client.avatar} />
                    <AvatarFallback>{selectedOrder.client.name[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h2 className="mb-1">{selectedOrder.title}</h2>
                    <p className="text-gray-600 text-sm mb-2">Client: {selectedOrder.client.name}</p>
                    <Badge className="bg-gradient-to-r from-blue-500 to-blue-600 border-0">
                      Order #{selectedOrder.id}
                    </Badge>
                  </div>
                </div>
                <Button className="rounded-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Chat
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-4 p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl">
                <div>
                  <p className="text-gray-600 text-sm mb-1">Order Date</p>
                  <p className="text-blue-600">{selectedOrder.orderDate}</p>
                </div>
                <div>
                  <p className="text-gray-600 text-sm mb-1">Delivery Date</p>
                  <p className="text-blue-600">{selectedOrder.deliveryDate}</p>
                </div>
                <div>
                  <p className="text-gray-600 text-sm mb-1">Amount</p>
                  <p className="text-blue-600">${selectedOrder.amount}</p>
                </div>
              </div>
            </Card>

            {/* Requirements */}
            <Card className="p-6 border-0 bg-white shadow-lg">
              <div className="flex items-center gap-2 mb-4">
                <FileText className="w-5 h-5 text-blue-600" />
                <h3>Order Requirements</h3>
              </div>
              <p className="text-gray-600">{selectedOrder.requirements}</p>
            </Card>

            {/* Milestones */}
            <Card className="p-6 border-0 bg-white shadow-lg">
              <div className="flex items-center gap-2 mb-6">
                <Calendar className="w-5 h-5 text-blue-600" />
                <h3>Project Timeline</h3>
              </div>
              
              <div className="space-y-4">
                {selectedOrder.milestones.map((milestone, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      milestone.status === 'completed'
                        ? 'bg-green-500'
                        : milestone.status === 'current'
                        ? 'bg-blue-500'
                        : 'bg-gray-200'
                    }`}>
                      {milestone.status === 'completed' ? (
                        <CheckCircle className="w-5 h-5 text-white" />
                      ) : milestone.status === 'current' ? (
                        <Clock className="w-5 h-5 text-white" />
                      ) : (
                        <AlertCircle className="w-5 h-5 text-gray-400" />
                      )}
                    </div>
                    <div className="flex-1">
                      <p className={milestone.status === 'pending' ? 'text-gray-400' : ''}>
                        {milestone.title}
                      </p>
                      <p className="text-sm text-gray-500">
                        {milestone.status === 'completed' ? 'Completed' : 
                         milestone.status === 'current' ? 'In Progress' : 'Upcoming'}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Delivery Section */}
            <Card className="p-6 border-0 bg-white shadow-lg">
              <div className="flex items-center gap-2 mb-6">
                <Upload className="w-5 h-5 text-blue-600" />
                <h3>Delivery</h3>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="text-sm text-gray-600 mb-2 block">Delivery Message</label>
                  <Textarea
                    placeholder="Describe what you're delivering..."
                    value={deliveryMessage}
                    onChange={(e) => setDeliveryMessage(e.target.value)}
                    className="rounded-xl h-32"
                  />
                </div>

                <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-blue-400 transition-colors cursor-pointer">
                  <Upload className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                  <p className="text-sm text-gray-600">Click to upload files or drag and drop</p>
                  <p className="text-xs text-gray-500 mt-1">ZIP, PDF, PNG, JPG up to 100MB</p>
                </div>

                <Separator />

                <div className="flex gap-3">
                  <Button 
                    variant="outline" 
                    className="flex-1 rounded-full border-gray-300"
                  >
                    Request Revision
                  </Button>
                  <Button 
                    className="flex-1 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700"
                  >
                    <Upload className="w-4 h-4 mr-2" />
                    Deliver Order
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
