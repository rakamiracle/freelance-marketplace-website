import { useState } from 'react';
import { Shield, CheckCircle, XCircle, Clock, Eye, Download } from 'lucide-react';
import { Card } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Badge } from '../../components/ui/badge';
import { Avatar, AvatarImage, AvatarFallback } from '../../components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs';
import { toast } from 'sonner@2.0.3';
import AdminSidebar from '../../components/AdminSidebar';

const verificationRequests = [
  {
    id: 1,
    name: 'Sarah Johnson',
    email: 'sarah.j@email.com',
    role: 'Freelancer',
    submittedDate: '2025-01-10',
    documents: ['ID Card', 'Portfolio', 'Certificate'],
    status: 'pending',
    avatar: 'https://images.unsplash.com/photo-1670851810697-68ddb4ecae1c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHByb2Zlc3Npb25hbCUyMHdvcmt8ZW58MXx8fHwxNzYwNTg3MTc1fDA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    id: 2,
    name: 'Marcus Chen',
    email: 'marcus.c@email.com',
    role: 'Freelancer',
    submittedDate: '2025-01-12',
    documents: ['Passport', 'Portfolio'],
    status: 'pending',
    avatar: 'https://images.unsplash.com/photo-1672685667592-0392f458f46f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjA1NTQxMzR8MA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    id: 3,
    name: 'Tech Startup Inc',
    email: 'info@techstartup.com',
    role: 'Client',
    submittedDate: '2025-01-13',
    documents: ['Company Registration', 'Tax ID'],
    status: 'pending',
    avatar: ''
  }
];

export default function VerificationPage() {
  const [requests, setRequests] = useState(verificationRequests);
  const [filter, setFilter] = useState('all');

  const handleApprove = (id: number) => {
    setRequests(requests.map(req => 
      req.id === id ? { ...req, status: 'approved' } : req
    ));
    toast.success('User berhasil diverifikasi!');
  };

  const handleReject = (id: number) => {
    setRequests(requests.map(req => 
      req.id === id ? { ...req, status: 'rejected' } : req
    ));
    toast.error('Permintaan verifikasi ditolak');
  };

  const filteredRequests = filter === 'all' 
    ? requests 
    : requests.filter(req => req.status === filter);

  const stats = [
    { label: 'Menunggu Review', value: requests.filter(r => r.status === 'pending').length, color: 'bg-gray-100' },
    { label: 'Disetujui', value: requests.filter(r => r.status === 'approved').length, color: 'bg-gray-800' },
    { label: 'Ditolak', value: requests.filter(r => r.status === 'rejected').length, color: 'bg-gray-300' }
  ];

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-gray-100 to-gray-200">
      <AdminSidebar />
      
      <div className="flex-1 ml-64 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-2">
              <Shield className="w-8 h-8 text-gray-700" />
              <h1>Verifikasi User</h1>
            </div>
            <p className="text-gray-600">Kelola permintaan verifikasi freelancer dan client</p>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {stats.map((stat, index) => (
              <Card key={index} className={`p-6 border-0 ${stat.color} shadow-lg`}>
                <p className="text-sm text-gray-700 mb-2">{stat.label}</p>
                <p className="text-gray-900">{stat.value}</p>
              </Card>
            ))}
          </div>

          {/* Filters */}
          <Card className="p-6 border-0 bg-white shadow-lg mb-6">
            <Tabs value={filter} onValueChange={setFilter}>
              <TabsList className="grid w-full grid-cols-4 bg-gray-100">
                <TabsTrigger value="all">Semua ({requests.length})</TabsTrigger>
                <TabsTrigger value="pending">
                  <Clock className="w-4 h-4 mr-2" />
                  Pending ({requests.filter(r => r.status === 'pending').length})
                </TabsTrigger>
                <TabsTrigger value="approved">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Approved ({requests.filter(r => r.status === 'approved').length})
                </TabsTrigger>
                <TabsTrigger value="rejected">
                  <XCircle className="w-4 h-4 mr-2" />
                  Rejected ({requests.filter(r => r.status === 'rejected').length})
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </Card>

          {/* Verification Requests */}
          <div className="space-y-4">
            {filteredRequests.length === 0 ? (
              <Card className="p-12 border-0 bg-white shadow-lg text-center">
                <Shield className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500">Tidak ada permintaan verifikasi</p>
              </Card>
            ) : (
              filteredRequests.map((request) => (
                <Card key={request.id} className="p-6 border-0 bg-white shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-4 flex-1">
                      <Avatar className="w-16 h-16 border-2 border-gray-200">
                        <AvatarImage src={request.avatar} />
                        <AvatarFallback>{request.name[0]}</AvatarFallback>
                      </Avatar>

                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3>{request.name}</h3>
                          <Badge className={
                            request.status === 'pending' 
                              ? 'bg-gray-200 text-gray-700'
                              : request.status === 'approved'
                              ? 'bg-black text-white'
                              : 'bg-gray-400 text-white'
                          }>
                            {request.status === 'pending' ? 'Menunggu Review' : 
                             request.status === 'approved' ? 'Disetujui' : 'Ditolak'}
                          </Badge>
                        </div>

                        <div className="space-y-2 text-sm text-gray-600">
                          <p><strong>Email:</strong> {request.email}</p>
                          <p><strong>Role:</strong> {request.role}</p>
                          <p><strong>Tanggal Submit:</strong> {new Date(request.submittedDate).toLocaleDateString('id-ID')}</p>
                        </div>

                        <div className="mt-4">
                          <p className="text-sm text-gray-600 mb-2">Dokumen yang diupload:</p>
                          <div className="flex flex-wrap gap-2">
                            {request.documents.map((doc, index) => (
                              <Badge key={index} variant="outline" className="border-gray-300 text-gray-700">
                                {doc}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {request.status === 'pending' && (
                      <div className="flex flex-col gap-2 ml-4">
                        <Button
                          size="sm"
                          className="bg-gradient-to-r from-gray-700 to-black hover:from-gray-800 hover:to-gray-900"
                          onClick={() => handleApprove(request.id)}
                        >
                          <CheckCircle className="w-4 h-4 mr-2" />
                          Setujui
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-gray-300"
                          onClick={() => handleReject(request.id)}
                        >
                          <XCircle className="w-4 h-4 mr-2" />
                          Tolak
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-gray-300"
                        >
                          <Eye className="w-4 h-4 mr-2" />
                          Review
                        </Button>
                      </div>
                    )}
                  </div>
                </Card>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
