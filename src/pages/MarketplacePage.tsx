import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Filter, Star, Heart, ChevronDown } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Avatar, AvatarImage, AvatarFallback } from '../components/ui/avatar';
import { Slider } from '../components/ui/slider';
import { Checkbox } from '../components/ui/checkbox';
import { Label } from '../components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

const services = [
  {
    id: 1,
    title: 'Modern Logo Design for Your Brand',
    category: 'Design',
    price: 150,
    rating: 4.9,
    reviews: 87,
    image: 'https://images.unsplash.com/photo-1656907959288-f5aa29da7020?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwY3JlYXRpdml0eXxlbnwxfHx8fDE3NjA1ODcxNzR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    freelancer: {
      name: 'Sarah Johnson',
      avatar: 'https://images.unsplash.com/photo-1670851810697-68ddb4ecae1c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHByb2Zlc3Npb25hbCUyMHdvcmt8ZW58MXx8fHwxNzYwNTg3MTc1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      level: 'Top Rated'
    },
    deliveryTime: '3 days'
  },
  {
    id: 2,
    title: 'Full Stack Web Application Development',
    category: 'Development',
    price: 500,
    rating: 5.0,
    reviews: 42,
    image: 'https://images.unsplash.com/photo-1748346918817-0b1b6b2f9bab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB0ZWFtd29ya3xlbnwxfHx8fDE3NjA0OTYyNDV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    freelancer: {
      name: 'Marcus Chen',
      avatar: 'https://images.unsplash.com/photo-1672685667592-0392f458f46f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjA1NTQxMzR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      level: 'Rising Talent'
    },
    deliveryTime: '7 days'
  },
  {
    id: 3,
    title: 'Professional Content Writing & SEO',
    category: 'Writing',
    price: 100,
    rating: 4.8,
    reviews: 156,
    image: 'https://images.unsplash.com/photo-1699570047113-16fdf623e83e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHdvcmtzcGFjZSUyMGNvbGxhYm9yYXRpb258ZW58MXx8fHwxNzYwNTEyMTI2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    freelancer: {
      name: 'Emma Watson',
      avatar: 'https://images.unsplash.com/photo-1602465750834-d43bfa8bbb6d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBmcmVlbGFuY2VyJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzYwNTg3MTc0fDA&ixlib=rb-4.1.0&q=80&w=1080',
      level: 'Top Collaborator'
    },
    deliveryTime: '2 days'
  },
  {
    id: 4,
    title: 'UI/UX Design for Mobile Apps',
    category: 'Design',
    price: 300,
    rating: 4.9,
    reviews: 73,
    image: 'https://images.unsplash.com/photo-1656907959288-f5aa29da7020?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwY3JlYXRpdml0eXxlbnwxfHx8fDE3NjA1ODcxNzR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    freelancer: {
      name: 'Sarah Johnson',
      avatar: 'https://images.unsplash.com/photo-1670851810697-68ddb4ecae1c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHByb2Zlc3Npb25hbCUyMHdvcmt8ZW58MXx8fHwxNzYwNTg3MTc1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      level: 'Top Rated'
    },
    deliveryTime: '5 days'
  },
  {
    id: 5,
    title: 'Social Media Marketing Strategy',
    category: 'Marketing',
    price: 200,
    rating: 4.7,
    reviews: 91,
    image: 'https://images.unsplash.com/photo-1748346918817-0b1b6b2f9bab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB0ZWFtd29ya3xlbnwxfHx8fDE3NjA0OTYyNDV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    freelancer: {
      name: 'Marcus Chen',
      avatar: 'https://images.unsplash.com/photo-1672685667592-0392f458f46f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjA1NTQxMzR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      level: 'Rising Talent'
    },
    deliveryTime: '4 days'
  },
  {
    id: 6,
    title: 'E-commerce Website Development',
    category: 'Development',
    price: 800,
    rating: 5.0,
    reviews: 35,
    image: 'https://images.unsplash.com/photo-1699570047113-16fdf623e83e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHdvcmtzcGFjZSUyMGNvbGxhYm9yYXRpb258ZW58MXx8fHwxNzYwNTEyMTI2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    freelancer: {
      name: 'Marcus Chen',
      avatar: 'https://images.unsplash.com/photo-1672685667592-0392f458f46f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjA1NTQxMzR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      level: 'Rising Talent'
    },
    deliveryTime: '10 days'
  }
];

const categories = ['All', 'Design', 'Development', 'Writing', 'Marketing', 'Video', 'Music'];

