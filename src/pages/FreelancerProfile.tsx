import { Link } from 'react-router-dom';
import { Star, MapPin, Clock, Award, CheckCircle, Heart, Share2, MessageCircle, Calendar } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Avatar, AvatarImage, AvatarFallback } from '../components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Progress } from '../components/ui/progress';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

const freelancerData = {
  name: 'Sarah Johnson',
  title: 'Senior UI/UX Designer & Brand Strategist',
  avatar: 'https://images.unsplash.com/photo-1670851810697-68ddb4ecae1c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHByb2Zlc3Npb25hbCUyMHdvcmt8ZW58MXx8fHwxNzYwNTg3MTc1fDA&ixlib=rb-4.1.0&q=80&w=1080',
  location: 'San Francisco, CA',
  hourlyRate: 85,
  rating: 4.9,
  totalReviews: 127,
  completedProjects: 156,
  responseTime: '1 hour',
  memberSince: 'Jan 2023',
  bio: 'Passionate designer with 8+ years of experience creating beautiful, user-centered digital experiences. I specialize in UI/UX design, branding, and design systems. My goal is to help businesses stand out through thoughtful design and strategic thinking.',
  skills: ['UI/UX Design', 'Figma', 'Adobe XD', 'Branding', 'Prototyping', 'Wireframing', 'Design Systems', 'User Research'],
  badges: ['Top Rated', 'Rising Star', 'Community Leader'],
  rewardPoints: 2850
};

const portfolio = [
  {
    id: 1,
    title: 'E-commerce Mobile App',
    image: 'https://images.unsplash.com/photo-1656907959288-f5aa29da7020?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwY3JlYXRpdml0eXxlbnwxfHx8fDE3NjA1ODcxNzR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Mobile Design'
  },
  {
    id: 2,
    title: 'SaaS Dashboard Interface',
    image: 'https://images.unsplash.com/photo-1748346918817-0b1b6b2f9bab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB0ZWFtd29ya3xlbnwxfHx8fDE3NjA0OTYyNDV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Web Design'
  },
  {
    id: 3,
    title: 'Brand Identity Design',
    image: 'https://images.unsplash.com/photo-1699570047113-16fdf623e83e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHdvcmtzcGFjZSUyMGNvbGxhYm9yYXRpb258ZW58MXx8fHwxNzYwNTEyMTI2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Branding'
  },
  {
    id: 4,
    title: 'Social Media App Redesign',
    image: 'https://images.unsplash.com/photo-1656907959288-f5aa29da7020?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwY3JlYXRpdml0eXxlbnwxfHx8fDE3NjA1ODcxNzR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Mobile Design'
  }
];

const reviews = [
  {
    id: 1,
    author: 'Alex Rivera',
    avatar: 'https://images.unsplash.com/photo-1672685667592-0392f458f46f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjA1NTQxMzR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 5,
    date: '2 weeks ago',
    comment: 'Sarah exceeded all expectations! The design was pixel-perfect and delivered ahead of schedule. Her attention to detail and communication throughout the project were outstanding.',
    project: 'Mobile App UI Design'
  },
  {
    id: 2,
    author: 'Jessica Lee',
    avatar: 'https://images.unsplash.com/photo-1602465750834-d43bfa8bbb6d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBmcmVlbGFuY2VyJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzYwNTg3MTc0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 5,
    date: '1 month ago',
    comment: 'Absolutely fantastic work! Sarah not only delivered beautiful designs but also provided valuable insights that improved our overall user experience. Will definitely work with her again!',
    project: 'Website Redesign'
  }
];

const skillLevels = [
  { name: 'UI/UX Design', level: 95 },
  { name: 'Figma', level: 98 },
  { name: 'Branding', level: 90 },
  { name: 'Prototyping', level: 92 }
];

