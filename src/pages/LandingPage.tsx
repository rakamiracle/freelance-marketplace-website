import { Link } from 'react-router-dom';
import { Search, Star, TrendingUp, Users, Award, ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Avatar, AvatarImage, AvatarFallback } from '../components/ui/avatar';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

const featuredFreelancers = [
  {
    id: 1,
    name: 'Sarah Johnson',
    title: 'UI/UX Designer',
    rating: 4.9,
    reviews: 127,
    image: 'https://images.unsplash.com/photo-1670851810697-68ddb4ecae1c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHByb2Zlc3Npb25hbCUyMHdvcmt8ZW58MXx8fHwxNzYwNTg3MTc1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    price: 85,
    badge: 'Top Rated'
  },
  {
    id: 2,
    name: 'Marcus Chen',
    title: 'Full Stack Developer',
    rating: 5.0,
    reviews: 98,
    image: 'https://images.unsplash.com/photo-1672685667592-0392f458f46f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjA1NTQxMzR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    price: 120,
    badge: 'Rising Talent'
  },
  {
    id: 3,
    name: 'Emma Watson',
    title: 'Content Writer',
    rating: 4.8,
    reviews: 215,
    image: 'https://images.unsplash.com/photo-1602465750834-d43bfa8bbb6d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBmcmVlbGFuY2VyJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzYwNTg3MTc0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    price: 65,
    badge: 'Top Collaborator'
  }
];

const categories = [
  { name: 'Design', icon: '🎨', color: 'from-gray-500 to-gray-700' },
  { name: 'Development', icon: '💻', color: 'from-gray-600 to-gray-800' },
  { name: 'Writing', icon: '✍️', color: 'from-gray-400 to-gray-600' },
  { name: 'Marketing', icon: '📈', color: 'from-gray-500 to-gray-700' },
  { name: 'Video', icon: '🎬', color: 'from-gray-600 to-gray-800' },
  { name: 'Music', icon: '🎵', color: 'from-gray-500 to-gray-700' }
];

