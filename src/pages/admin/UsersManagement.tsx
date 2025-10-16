import { useState } from 'react';
import { Search, Filter, MoreVertical, Ban, CheckCircle, Eye, Trash2 } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Card } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import { Input } from '../../components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../components/ui/table';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '../../components/ui/dropdown-menu';
import { Avatar, AvatarImage, AvatarFallback } from '../../components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../components/ui/select';
import AdminSidebar from '../../components/AdminSidebar';

const users = [
  {
    id: 1,
    name: 'Sarah Johnson',
    email: 'sarah.j@example.com',
    role: 'freelancer',
    status: 'active',
    joinDate: 'Jan 15, 2024',
    orders: 87,
    revenue: 15240,
    rating: 4.9,
    avatar: 'https://images.unsplash.com/photo-1670851810697-68ddb4ecae1c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHByb2Zlc3Npb25hbCUyMHdvcmt8ZW58MXx8fHwxNzYwNTg3MTc1fDA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    id: 2,
    name: 'Marcus Chen',
    email: 'marcus.chen@example.com',
    role: 'freelancer',
    status: 'active',
    joinDate: 'Feb 20, 2024',
    orders: 65,
    revenue: 12800,
    rating: 5.0,
    avatar: 'https://images.unsplash.com/photo-1672685667592-0392f458f46f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjA1NTQxMzR8MA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    id: 3,
    name: 'Emma Watson',
    email: 'emma.w@example.com',
    role: 'freelancer',
    status: 'suspended',
    joinDate: 'Mar 10, 2024',
    orders: 52,
    revenue: 10500,
    rating: 4.8,
    avatar: 'https://images.unsplash.com/photo-1602465750834-d43bfa8bbb6d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBmcmVlbGFuY2VyJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzYwNTg3MTc0fDA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    id: 4,
    name: 'John Smith',
    email: 'john.smith@example.com',
    role: 'client',
    status: 'active',
    joinDate: 'Apr 5, 2024',
    orders: 12,
    spent: 3200,
    rating: null,
    avatar: null
  },
  {
    id: 5,
    name: 'Lisa Anderson',
    email: 'lisa.a@example.com',
    role: 'client',
    status: 'active',
    joinDate: 'May 18, 2024',
    orders: 8,
    spent: 1800,
    rating: null,
    avatar: null
  }
];