export default function FreelancerProfile() {
  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Sidebar */}
          <div className="lg:col-span-1">
            <Card className="border-0 bg-white shadow-lg overflow-hidden sticky top-20">
              {/* Profile Header */}
              <div className="relative h-32 bg-gradient-to-br from-blue-400 to-blue-600">
                <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2">
                  <Avatar className="w-24 h-24 border-4 border-white shadow-xl">
                    <AvatarImage src={freelancerData.avatar} />
                    <AvatarFallback>{freelancerData.name[0]}</AvatarFallback>
                  </Avatar>
                </div>
              </div>

              <div className="pt-16 pb-6 px-6">
                <div className="text-center mb-6">
                  <h2 className="mb-1">{freelancerData.name}</h2>
                  <p className="text-gray-600 text-sm mb-3">{freelancerData.title}</p>
                  
                  <div className="flex items-center justify-center gap-2 mb-4">
                    {freelancerData.badges.map((badge) => (
                      <Badge key={badge} className="bg-gradient-to-r from-blue-500 to-blue-600 border-0 text-xs">
                        {badge}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center justify-center gap-1 mb-4">
                    <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    <span className="mr-1">{freelancerData.rating}</span>
                    <span className="text-gray-400 text-sm">({freelancerData.totalReviews} reviews)</span>
                  </div>

                  <div className="flex items-center justify-center gap-2 text-gray-600 text-sm">
                    <MapPin className="w-4 h-4" />
                    {freelancerData.location}
                  </div>
                </div>

                {/* Reward Points */}
                <Card className="p-4 mb-6 bg-gradient-to-br from-amber-50 to-orange-50 border-amber-200">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Award className="w-5 h-5 text-amber-600" />
                      <span className="text-sm">Reward Points</span>
                    </div>
                    <span className="text-amber-600">{freelancerData.rewardPoints}</span>
                  </div>
                </Card>

                {/* Quick Stats */}
                <div className="space-y-4 mb-6 pb-6 border-b border-gray-100">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Hourly Rate</span>
                    <span className="text-blue-600">${freelancerData.hourlyRate}/hr</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Response Time</span>
                    <span>{freelancerData.responseTime}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Projects Completed</span>
                    <span>{freelancerData.completedProjects}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Member Since</span>
                    <span>{freelancerData.memberSince}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3">
                  <Button className="w-full rounded-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Contact Me
                  </Button>
                  <Button variant="outline" className="w-full rounded-full border-blue-300 text-blue-600 hover:bg-blue-50">
                    <Calendar className="w-4 h-4 mr-2" />
                    Schedule Call
                  </Button>
                  <div className="flex gap-2">
                    <Button variant="outline" className="flex-1 rounded-full" size="icon">
                      <Heart className="w-4 h-4" />
                    </Button>
                    <Button variant="outline" className="flex-1 rounded-full" size="icon">
                      <Share2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="overview" className="space-y-6">
              <TabsList className="bg-white border border-gray-200 p-1 rounded-full">
                <TabsTrigger value="overview" className="rounded-full">Overview</TabsTrigger>
                <TabsTrigger value="portfolio" className="rounded-full">Portfolio</TabsTrigger>
                <TabsTrigger value="reviews" className="rounded-full">Reviews</TabsTrigger>
                <TabsTrigger value="analytics" className="rounded-full">Analytics</TabsTrigger>
              </TabsList>

              {/* Overview Tab */}
              <TabsContent value="overview" className="space-y-6">
                {/* About */}
                <Card className="p-6 border-0 bg-white shadow-lg">
                  <h3 className="mb-4">About Me</h3>
                  <p className="text-gray-700 leading-relaxed">{freelancerData.bio}</p>
                </Card>

                {/* Skills */}
                <Card className="p-6 border-0 bg-white shadow-lg">
                  <h3 className="mb-4">Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    {freelancerData.skills.map((skill) => (
                      <Badge key={skill} variant="outline" className="border-blue-300 text-blue-600 px-4 py-1">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </Card>

                {/* Skill Levels */}
                <Card className="p-6 border-0 bg-white shadow-lg">
                  <h3 className="mb-4">Skill Levels</h3>
                  <div className="space-y-4">
                    {skillLevels.map((skill) => (
                      <div key={skill.name}>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm">{skill.name}</span>
                          <span className="text-sm text-gray-600">{skill.level}%</span>
                        </div>
                        <Progress value={skill.level} className="h-2" />
                      </div>
                    ))}
                  </div>
                </Card>
              </TabsContent>

              {/* Portfolio Tab */}
              <TabsContent value="portfolio" className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {portfolio.map((item) => (
                    <Card key={item.id} className="overflow-hidden border-0 bg-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group cursor-pointer">
                      <div className="relative h-64 overflow-hidden">
                        <ImageWithFallback 
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        <Badge className="absolute top-4 left-4 bg-white/95 text-blue-600 border-0">
                          {item.category}
                        </Badge>
                      </div>
                      <div className="p-4">
                        <h4>{item.title}</h4>
                      </div>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              {/* Reviews Tab */}
              <TabsContent value="reviews" className="space-y-6">
                {/* Rating Overview */}
                <Card className="p-6 border-0 bg-white shadow-lg">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="text-center">
                      <div className="mb-2">{freelancerData.rating}</div>
                      <div className="flex items-center justify-center gap-1 mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <p className="text-gray-600">{freelancerData.totalReviews} total reviews</p>
                    </div>
                    <div className="space-y-2">
                      {[5, 4, 3, 2, 1].map((rating) => (
                        <div key={rating} className="flex items-center gap-3">
                          <span className="text-sm w-12">{rating} star</span>
                          <Progress value={rating === 5 ? 85 : rating === 4 ? 10 : 5} className="h-2" />
                          <span className="text-sm text-gray-600 w-12">{rating === 5 ? '85%' : rating === 4 ? '10%' : '5%'}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>

                {/* Individual Reviews */}
                <div className="space-y-4">
                  {reviews.map((review) => (
                    <Card key={review.id} className="p-6 border-0 bg-white shadow-lg">
                      <div className="flex items-start gap-4">
                        <Avatar className="w-12 h-12">
                          <AvatarImage src={review.avatar} />
                          <AvatarFallback>{review.author[0]}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <div>
                              <p>{review.author}</p>
                              <p className="text-gray-500 text-sm">{review.date}</p>
                            </div>
                            <div className="flex gap-1">
                              {[...Array(review.rating)].map((_, i) => (
                                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                              ))}
                            </div>
                          </div>
                          <Badge variant="outline" className="mb-3 border-blue-200 text-blue-600 text-xs">
                            {review.project}
                          </Badge>
                          <p className="text-gray-700 leading-relaxed">{review.comment}</p>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              {/* Analytics Tab */}
              <TabsContent value="analytics" className="space-y-6">
                <div className="grid md:grid-cols-3 gap-6">
                  <Card className="p-6 border-0 bg-gradient-to-br from-blue-50 to-blue-100 shadow-lg">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                        <CheckCircle className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-gray-600 text-sm">Success Rate</p>
                        <p className="text-blue-600">98%</p>
                      </div>
                    </div>
                    <Progress value={98} className="h-2" />
                  </Card>

                  <Card className="p-6 border-0 bg-gradient-to-br from-blue-50 to-blue-100 shadow-lg">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                        <Clock className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-gray-600 text-sm">On-Time Delivery</p>
                        <p className="text-blue-600">95%</p>
                      </div>
                    </div>
                    <Progress value={95} className="h-2" />
                  </Card>

                  <Card className="p-6 border-0 bg-gradient-to-br from-gray-50 to-gray-100 shadow-lg">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-gray-400 to-gray-600 flex items-center justify-center">
                        <TrendingUp className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-gray-600 text-sm">Repeat Clients</p>
                        <p className="text-gray-700">75%</p>
                      </div>
                    </div>
                    <Progress value={75} className="h-2" />
                  </Card>
                </div>

                {/* Skill Growth */}
                <Card className="p-6 border-0 bg-white shadow-lg">
                  <h3 className="mb-4">Skill Growth Over Time</h3>
                  <div className="h-64 flex items-end justify-between gap-2">
                    {[65, 70, 75, 80, 85, 90, 95, 98].map((value, index) => (
                      <div key={index} className="flex-1 flex flex-col items-center gap-2">
                        <div className="w-full bg-gradient-to-t from-blue-500 to-blue-600 rounded-t-lg" style={{ height: `${value}%` }}></div>
                        <span className="text-xs text-gray-500">M{index + 1}</span>
                      </div>
                    ))}
                  </div>
                </Card>

                {/* Collaboration Stats */}
                <Card className="p-6 border-0 bg-white shadow-lg">
                  <h3 className="mb-4">Collaboration Highlights</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center">
                        <Users className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <p className="text-gray-600 text-sm">Team Projects</p>
                        <p>42 Collaborations</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center">
                        <Award className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <p className="text-gray-600 text-sm">Community Rank</p>
                        <p>Top 5%</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}
