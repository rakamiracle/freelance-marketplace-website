import { useState } from 'react';
import { DollarSign, TrendingUp, Download, CreditCard, Calendar, ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Card } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import { Separator } from '../../components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '../../components/ui/dialog';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../components/ui/select';

const transactions = [
  {
    id: 1,
    type: 'earning',
    title: 'Modern Logo Design',
    client: 'John Smith',
    amount: 150,
    date: 'Jan 15, 2025',
    status: 'completed'
  },
  {
    id: 2,
    type: 'earning',
    title: 'UI/UX Design for Mobile App',
    client: 'Sarah Johnson',
    amount: 300,
    date: 'Jan 14, 2025',
    status: 'completed'
  },
  {
    id: 3,
    type: 'withdrawal',
    title: 'Bank Withdrawal',
    client: 'To **** 4567',
    amount: -500,
    date: 'Jan 10, 2025',
    status: 'completed'
  },
  {
    id: 4,
    type: 'earning',
    title: 'Brand Identity Package',
    client: 'Mike Davis',
    amount: 500,
    date: 'Jan 8, 2025',
    status: 'completed'
  },
  {
    id: 5,
    type: 'earning',
    title: 'Website Redesign',
    client: 'Emma Wilson',
    amount: 800,
    date: 'Jan 5, 2025',
    status: 'completed'
  }
];

const monthlyEarnings = [
  { month: 'Jul', amount: 2400 },
  { month: 'Aug', amount: 3200 },
  { month: 'Sep', amount: 2800 },
  { month: 'Oct', amount: 4100 },
  { month: 'Nov', amount: 3600 },
  { month: 'Dec', amount: 4800 },
  { month: 'Jan', amount: 5240 }
];

