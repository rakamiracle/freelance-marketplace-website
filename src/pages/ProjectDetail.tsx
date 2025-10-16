import { Link } from 'react-router-dom';
import { Star, Clock, CheckCircle, Heart, Share2, MessageCircle, Award, Users } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Avatar, AvatarImage, AvatarFallback } from '../components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Separator } from '../components/ui/separator';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

const projectData = {
  title: 'Modern E-commerce Website Development',
  category: 'Web Development',
  description: 'Looking for an experienced full-stack developer to build a modern, responsive e-commerce website with payment integration, product management, and user authentication.',
  budget: '$3,000 - $5,000',
  duration: '4-6 weeks',
  postedDate: '2 days ago',
  proposals: 12,
  skills: ['React', 'Node.js', 'MongoDB', 'Stripe API', 'Tailwind CSS'],
  client: {
    name: 'TechStartup Inc.',
    avatar: 'https://images.unsplash.com/photo-1602465750834-d43bfa8bbb6d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBmcmVlbGFuY2VyJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzYwNTg3MTc0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 4.8,
    reviews: 45,
    location: 'New York, USA',
    projectsPosted: 28,
    memberSince: 'Mar 2023'
  }
};

const requirements = [
  'Responsive design for desktop, tablet, and mobile',
  'Product catalog with search and filtering',
  'Shopping cart and checkout functionality',
  'Stripe payment integration',
  'Admin dashboard for product management',
  'User authentication and profiles',
  'Order tracking and history',
  'Email notifications'
];

const milestones = [
  { title: 'Project Setup & Design', amount: '$1,000', duration: '1 week' },
  { title: 'Frontend Development', amount: '$1,500', duration: '2 weeks' },
  { title: 'Backend & API Integration', amount: '$1,500', duration: '2 weeks' },
  { title: 'Testing & Deployment', amount: '$1,000', duration: '1 week' }
];

const similarProjects = [
  {
    id: 2,
    title: 'Mobile App UI/UX Design',
    budget: '$1,500',
    proposals: 8,
    image: 'https://images.unsplash.com/photo-1656907959288-f5aa29da7020?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwY3JlYXRpdml0eXxlbnwxfHx8fDE3NjA1ODcxNzR8MA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    id: 3,
    title: 'Content Writing for Blog',
    budget: '$500',
    proposals: 15,
    image: 'https://images.unsplash.com/photo-1699570047113-16fdf623e83e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHdvcmtzcGFjZSUyMGNvbGxhYm9yYXRpb258ZW58MXx8fHwxNzYwNTEyMTI2fDA&ixlib=rb-4.1.0&q=80&w=1080'
  }
];

