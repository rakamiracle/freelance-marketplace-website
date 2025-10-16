import { Link } from 'react-router-dom';
import { Users, Briefcase, DollarSign, TrendingUp, Clock, Star, MessageCircle, Plus } from 'lucide-react';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Avatar, AvatarImage, AvatarFallback } from '../components/ui/avatar';
import { Progress } from '../components/ui/progress';

const stats = [
  {
    title: 'Total Spent',
    value: '$24,800',
    change: '+18% from last month',
    icon: DollarSign,
    color: 'from-gray-600 to-gray-800',
    bgColor: 'from-gray-50 to-gray-100'
  },
  {
    title: 'Active Projects',
    value: '5',
    change: '2 awaiting review',
    icon: Briefcase,
    color: 'from-gray-700 to-black',
    bgColor: 'from-gray-50 to-gray-100'
  },
  {
    title: 'Freelancers Hired',
    value: '12',
    change: '4 new this month',
    icon: Users,
    color: 'from-gray-600 to-gray-800',
    bgColor: 'from-gray-50 to-gray-100'
  },
  {
    title: 'Success Rate',
    value: '96%',
    change: 'Excellent rating',
    icon: TrendingUp,
    color: 'from-gray-500 to-gray-700',
    bgColor: 'from-gray-50 to-gray-100'
  }
];

const activeProjects = [
  {
    id: 1,
    title: 'E-commerce Website Development',
    freelancer: {
      name: 'Marcus Chen',
      avatar: 'https://images.unsplash.com/photo-1672685667592-0392f458f46f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjA1NTQxMzR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      rating: 5.0
    },
    progress: 75,
    budget: '$5,000',
    dueDate: '8 days',
    status: 'In Progress',
    lastUpdate: '2 hours ago'
  },
  {
    id: 2,
    title: 'Mobile App UI/UX Design',
    freelancer: {
      name: 'Sarah Johnson',
      avatar: 'https://images.unsplash.com/photo-1670851810697-68ddb4ecae1c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHByb2Zlc3Npb25hbCUyMHdvcmt8ZW58MXx8fHwxNzYwNTg3MTc1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      rating: 4.9
    },
    progress: 90,
    budget: '$3,500',
    dueDate: '3 days',
    status: 'Review Needed',
    lastUpdate: '1 day ago'
  },
  {
    id: 3,
    title: 'Content Writing & SEO',
    freelancer: {
      name: 'Emma Watson',
      avatar: 'https://images.unsplash.com/photo-1602465750834-d43bfa8bbb6d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBmcmVlbGFuY2VyJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzYwNTg3MTc0fDA&ixlib=rb-4.1.0&q=80&w=1080',
      rating: 4.8
    },
    progress: 45,
    budget: '$1,200',
    dueDate: '14 days',
    status: 'In Progress',
    lastUpdate: '5 hours ago'
  }
];

const pendingProposals = [
  {
    id: 1,
    project: 'Logo Design for Tech Startup',
    proposals: 15,
    budget: '$500 - $800',
    postedDate: '2 days ago'
  },
  {
    id: 2,
    project: 'Social Media Marketing Campaign',
    proposals: 8,
    budget: '$1,000 - $1,500',
    postedDate: '5 days ago'
  }
];

const topFreelancers = [
  {
    id: 1,
    name: 'Sarah Johnson',
    title: 'UI/UX Designer',
    avatar: 'https://images.unsplash.com/photo-1670851810697-68ddb4ecae1c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHByb2Zlc3Npb25hbCUyMHdvcmt8ZW58MXx8fHwxNzYwNTg3MTc1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 4.9,
    projects: 3,
    spent: '$8,200'
  },
  {
    id: 2,
    name: 'Marcus Chen',
    title: 'Full Stack Developer',
    avatar: 'https://images.unsplash.com/photo-1672685667592-0392f458f46f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjA1NTQxMzR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 5.0,
    projects: 2,
    spent: '$9,500'
  }
];