export default function EarningsPage() {
  const [isWithdrawOpen, setIsWithdrawOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="mb-2">Earnings & Wallet</h1>
            <p className="text-gray-600">Track your income and manage withdrawals</p>
          </div>
          <Dialog open={isWithdrawOpen} onOpenChange={setIsWithdrawOpen}>
            <DialogTrigger asChild>
              <Button className="rounded-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700">
                <Download className="w-4 h-4 mr-2" />
                Withdraw Funds
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-md">
              <DialogHeader>
                <DialogTitle>Withdraw Funds</DialogTitle>
              </DialogHeader>
              <div className="space-y-6 py-4">
                <div className="p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl">
                  <p className="text-sm text-gray-600 mb-1">Available Balance</p>
                  <p className="text-blue-600">$5,240.00</p>
                </div>

                <div>
                  <Label>Withdrawal Method</Label>
                  <Select defaultValue="bank">
                    <SelectTrigger className="mt-2 rounded-xl">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="bank">Bank Account</SelectItem>
                      <SelectItem value="paypal">PayPal</SelectItem>
                      <SelectItem value="stripe">Stripe</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label>Amount ($)</Label>
                  <Input 
                    type="number" 
                    placeholder="0.00" 
                    className="mt-2 rounded-xl"
                  />
                  <p className="text-xs text-gray-500 mt-2">Minimum withdrawal: $50</p>
                </div>

                <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-xl">
                  <p className="text-sm text-gray-700">
                    <strong>Processing time:</strong> 3-5 business days<br />
                    <strong>Fee:</strong> 2% (min $2)
                  </p>
                </div>

                <div className="flex gap-3 pt-4">
                  <Button 
                    variant="outline" 
                    className="flex-1 rounded-full"
                    onClick={() => setIsWithdrawOpen(false)}
                  >
                    Cancel
                  </Button>
                  <Button 
                    className="flex-1 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700"
                    onClick={() => setIsWithdrawOpen(false)}
                  >
                    Confirm Withdrawal
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {/* Balance Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card className="p-6 border-0 bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center">
                <DollarSign className="w-6 h-6" />
              </div>
              <Badge className="bg-white/20 border-0 text-white">
                Available
              </Badge>
            </div>
            <p className="text-blue-100 text-sm mb-2">Wallet Balance</p>
            <p className="text-white">$5,240.00</p>
            <p className="text-blue-100 text-xs mt-2">+$1,240 this month</p>
          </Card>

          <Card className="p-6 border-0 bg-white shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
            </div>
            <p className="text-gray-600 text-sm mb-2">This Month</p>
            <p className="text-blue-600">$4,800.00</p>
            <div className="flex items-center gap-1 text-xs text-green-600 mt-2">
              <ArrowUpRight className="w-3 h-3" />
              <span>+28% from last month</span>
            </div>
          </Card>

          <Card className="p-6 border-0 bg-white shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                <Calendar className="w-6 h-6 text-white" />
              </div>
            </div>
            <p className="text-gray-600 text-sm mb-2">Total Lifetime</p>
            <p className="text-blue-600">$24,350.00</p>
            <p className="text-gray-500 text-xs mt-2">156 orders completed</p>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Earnings Chart */}
          <Card className="lg:col-span-2 p-6 border-0 bg-white shadow-lg">
            <div className="flex items-center justify-between mb-6">
              <h3>Monthly Earnings</h3>
              <Button variant="outline" className="rounded-full border-blue-300 text-blue-600 hover:bg-blue-50">
                <Download className="w-4 h-4 mr-2" />
                Export
              </Button>
            </div>

            <div className="h-64 flex items-end justify-between gap-3">
              {monthlyEarnings.map((item, index) => {
                const maxAmount = Math.max(...monthlyEarnings.map(e => e.amount));
                const height = (item.amount / maxAmount) * 100;
                return (
                  <div key={index} className="flex-1 flex flex-col items-center gap-2">
                    <div className="w-full flex flex-col items-center justify-end" style={{ height: '200px' }}>
                      <span className="text-xs text-blue-600 mb-2">${(item.amount / 1000).toFixed(1)}k</span>
                      <div 
                        className="w-full bg-gradient-to-t from-blue-500 to-blue-600 rounded-t-lg hover:opacity-80 transition-opacity cursor-pointer"
                        style={{ height: `${height}%` }}
                      ></div>
                    </div>
                    <span className="text-xs text-gray-500">{item.month}</span>
                  </div>
                );
              })}
            </div>
          </Card>

          {/* Quick Stats */}
          <Card className="p-6 border-0 bg-white shadow-lg">
            <h3 className="mb-6">Quick Stats</h3>
            
            <div className="space-y-6">
              <div className="p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm text-gray-600">Avg. Order Value</p>
                  <ArrowUpRight className="w-4 h-4 text-green-600" />
                </div>
                <p className="text-blue-600">$156.00</p>
              </div>

              <div className="p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm text-gray-600">Response Rate</p>
                  <CheckCircle className="w-4 h-4 text-green-600" />
                </div>
                <p className="text-blue-600">98%</p>
              </div>

              <div className="p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm text-gray-600">Completion Rate</p>
                  <CheckCircle className="w-4 h-4 text-green-600" />
                </div>
                <p className="text-blue-600">96%</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Transaction History */}
        <Card className="mt-6 border-0 bg-white shadow-lg">
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h3>Transaction History</h3>
              <Tabs defaultValue="all" className="w-auto">
                <TabsList className="bg-gray-100 p-1 rounded-xl">
                  <TabsTrigger value="all" className="rounded-lg">All</TabsTrigger>
                  <TabsTrigger value="earnings" className="rounded-lg">Earnings</TabsTrigger>
                  <TabsTrigger value="withdrawals" className="rounded-lg">Withdrawals</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>

            <div className="space-y-4">
              {transactions.map((transaction) => (
                <div key={transaction.id}>
                  <div className="flex items-center justify-between py-4">
                    <div className="flex items-center gap-4">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        transaction.type === 'earning' 
                          ? 'bg-blue-100' 
                          : 'bg-gray-100'
                      }`}>
                        {transaction.type === 'earning' ? (
                          <ArrowUpRight className="w-5 h-5 text-blue-600" />
                        ) : (
                          <ArrowDownRight className="w-5 h-5 text-gray-600" />
                        )}
                      </div>
                      <div>
                        <p className="mb-1">{transaction.title}</p>
                        <p className="text-sm text-gray-600">{transaction.client}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className={`mb-1 ${
                        transaction.amount > 0 ? 'text-green-600' : 'text-gray-600'
                      }`}>
                        {transaction.amount > 0 ? '+' : ''}${Math.abs(transaction.amount)}
                      </p>
                      <p className="text-sm text-gray-500">{transaction.date}</p>
                    </div>
                  </div>
                  <Separator />
                </div>
              ))}
            </div>

            <Button 
              variant="outline" 
              className="w-full mt-6 rounded-full border-blue-300 text-blue-600 hover:bg-blue-50"
            >
              Load More Transactions
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}

function CheckCircle({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}
