import { useState } from 'react';
import { Search, Download, Filter, Calendar, ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Card } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import { Input } from '../../components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../components/ui/table';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs';
import AdminSidebar from '../../components/AdminSidebar';

const transactions = [
  {
    id: 'TXN-001',
    date: 'Jan 15, 2025 14:30',
    from: 'John Smith',
    to: 'Sarah Johnson',
    amount: 150,
    type: 'payment',
    status: 'completed',
    fee: 7.5
  },
  {
    id: 'TXN-002',
    date: 'Jan 15, 2025 12:15',
    from: 'Emma Watson',
    to: 'Bank **** 4567',
    amount: 500,
    type: 'withdrawal',
    status: 'pending',
    fee: 10
  },
  {
    id: 'TXN-003',
    date: 'Jan 14, 2025 16:45',
    from: 'Mike Davis',
    to: 'Marcus Chen',
    amount: 300,
    type: 'payment',
    status: 'completed',
    fee: 15
  },
  {
    id: 'TXN-004',
    date: 'Jan 14, 2025 11:20',
    from: 'Lisa Anderson',
    to: 'Emma Watson',
    amount: 200,
    type: 'payment',
    status: 'completed',
    fee: 10
  },
  {
    id: 'TXN-005',
    date: 'Jan 14, 2025 09:30',
    from: 'Tom Brown',
    to: 'Bank **** 8901',
    amount: 800,
    type: 'withdrawal',
    status: 'processing',
    fee: 16
  },
  {
    id: 'TXN-006',
    date: 'Jan 13, 2025 15:10',
    from: 'Sarah Johnson',
    to: 'Bank **** 1234',
    amount: 1000,
    type: 'withdrawal',
    status: 'completed',
    fee: 20
  },
  {
    id: 'TXN-007',
    date: 'Jan 13, 2025 14:00',
    from: 'Alex Turner',
    to: 'Mike Davis',
    amount: 450,
    type: 'payment',
    status: 'failed',
    fee: 0
  }
];

