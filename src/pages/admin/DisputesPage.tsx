import { useState } from 'react';
import { Search, AlertTriangle, MessageSquare, CheckCircle, XCircle, Clock } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Card } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import { Input } from '../../components/ui/input';
import { Textarea } from '../../components/ui/textarea';
import { Avatar, AvatarImage, AvatarFallback } from '../../components/ui/avatar';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '../../components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../components/ui/select';
import AdminSidebar from '../../components/AdminSidebar';

const disputes = [
  {
    id: 'DSP-001',
    title: 'Project delivery quality issue',
    project: 'Modern Logo Design',
    client: {
      name: 'John Smith',
      avatar: null
    },
    freelancer: {
      name: 'Sarah Johnson',
      avatar: 'https://images.unsplash.com/photo-1670851810697-68ddb4ecae1c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHByb2Zlc3Npb25hbCUyMHdvcmt8ZW58MXx8fHwxNzYwNTg3MTc1fDA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    amount: 150,
    status: 'open',
    priority: 'high',
    createdAt: 'Jan 15, 2025',
    description: 'The delivered logo does not match the agreed specifications and requirements.'
  },
  {
    id: 'DSP-002',
    title: 'Late delivery complaint',
    project: 'Website Development',
    client: {
      name: 'Lisa Anderson',
      avatar: null
    },
    freelancer: {
      name: 'Marcus Chen',
      avatar: 'https://images.unsplash.com/photo-1672685667592-0392f458f46f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjA1NTQxMzR8MA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    amount: 800,
    status: 'investigating',
    priority: 'medium',
    createdAt: 'Jan 14, 2025',
    description: 'Project was delivered 5 days late without prior notice or communication.'
  },
  {
    id: 'DSP-003',
    title: 'Payment not received',
    project: 'Content Writing',
    client: {
      name: 'Tom Brown',
      avatar: null
    },
    freelancer: {
      name: 'Emma Watson',
      avatar: 'https://images.unsplash.com/photo-1602465750834-d43bfa8bbb6d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBmcmVlbGFuY2VyJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzYwNTg3MTc0fDA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    amount: 200,
    status: 'resolved',
    priority: 'low',
    createdAt: 'Jan 12, 2025',
    description: 'Work was completed and delivered but payment has not been released.'
  }
];

export default function DisputesPage() {
  const [selectedDispute, setSelectedDispute] = useState<typeof disputes[0] | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'open':
        return <Badge className="bg-gray-700 text-white border-0">Open</Badge>;
      case 'investigating':
        return <Badge className="bg-gray-500 text-white border-0">Investigating</Badge>;
      case 'resolved':
        return <Badge className="bg-gray-900 text-white border-0">Resolved</Badge>;
      case 'closed':
        return <Badge className="bg-gray-300 text-gray-700 border-0">Closed</Badge>;
      default:
        return <Badge className="bg-gray-100 text-gray-700 border-0">{status}</Badge>;
    }
  };

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case 'high':
        return <Badge className="bg-gray-800 text-white border-0">High</Badge>;
      case 'medium':
        return <Badge className="bg-gray-500 text-white border-0">Medium</Badge>;
      case 'low':
        return <Badge className="bg-gray-300 text-gray-700 border-0">Low</Badge>;
      default:
        return <Badge className="bg-gray-100 text-gray-700 border-0">{priority}</Badge>;
    }
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-gray-100 to-gray-200">
      <AdminSidebar />
      <div className="flex-1 ml-64 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="mb-2">Dispute Management</h1>
          <p className="text-gray-600">Review and resolve platform disputes</p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="p-6 border-0 bg-white shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                <AlertTriangle className="w-5 h-5 text-gray-700" />
              </div>
              <div>
                <p className="text-gray-600 text-sm">Open</p>
                <p className="text-gray-900">{disputes.filter(d => d.status === 'open').length}</p>
              </div>
            </div>
          </Card>

          <Card className="p-6 border-0 bg-white shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
                <Clock className="w-5 h-5 text-gray-800" />
              </div>
              <div>
                <p className="text-gray-600 text-sm">Investigating</p>
                <p className="text-gray-900">{disputes.filter(d => d.status === 'investigating').length}</p>
              </div>
            </div>
          </Card>

          <Card className="p-6 border-0 bg-white shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-gray-600 text-sm">Resolved</p>
                <p className="text-gray-900">{disputes.filter(d => d.status === 'resolved').length}</p>
              </div>
            </div>
          </Card>

          <Card className="p-6 border-0 bg-white shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                <span className="text-gray-700">$</span>
              </div>
              <div>
                <p className="text-gray-600 text-sm">Total Amount</p>
                <p className="text-gray-900">${disputes.reduce((sum, d) => sum + d.amount, 0)}</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Filters */}
        <Card className="p-6 mb-6 border-0 bg-white shadow-lg">
          <div className="flex items-center gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Search disputes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 rounded-xl"
              />
            </div>

            <Tabs defaultValue="all" className="w-auto">
              <TabsList className="bg-gray-100 p-1 rounded-xl">
                <TabsTrigger value="all" className="rounded-lg">All</TabsTrigger>
                <TabsTrigger value="open" className="rounded-lg">Open</TabsTrigger>
                <TabsTrigger value="resolved" className="rounded-lg">Resolved</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </Card>

        {/* Disputes List */}
        <div className="space-y-4">
          {disputes.map((dispute) => (
            <Card key={dispute.id} className="p-6 border-0 bg-white shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-6">
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3>{dispute.title}</h3>
                        {getStatusBadge(dispute.status)}
                        {getPriorityBadge(dispute.priority)}
                      </div>
                      <p className="text-sm text-gray-600 mb-3">{dispute.description}</p>
                      <Badge variant="outline" className="border-gray-300 text-gray-600">
                        {dispute.project}
                      </Badge>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-6">
                    <div>
                      <p className="text-xs text-gray-500 mb-2">Client</p>
                      <div className="flex items-center gap-2">
                        <Avatar className="w-8 h-8 border-2 border-gray-200">
                          {dispute.client.avatar && <AvatarImage src={dispute.client.avatar} />}
                          <AvatarFallback>{dispute.client.name[0]}</AvatarFallback>
                        </Avatar>
                        <p className="text-sm">{dispute.client.name}</p>
                      </div>
                    </div>

                    <div>
                      <p className="text-xs text-gray-500 mb-2">Freelancer</p>
                      <div className="flex items-center gap-2">
                        <Avatar className="w-8 h-8 border-2 border-gray-200">
                          <AvatarImage src={dispute.freelancer.avatar} />
                          <AvatarFallback>{dispute.freelancer.name[0]}</AvatarFallback>
                        </Avatar>
                        <p className="text-sm">{dispute.freelancer.name}</p>
                      </div>
                    </div>

                    <div>
                      <p className="text-xs text-gray-500 mb-2">Amount</p>
                      <p className="text-gray-900">${dispute.amount}</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button 
                        variant="outline" 
                        className="rounded-full border-gray-300"
                        onClick={() => setSelectedDispute(dispute)}
                      >
                        <MessageSquare className="w-4 h-4 mr-2" />
                        Review
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl">
                      <DialogHeader>
                        <DialogTitle>Dispute Details - {dispute.id}</DialogTitle>
                      </DialogHeader>
                      
                      <div className="space-y-6 py-4">
                        <div className="p-4 bg-gray-50 rounded-2xl">
                          <h4 className="mb-2">{dispute.title}</h4>
                          <p className="text-sm text-gray-600 mb-3">{dispute.description}</p>
                          <div className="flex items-center gap-2">
                            {getStatusBadge(dispute.status)}
                            {getPriorityBadge(dispute.priority)}
                          </div>
                        </div>

                        <div>
                          <h4 className="mb-4">Resolution Actions</h4>
                          <div className="space-y-3">
                            <Button 
                              variant="outline" 
                              className="w-full rounded-full border-gray-300 text-gray-700 hover:bg-gray-100"
                            >
                              <CheckCircle className="w-4 h-4 mr-2" />
                              Resolve in Favor of Client
                            </Button>
                            <Button 
                              variant="outline" 
                              className="w-full rounded-full border-gray-300 text-gray-700 hover:bg-gray-100"
                            >
                              <CheckCircle className="w-4 h-4 mr-2" />
                              Resolve in Favor of Freelancer
                            </Button>
                            <Button 
                              variant="outline" 
                              className="w-full rounded-full border-gray-300 text-gray-700 hover:bg-gray-100"
                            >
                              <Clock className="w-4 h-4 mr-2" />
                              Request More Information
                            </Button>
                            <Button 
                              variant="outline" 
                              className="w-full rounded-full border-gray-300 text-gray-700 hover:bg-gray-100"
                            >
                              <XCircle className="w-4 h-4 mr-2" />
                              Close Dispute
                            </Button>
                          </div>
                        </div>

                        <div>
                          <h4 className="mb-3">Admin Notes</h4>
                          <Textarea
                            placeholder="Add internal notes about this dispute..."
                            className="rounded-xl h-24"
                          />
                          <Button className="mt-3 rounded-full bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-800 hover:to-gray-950">
                            Save Notes
                          </Button>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                  <p className="text-xs text-gray-500 text-right">{dispute.createdAt}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
        </div>
      </div>
    </div>
  );
}