export default function MarketplacePage() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>(['All']);
  const [priceRange, setPriceRange] = useState([0, 1000]);

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="mb-2">Explore Services</h1>
          <p className="text-gray-600">Browse thousands of services from talented freelancers</p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <Card className="p-6 sticky top-20 border-0 bg-white/80 backdrop-blur-sm shadow-lg">
              <div className="flex items-center gap-2 mb-6">
                <Filter className="w-5 h-5 text-blue-600" />
                <h3>Filters</h3>
              </div>

              {/* Category Filter */}
              <div className="mb-6">
                <Label className="mb-3 block">Category</Label>
                <div className="space-y-3">
                  {categories.map((category) => (
                    <div key={category} className="flex items-center">
                      <Checkbox 
                        id={category}
                        checked={selectedCategories.includes(category)}
                        onCheckedChange={(checked) => {
                          if (checked) {
                            setSelectedCategories([...selectedCategories, category]);
                          } else {
                            setSelectedCategories(selectedCategories.filter(c => c !== category));
                          }
                        }}
                      />
                      <label htmlFor={category} className="ml-2 text-sm cursor-pointer">
                        {category}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <Label className="mb-3 block">Price Range</Label>
                <Slider 
                  value={priceRange}
                  onValueChange={setPriceRange}
                  max={1000}
                  step={50}
                  className="mb-3"
                />
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <span>${priceRange[0]}</span>
                  <span>${priceRange[1]}</span>
                </div>
              </div>

              {/* Rating Filter */}
              <div className="mb-6">
                <Label className="mb-3 block">Minimum Rating</Label>
                <div className="space-y-2">
                  {[5, 4, 3].map((rating) => (
                    <div key={rating} className="flex items-center">
                      <Checkbox id={`rating-${rating}`} />
                      <label htmlFor={`rating-${rating}`} className="ml-2 text-sm cursor-pointer flex items-center gap-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        {rating}+ Stars
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Delivery Time */}
              <div className="mb-6">
                <Label className="mb-3 block">Delivery Time</Label>
                <div className="space-y-2">
                  {['24 hours', '3 days', '7 days', 'Anytime'].map((time) => (
                    <div key={time} className="flex items-center">
                      <Checkbox id={time} />
                      <label htmlFor={time} className="ml-2 text-sm cursor-pointer">
                        {time}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <Button className="w-full rounded-full bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-800 hover:to-black shadow-lg">
                Apply Filters
              </Button>
            </Card>
          </div>

          {/* Services Grid */}
          <div className="lg:col-span-3">
            {/* Sort and View Options */}
            <div className="flex items-center justify-between mb-6">
              <p className="text-gray-600">Showing {services.length} results</p>
              <Select defaultValue="recommended">
                <SelectTrigger className="w-48 rounded-full border-gray-200">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="recommended">Recommended</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="rating">Top Rated</SelectItem>
                  <SelectItem value="recent">Most Recent</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Services List */}
            <div className="grid md:grid-cols-2 gap-6">
              {services.map((service) => (
                <Link key={service.id} to={`/project/${service.id}`}>
                  <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 bg-white group">
                    <div className="relative h-48 overflow-hidden">
                      <ImageWithFallback 
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <Button 
                        variant="ghost" 
                        size="icon"
                        className="absolute top-3 right-3 bg-white/90 hover:bg-white rounded-full w-10 h-10"
                      >
                        <Heart className="w-5 h-5 text-gray-600" />
                      </Button>
                      <Badge className="absolute bottom-3 left-3 bg-gradient-to-r from-gray-700 to-gray-900 border-0 shadow-lg">
                        {service.category}
                      </Badge>
                    </div>

                    <div className="p-5">
                      <div className="flex items-center gap-2 mb-3">
                        <Avatar className="w-8 h-8">
                          <AvatarImage src={service.freelancer.avatar} />
                          <AvatarFallback>{service.freelancer.name[0]}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="text-sm">{service.freelancer.name}</p>
                          <Badge variant="outline" className="text-xs border-gray-300 text-gray-700">
                            {service.freelancer.level}
                          </Badge>
                        </div>
                      </div>

                      <h3 className="mb-3 line-clamp-2">{service.title}</h3>

                      <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm">{service.rating}</span>
                          <span className="text-gray-400 text-sm">({service.reviews})</span>
                        </div>
                        <div className="text-right">
                          <p className="text-gray-500 text-xs">Starting at</p>
                          <p className="text-blue-600">${service.price}</p>
                        </div>
                      </div>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-8">
              <Button variant="outline" className="rounded-full border-gray-300 text-gray-700 hover:bg-gray-100 px-8">
                Load More Services
                <ChevronDown className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