export default function TransactionsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [dateFilter, setDateFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'completed':
        return <Badge className="bg-gray-900 text-white border-0">Completed</Badge>;
      case 'pending':
        return <Badge className="bg-gray-400 text-white border-0">Pending</Badge>;
      case 'processing':
        return <Badge className="bg-gray-600 text-white border-0">Processing</Badge>;
      case 'failed':
        return <Badge className="bg-gray-300 text-gray-800 border-0">Failed</Badge>;
      default:
        return <Badge className="bg-gray-100 text-gray-700 border-0">{status}</Badge>;
    }
  };

  const totalVolume = transactions.reduce((sum, t) => sum + t.amount, 0);
  const totalFees = transactions.reduce((sum, t) => sum + t.fee, 0);
  const completedCount = transactions.filter(t => t.status === 'completed').length;

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-gray-100 to-gray-200">
      <AdminSidebar />
      <div className="flex-1 ml-64 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="mb-2">Transaction Monitoring</h1>
            <p className="text-gray-600">View and manage all platform transactions</p>
          </div>
          <Button className="rounded-full bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-800 hover:to-gray-950">
            <Download className="w-4 h-4 mr-2" />
            Export Report
          </Button>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="p-6 border-0 bg-white shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-between mb-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center">
                <span className="text-white">$</span>
              </div>
              <ArrowUpRight className="w-5 h-5 text-gray-700" />
            </div>
            <p className="text-gray-600 text-sm mb-1">Total Volume</p>
            <p className="text-gray-900">${totalVolume.toLocaleString()}</p>
          </Card>

          <Card className="p-6 border-0 bg-white shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-between mb-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-gray-800 to-black flex items-center justify-center">
                <span className="text-white">✓</span>
              </div>
            </div>
            <p className="text-gray-600 text-sm mb-1">Completed</p>
            <p className="text-gray-900">{completedCount}</p>
          </Card>

          <Card className="p-6 border-0 bg-white shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-between mb-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-gray-600 to-gray-800 flex items-center justify-center">
                <span className="text-white">⏳</span>
              </div>
            </div>
            <p className="text-gray-600 text-sm mb-1">Pending</p>
            <p className="text-gray-900">{transactions.filter(t => t.status === 'pending' || t.status === 'processing').length}</p>
          </Card>

          <Card className="p-6 border-0 bg-white shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-between mb-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-gray-500 to-gray-700 flex items-center justify-center">
                <span className="text-white">💰</span>
              </div>
            </div>
            <p className="text-gray-600 text-sm mb-1">Platform Fees</p>
            <p className="text-gray-900">${totalFees.toFixed(2)}</p>
          </Card>
        </div>

        {/* Filters */}
        <Card className="p-6 mb-6 border-0 bg-white shadow-lg">
          <div className="flex items-center gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Search by transaction ID, user, or amount..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 rounded-xl"
              />
            </div>

            <Select value={dateFilter} onValueChange={setDateFilter}>
              <SelectTrigger className="w-48 rounded-xl">
                <SelectValue placeholder="Date range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Time</SelectItem>
                <SelectItem value="today">Today</SelectItem>
                <SelectItem value="week">This Week</SelectItem>
                <SelectItem value="month">This Month</SelectItem>
              </SelectContent>
            </Select>

            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-48 rounded-xl">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="processing">Processing</SelectItem>
                <SelectItem value="failed">Failed</SelectItem>
              </SelectContent>
            </Select>

            <Button variant="outline" className="rounded-xl border-gray-300">
              <Filter className="w-4 h-4 mr-2" />
              More
            </Button>
          </div>
        </Card>

        {/* Transactions Table */}
        <Card className="border-0 bg-white shadow-lg overflow-hidden">
          <Tabs defaultValue="all" className="w-full">
            <div className="px-6 pt-6">
              <TabsList className="bg-gray-100 p-1 rounded-xl">
                <TabsTrigger value="all" className="rounded-lg">All Transactions</TabsTrigger>
                <TabsTrigger value="payments" className="rounded-lg">Payments</TabsTrigger>
                <TabsTrigger value="withdrawals" className="rounded-lg">Withdrawals</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="all" className="mt-0">
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="border-gray-200">
                      <TableHead>Transaction ID</TableHead>
                      <TableHead>Date & Time</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>From</TableHead>
                      <TableHead>To</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Fee</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {transactions.map((transaction) => (
                      <TableRow key={transaction.id} className="border-gray-100">
                        <TableCell>
                          <p className="text-sm text-gray-900">{transaction.id}</p>
                        </TableCell>
                        <TableCell className="text-sm text-gray-600">
                          {transaction.date}
                        </TableCell>
                        <TableCell>
                          <Badge className={`${
                            transaction.type === 'payment'
                              ? 'bg-gray-100 text-gray-700'
                              : 'bg-blue-100 text-blue-700'
                          } border-0`}>
                            {transaction.type === 'payment' ? (
                              <ArrowUpRight className="w-3 h-3 mr-1" />
                            ) : (
                              <ArrowDownRight className="w-3 h-3 mr-1" />
                            )}
                            {transaction.type}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-sm text-gray-900">
                          {transaction.from}
                        </TableCell>
                        <TableCell className="text-sm text-gray-900">
                          {transaction.to}
                        </TableCell>
                        <TableCell className="text-sm">
                          <p className="text-gray-900">${transaction.amount}</p>
                        </TableCell>
                        <TableCell className="text-sm text-gray-600">
                          ${transaction.fee.toFixed(2)}
                        </TableCell>
                        <TableCell>
                          {getStatusBadge(transaction.status)}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </TabsContent>

            <TabsContent value="payments">
              <div className="p-8 text-center text-gray-500">
                Filter: Payments only
              </div>
            </TabsContent>

            <TabsContent value="withdrawals">
              <div className="p-8 text-center text-gray-500">
                Filter: Withdrawals only
              </div>
            </TabsContent>
          </Tabs>

          <div className="px-6 py-4 border-t border-gray-100 flex items-center justify-between">
            <p className="text-sm text-gray-600">Showing 7 transactions</p>
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