export default function UsersManagement() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRole, setSelectedRole] = useState('all');

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'active':
        return <Badge className="bg-black text-white border-0">Active</Badge>;
      case 'suspended':
        return <Badge className="bg-gray-400 text-white border-0">Suspended</Badge>;
      case 'pending':
        return <Badge className="bg-gray-200 text-gray-700 border-0">Pending</Badge>;
      default:
        return <Badge className="bg-gray-100 text-gray-700 border-0">{status}</Badge>;
    }
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-gray-100 to-gray-200">
      <AdminSidebar />
      <div className="flex-1 ml-64 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="mb-2">User Management</h1>
          <p className="text-gray-600">Manage platform users and their accounts</p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="p-6 border-0 bg-white shadow-lg">
            <div className="flex items-center justify-between mb-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center">
                <span className="text-white">👥</span>
              </div>
            </div>
            <p className="text-gray-600 text-sm mb-1">Total Users</p>
            <p className="text-gray-900">12,458</p>
          </Card>

          <Card className="p-6 border-0 bg-white shadow-lg">
            <div className="flex items-center justify-between mb-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-gray-600 to-gray-800 flex items-center justify-center">
                <span className="text-white">💼</span>
              </div>
            </div>
            <p className="text-gray-600 text-sm mb-1">Freelancers</p>
            <p className="text-gray-900">8,245</p>
          </Card>

          <Card className="p-6 border-0 bg-white shadow-lg">
            <div className="flex items-center justify-between mb-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-gray-500 to-gray-700 flex items-center justify-center">
                <span className="text-white">👤</span>
              </div>
            </div>
            <p className="text-gray-600 text-sm mb-1">Clients</p>
            <p className="text-gray-900">4,213</p>
          </Card>

          <Card className="p-6 border-0 bg-white shadow-lg">
            <div className="flex items-center justify-between mb-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-gray-400 to-gray-600 flex items-center justify-center">
                <Ban className="w-6 h-6 text-white" />
              </div>
            </div>
            <p className="text-gray-600 text-sm mb-1">Suspended</p>
            <p className="text-gray-900">34</p>
          </Card>
        </div>

        {/* Filters & Search */}
        <Card className="p-6 mb-6 border-0 bg-white shadow-lg">
          <div className="flex items-center gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Search users by name or email..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 rounded-xl"
              />
            </div>
            
            <Select value={selectedRole} onValueChange={setSelectedRole}>
              <SelectTrigger className="w-48 rounded-xl">
                <SelectValue placeholder="Filter by role" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Roles</SelectItem>
                <SelectItem value="freelancer">Freelancers</SelectItem>
                <SelectItem value="client">Clients</SelectItem>
              </SelectContent>
            </Select>

            <Button variant="outline" className="rounded-xl border-gray-300">
              <Filter className="w-4 h-4 mr-2" />
              More Filters
            </Button>
          </div>
        </Card>

        {/* Users Table */}
        <Card className="border-0 bg-white shadow-lg overflow-hidden">
          <Tabs defaultValue="all" className="w-full">
            <div className="px-6 pt-6">
              <TabsList className="bg-gray-100 p-1 rounded-xl">
                <TabsTrigger value="all" className="rounded-lg">All Users</TabsTrigger>
                <TabsTrigger value="freelancers" className="rounded-lg">Freelancers</TabsTrigger>
                <TabsTrigger value="clients" className="rounded-lg">Clients</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="all" className="mt-0">
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="border-gray-200">
                      <TableHead>User</TableHead>
                      <TableHead>Role</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Join Date</TableHead>
                      <TableHead>Activity</TableHead>
                      <TableHead>Performance</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {users.map((user) => (
                      <TableRow key={user.id} className="border-gray-100">
                        <TableCell>
                          <div className="flex items-center gap-3">
                            <Avatar className="w-10 h-10 border-2 border-gray-200">
                              {user.avatar && <AvatarImage src={user.avatar} />}
                              <AvatarFallback>{user.name[0]}</AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="text-sm">{user.name}</p>
                              <p className="text-xs text-gray-500">{user.email}</p>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge className={`${
                            user.role === 'freelancer' 
                              ? 'bg-gray-700 text-white' 
                              : 'bg-gray-500 text-white'
                          } border-0`}>
                            {user.role}
                          </Badge>
                        </TableCell>
                        <TableCell>{getStatusBadge(user.status)}</TableCell>
                        <TableCell className="text-sm text-gray-600">{user.joinDate}</TableCell>
                        <TableCell className="text-sm">
                          {user.orders} {user.role === 'freelancer' ? 'orders' : 'projects'}
                        </TableCell>
                        <TableCell className="text-sm">
                          {user.role === 'freelancer' ? (
                            <div>
                              <p className="text-gray-900">${user.revenue?.toLocaleString()}</p>
                              <p className="text-xs text-gray-500">⭐ {user.rating}</p>
                            </div>
                          ) : (
                            <p className="text-gray-900">${user.spent?.toLocaleString()}</p>
                          )}
                        </TableCell>
                        <TableCell className="text-right">
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="sm" className="rounded-lg">
                                <MoreVertical className="w-4 h-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" className="rounded-xl">
                              <DropdownMenuItem className="rounded-lg cursor-pointer">
                                <Eye className="w-4 h-4 mr-2" />
                                View Profile
                              </DropdownMenuItem>
                              <DropdownMenuItem className="rounded-lg cursor-pointer">
                                {user.status === 'suspended' ? (
                                  <>
                                    <CheckCircle className="w-4 h-4 mr-2" />
                                    Activate User
                                  </>
                                ) : (
                                  <>
                                    <Ban className="w-4 h-4 mr-2" />
                                    Suspend User
                                  </>
                                )}
                              </DropdownMenuItem>
                              <DropdownMenuItem className="rounded-lg cursor-pointer text-gray-700">
                                <Trash2 className="w-4 h-4 mr-2" />
                                Delete User
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </TabsContent>

            <TabsContent value="freelancers">
              <div className="p-8 text-center text-gray-500">
                Filter: Freelancers only
              </div>
            </TabsContent>

            <TabsContent value="clients">
              <div className="p-8 text-center text-gray-500">
                Filter: Clients only
              </div>
            </TabsContent>
          </Tabs>

          <div className="px-6 py-4 border-t border-gray-100 flex items-center justify-between">
            <p className="text-sm text-gray-600">Showing 5 of 12,458 users</p>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" className="rounded-lg">
                Previous
              </Button>
              <Button variant="outline" size="sm" className="rounded-lg">
                Next
              </Button>
            </div>
          </div>
        </Card>
        </div>
      </div>
    </div>
  );
}