export default function DashboardClient() {
  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="mb-2">Client Dashboard</h1>
            <p className="text-gray-600">Manage your projects and freelancers all in one place.</p>
          </div>
          <Link to="/client/post-project">
            <Button className="rounded-full bg-gradient-to-r from-gray-700 to-black hover:from-gray-800 hover:to-gray-900">
              <Plus className="w-4 h-4 mr-2" />
              Post New Project
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
            {/* Active Projects */}
            <Card className="p-6 border-0 bg-white shadow-lg">
              <div className="flex items-center justify-between mb-6">
                <h3>Active Projects</h3>
                <Button variant="link" className="text-gray-700">View All</Button>
              </div>

              <div className="space-y-4">
                {activeProjects.map((project) => (
                  <Card key={project.id} className="p-4 bg-gradient-to-br from-gray-50 to-gray-100 border-gray-200">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <p className="flex-1">{project.title}</p>
                          <Badge 
                            className={`${
                              project.status === 'Review Needed' 
                                ? 'bg-gray-600' 
                                : 'bg-gradient-to-r from-gray-700 to-black'
                            } text-white border-0`}
                          >
                            {project.status}
                          </Badge>
                        </div>
                        <div className="flex items-center gap-3">
                          <Avatar className="w-8 h-8">
                            <AvatarImage src={project.freelancer.avatar} />
                            <AvatarFallback>{project.freelancer.name[0]}</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="text-sm">{project.freelancer.name}</p>
                            <div className="flex items-center gap-1">
                              <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                              <span className="text-xs text-gray-600">{project.freelancer.rating}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2 mb-4">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">Progress</span>
                        <span className="text-gray-900">{project.progress}%</span>
                      </div>
                      <Progress value={project.progress} className="h-2" />
                    </div>

                    <div className="grid grid-cols-3 gap-3 text-sm mb-4">
                      <div>
                        <p className="text-gray-600 text-xs mb-1">Budget</p>
                        <p>{project.budget}</p>
                      </div>
                      <div>
                        <p className="text-gray-600 text-xs mb-1">Due Date</p>
                        <p className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {project.dueDate}
                        </p>
                      </div>
                      <div>
                        <p className="text-gray-600 text-xs mb-1">Last Update</p>
                        <p>{project.lastUpdate}</p>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Link to="/chat" className="flex-1">
                        <Button variant="outline" className="w-full rounded-full border-gray-300 text-gray-700 hover:bg-gray-100">
                          <MessageCircle className="w-4 h-4 mr-2" />
                          Message
                        </Button>
                      </Link>
                      <Link to={`/project/${project.id}`} className="flex-1">
                        <Button className="w-full rounded-full bg-gradient-to-r from-gray-700 to-black hover:from-gray-800 hover:to-gray-900">
                          View Details
                        </Button>
                      </Link>
                    </div>
                  </Card>
                ))}
              </div>
            </Card>

            {/* Spending Chart */}
            <Card className="p-6 border-0 bg-white shadow-lg">
              <h3 className="mb-6">Monthly Spending</h3>
              <div className="h-64 flex items-end justify-between gap-2">
                {[1200, 1800, 2100, 1900, 2400, 2800, 3200, 2900, 3500, 3100, 3800, 4200].map((value, index) => (
                  <div key={index} className="flex-1 flex flex-col items-center gap-2">
                    <div className="text-xs text-gray-600">${(value / 1000).toFixed(1)}k</div>
                    <div 
                      className="w-full bg-gradient-to-t from-blue-500 to-purple-600 rounded-t-lg hover:opacity-80 transition-opacity cursor-pointer" 
                      style={{ height: `${(value / 4200) * 100}%` }}
                    ></div>
                    <span className="text-xs text-gray-500">
                      {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][index]}
                    </span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Pending Proposals */}
            <Card className="p-6 border-0 bg-white shadow-lg">
              <div className="flex items-center justify-between mb-6">
                <h3>Projects Awaiting Proposals</h3>
                <Badge className="bg-gray-200 text-gray-900 border-0">
                  {pendingProposals.reduce((sum, p) => sum + p.proposals, 0)} New
                </Badge>
              </div>

              <div className="space-y-4">
                {pendingProposals.map((project) => (
                  <Link key={project.id} to={`/project/${project.id}`}>
                    <Card className="p-4 bg-gradient-to-br from-gray-50 to-gray-100 border-gray-200 hover:shadow-lg transition-shadow cursor-pointer">
                      <div className="flex items-center justify-between mb-2">
                        <p>{project.project}</p>
                        <Badge className="bg-gradient-to-r from-gray-700 to-black text-white border-0">
                          {project.proposals} Proposals
                        </Badge>
                      </div>
                      <div className="flex items-center justify-between text-sm text-gray-600">
                        <span>{project.budget}</span>
                        <span>Posted {project.postedDate}</span>
                      </div>
                    </Card>
                  </Link>
                ))}
              </div>
            </Card>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-1 space-y-6">
            {/* Budget Overview */}
            <Card className="p-6 border-0 bg-white shadow-lg">
              <h4 className="mb-4">Budget Overview</h4>
              
              <div className="space-y-4 mb-6">
                <div>
                  <div className="flex items-center justify-between mb-2 text-sm">
                    <span className="text-gray-600">Allocated</span>
                    <span>$10,000</span>
                  </div>
                  <Progress value={62} className="h-2" />
                </div>
                <div>
                  <div className="flex items-center justify-between mb-2 text-sm">
                    <span className="text-gray-600">Spent</span>
                    <span className="text-gray-900">$6,200</span>
                  </div>
                  <Progress value={62} className="h-2" />
                </div>
                <div>
                  <div className="flex items-center justify-between mb-2 text-sm">
                    <span className="text-gray-600">Remaining</span>
                    <span className="text-gray-700">$3,800</span>
                  </div>
                  <Progress value={38} className="h-2 [&>*]:bg-gray-600" />
                </div>
              </div>

              <Button variant="outline" className="w-full rounded-full border-gray-300 text-gray-700 hover:bg-gray-100">
                Manage Budget
              </Button>
            </Card>

            {/* Top Freelancers */}
            <Card className="p-6 border-0 bg-white shadow-lg">
              <h4 className="mb-4">Your Top Freelancers</h4>
              
              <div className="space-y-4">
                {topFreelancers.map((freelancer) => (
                  <Link key={freelancer.id} to={`/freelancer/${freelancer.id}`}>
                    <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer">
                      <Avatar className="w-12 h-12">
                        <AvatarImage src={freelancer.avatar} />
                        <AvatarFallback>{freelancer.name[0]}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm mb-1">{freelancer.name}</p>
                        <p className="text-xs text-gray-600 mb-1">{freelancer.title}</p>
                        <div className="flex items-center gap-2">
                          <div className="flex items-center gap-1">
                            <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                            <span className="text-xs">{freelancer.rating}</span>
                          </div>
                          <span className="text-xs text-gray-400">•</span>
                          <span className="text-xs text-gray-600">{freelancer.projects} projects</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-gray-600">Spent</p>
                        <p className="text-sm text-gray-900">{freelancer.spent}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              <Link to="/marketplace">
                <Button variant="outline" className="w-full mt-4 rounded-full border-gray-300 text-gray-700 hover:bg-gray-100">
                  Find More Talent
                </Button>
              </Link>
            </Card>

            {/* Quick Actions */}
            <Card className="p-6 border-0 bg-gradient-to-br from-gray-50 to-gray-100 border-gray-200">
              <h4 className="mb-4">Quick Actions</h4>
              <div className="space-y-2">
                <Link to="/client/post-project">
                  <Button className="w-full rounded-full bg-gradient-to-r from-gray-700 to-black hover:from-gray-800 hover:to-gray-900 justify-start">
                    <Plus className="w-4 h-4 mr-2" />
                    Post New Project
                  </Button>
                </Link>
                <Link to="/chat">
                  <Button variant="outline" className="w-full rounded-full border-gray-300 text-gray-700 hover:bg-gray-100 justify-start">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    View Messages
                  </Button>
                </Link>
                <Button variant="outline" className="w-full rounded-full border-gray-300 text-gray-700 hover:bg-gray-100 justify-start">
                  <Star className="w-4 h-4 mr-2" />
                  Leave Feedback
                </Button>
              </div>
            </Card>

            {/* Collaboration Highlight */}
            <Card className="p-6 border-0 bg-gradient-to-br from-gray-100 to-gray-200 border-gray-300">
              <h4 className="mb-3">💡 Pro Tip</h4>
              <p className="text-sm text-gray-700 mb-4">
                Consider team projects! Hiring multiple freelancers for complex projects often leads to better results and faster delivery.
              </p>
              <Button variant="outline" className="w-full rounded-full border-gray-400 text-gray-800 hover:bg-gray-200">
                Learn More
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