export default function ProjectDetail() {
  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Header */}
            <Card className="p-6 border-0 bg-white shadow-lg">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <Badge className="mb-3 bg-gradient-to-r from-blue-500 to-blue-600 border-0">
                    {projectData.category}
                  </Badge>
                  <h1 className="mb-3">{projectData.title}</h1>
                  <div className="flex items-center gap-4 text-gray-600 text-sm">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      Posted {projectData.postedDate}
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      {projectData.proposals} Proposals
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="icon" className="rounded-full">
                    <Heart className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full">
                    <Share2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl">
                <div>
                  <p className="text-gray-600 text-sm mb-1">Budget</p>
                  <p className="text-blue-600">{projectData.budget}</p>
                </div>
                <div>
                  <p className="text-gray-600 text-sm mb-1">Duration</p>
                  <p>{projectData.duration}</p>
                </div>
                <div>
                  <p className="text-gray-600 text-sm mb-1">Experience</p>
                  <p>Intermediate</p>
                </div>
              </div>
            </Card>

            {/* Description */}
            <Card className="p-6 border-0 bg-white shadow-lg">
              <h3 className="mb-4">Project Description</h3>
              <p className="text-gray-700 leading-relaxed mb-6">{projectData.description}</p>
              
              <Separator className="my-6" />

              <h3 className="mb-4">Requirements</h3>
              <ul className="space-y-3">
                {requirements.map((req, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{req}</span>
                  </li>
                ))}
              </ul>

              <Separator className="my-6" />

              <h3 className="mb-4">Required Skills</h3>
              <div className="flex flex-wrap gap-2">
                {projectData.skills.map((skill) => (
                  <Badge key={skill} variant="outline" className="border-blue-300 text-blue-600 px-4 py-1">
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>

            {/* Milestones */}
            <Card className="p-6 border-0 bg-white shadow-lg">
              <h3 className="mb-4">Project Milestones</h3>
              <div className="space-y-4">
                {milestones.map((milestone, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white flex-shrink-0">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <p className="mb-1">{milestone.title}</p>
                      <p className="text-gray-600 text-sm">{milestone.duration}</p>
                    </div>
                    <p className="text-blue-600">{milestone.amount}</p>
                  </div>
                ))}
              </div>
            </Card>

            {/* Reviews from Client */}
            <Card className="p-6 border-0 bg-white shadow-lg">
              <h3 className="mb-4">Client's Previous Reviews</h3>
              <div className="space-y-4">
                <Card className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
                  <div className="flex items-start gap-3">
                    <Avatar className="w-10 h-10">
                      <AvatarImage src="https://images.unsplash.com/photo-1672685667592-0392f458f46f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjA1NTQxMzR8MA&ixlib=rb-4.1.0&q=80&w=1080" />
                      <AvatarFallback>M</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <p className="text-sm">Marcus Chen</p>
                        <div className="flex gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                      </div>
                      <p className="text-gray-700 text-sm">"Excellent client! Clear requirements and prompt payments. Highly recommended!"</p>
                    </div>
                  </div>
                </Card>
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="space-y-6 sticky top-20">
              {/* Action Card */}
              <Card className="p-6 border-0 bg-white shadow-lg">
                <Button className="w-full rounded-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 mb-3">
                  Submit Proposal
                </Button>
                <Button variant="outline" className="w-full rounded-full border-blue-300 text-blue-600 hover:bg-blue-50">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Ask Question
                </Button>
              </Card>

              {/* Client Info */}
              <Card className="p-6 border-0 bg-white shadow-lg">
                <h4 className="mb-4">About the Client</h4>
                
                <div className="flex items-center gap-3 mb-4">
                  <Avatar className="w-16 h-16">
                    <AvatarImage src={projectData.client.avatar} />
                    <AvatarFallback>{projectData.client.name[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="mb-1">{projectData.client.name}</p>
                    <div className="flex items-center gap-1 text-sm">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span>{projectData.client.rating}</span>
                      <span className="text-gray-400">({projectData.client.reviews})</span>
                    </div>
                  </div>
                </div>

                <Separator className="my-4" />

                <div className="space-y-3 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Location</span>
                    <span>{projectData.client.location}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Projects Posted</span>
                    <span>{projectData.client.projectsPosted}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Member Since</span>
                    <span>{projectData.client.memberSince}</span>
                  </div>
                </div>

                <Separator className="my-4" />

                <Link to="/freelancer/1">
                  <Button variant="outline" className="w-full rounded-full border-blue-300 text-blue-600 hover:bg-blue-50">
                    View Profile
                  </Button>
                </Link>
              </Card>

              {/* Collaboration Opportunity */}
              <Card className="p-6 border-0 bg-gradient-to-br from-amber-50 to-orange-50 border-amber-200">
                <div className="flex items-center gap-3 mb-3">
                  <Award className="w-8 h-8 text-amber-600" />
                  <div>
                    <p>Team Project</p>
                    <p className="text-sm text-gray-600">Open for collaboration</p>
                  </div>
                </div>
                <p className="text-sm text-gray-700 mb-3">
                  This project welcomes team proposals. Collaborate with other freelancers for better results!
                </p>
                <Button variant="outline" className="w-full rounded-full border-amber-400 text-amber-700 hover:bg-amber-100">
                  Find Collaborators
                </Button>
              </Card>

              {/* Similar Projects */}
              <Card className="p-6 border-0 bg-white shadow-lg">
                <h4 className="mb-4">Similar Projects</h4>
                <div className="space-y-3">
                  {similarProjects.map((project) => (
                    <Link key={project.id} to={`/project/${project.id}`}>
                      <div className="flex gap-3 p-3 rounded-xl hover:bg-purple-50 transition-colors cursor-pointer">
                        <ImageWithFallback 
                          src={project.image}
                          alt={project.title}
                          className="w-16 h-16 rounded-lg object-cover"
                        />
                        <div className="flex-1 min-w-0">
                          <p className="text-sm mb-1 line-clamp-2">{project.title}</p>
                          <div className="flex items-center justify-between text-xs text-gray-600">
                            <span>{project.budget}</span>
                            <span>{project.proposals} proposals</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