const testimonials = [
  {
    name: 'Alex Rivera',
    role: 'Startup Founder',
    content: 'Found the perfect developer for our project. The collaboration features made working together seamless!',
    rating: 5
  },
  {
    name: 'Jessica Lee',
    role: 'Marketing Director',
    content: 'The quality of freelancers here is outstanding. Love the community-driven approach!',
    rating: 5
  }
];

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Badge className="bg-gradient-to-r from-gray-700 to-black text-white border-0">
                🎉 Join 50,000+ Freelancers & Clients
              </Badge>
              
              <h1 className="bg-gradient-to-r from-gray-900 via-gray-700 to-black bg-clip-text text-transparent">
                Find & Collaborate with Creative Talent
              </h1>
              
              <p className="text-gray-600">
                The modern freelance marketplace where creativity meets opportunity. 
                Connect with top talent, build amazing projects, and grow together.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <Input 
                    placeholder="Try 'logo design' or 'web development'" 
                    className="pl-12 h-14 rounded-2xl border-2 border-gray-200 focus:border-gray-400"
                  />
                </div>
                <Button className="h-14 px-8 rounded-2xl bg-gradient-to-r from-gray-700 to-black hover:from-gray-800 hover:to-gray-900">
                  Search
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>

              <div className="flex items-center gap-6 pt-4">
                <div className="flex -space-x-2">
                  {[1,2,3,4,5].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-500 to-gray-700 border-2 border-white"></div>
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span>4.9/5</span>
                  </div>
                  <p className="text-gray-500 text-sm">From 10,000+ reviews</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1699570047113-16fdf623e83e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHdvcmtzcGFjZSUyMGNvbGxhYm9yYXRpb258ZW58MXx8fHwxNzYwNTEyMTI2fDA&ixlib=rb-4.1.0&q=80&w=1080" 
                  alt="Creative workspace"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent"></div>
              </div>
              
              {/* Floating Card */}
              <Card className="absolute bottom-8 left-8 right-8 p-4 bg-white/95 backdrop-blur-sm border-0 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-700 to-black flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Project Completed</p>
                  </div>
                  <Badge className="ml-auto bg-gradient-to-r from-gray-700 to-black text-white border-0">+$2,500</Badge>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2>Explore Categories</h2>
            <p className="text-gray-600 mt-2">Find the perfect service for your project</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category) => (
              <Link key={category.name} to="/marketplace">
                <Card className="p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 bg-white cursor-pointer">
                  <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-3 text-3xl`}>
                    {category.icon}
                  </div>
                  <p>{category.name}</p>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Freelancers */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2>Featured Freelancers</h2>
              <p className="text-gray-600 mt-2">Top-rated talent ready to work on your project</p>
            </div>
            <Link to="/marketplace">
              <Button variant="outline" className="rounded-full border-gray-300 text-gray-700 hover:bg-gray-100">
                View All
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {featuredFreelancers.map((freelancer) => (
              <Link key={freelancer.id} to={`/freelancer/${freelancer.id}`}>
                <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-white">
                  <div className="relative h-48 bg-gradient-to-br from-gray-500 to-gray-700">
                    <ImageWithFallback 
                      src={freelancer.image}
                      alt={freelancer.name}
                      className="w-full h-full object-cover mix-blend-overlay"
                    />
                    <Badge className="absolute top-4 right-4 bg-white/95 text-gray-700 border-0">
                      {freelancer.badge}
                    </Badge>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="mb-1">{freelancer.name}</h3>
                        <p className="text-gray-600 text-sm">{freelancer.title}</p>
                      </div>
                      <Avatar className="w-12 h-12 border-2 border-white shadow-lg -mt-10">
                        <AvatarImage src={freelancer.image} />
                        <AvatarFallback>{freelancer.name[0]}</AvatarFallback>
                      </Avatar>
                    </div>
                    
                    <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span>{freelancer.rating}</span>
                        <span className="text-gray-400 text-sm">({freelancer.reviews})</span>
                      </div>
                      <div className="ml-auto">
                        <span className="text-gray-900">${freelancer.price}/hr</span>
                      </div>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-br from-gray-700 via-gray-800 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-white text-center">
            <div>
              <Users className="w-12 h-12 mx-auto mb-4 opacity-90" />
              <div className="mb-2">50,000+</div>
              <p className="text-gray-300">Active Freelancers</p>
            </div>
            <div>
              <Award className="w-12 h-12 mx-auto mb-4 opacity-90" />
              <div className="mb-2">100,000+</div>
              <p className="text-gray-300">Projects Completed</p>
            </div>
            <div>
              <TrendingUp className="w-12 h-12 mx-auto mb-4 opacity-90" />
              <div className="mb-2">$50M+</div>
              <p className="text-gray-300">Total Earned</p>
            </div>
            <div>
              <Star className="w-12 h-12 mx-auto mb-4 opacity-90" />
              <div className="mb-2">4.9/5</div>
              <p className="text-gray-300">Average Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2>What Our Community Says</h2>
            <p className="text-gray-600 mt-2">Real stories from real people</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-8 border-0 bg-white shadow-lg">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6">{testimonial.content}</p>
                <div>
                  <p>{testimonial.name}</p>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-gray-700 via-gray-800 to-black rounded-3xl p-12 text-white shadow-2xl">
            <h2 className="text-white mb-4">Ready to Start Your Journey?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of freelancers and clients building amazing projects together
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/auth">
                <Button className="bg-white text-gray-900 hover:bg-gray-100 rounded-full px-8 h-12">
                  Get Started as Freelancer
                </Button>
              </Link>
              <Link to="/auth">
                <Button variant="outline" className="border-2 border-white text-white hover:bg-white/10 rounded-full px-8 h-12">
                  Post a Project
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-gray-600 to-black flex items-center justify-center">
                  <span className="text-white">✦</span>
                </div>
                <span>FreelanceHub</span>
              </div>
              <p className="text-gray-400 text-sm">
                The modern freelance marketplace for creative collaboration
              </p>
            </div>
            
            <div>
              <h4 className="mb-4">For Freelancers</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Find Work</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Build Portfolio</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Get Paid</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="mb-4">For Clients</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Post a Job</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Find Talent</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 text-sm">
            <p>© 2025 FreelanceHub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
