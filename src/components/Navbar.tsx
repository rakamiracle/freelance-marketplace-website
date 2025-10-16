import { Link, useLocation } from 'react-router-dom';
import { Search, Bell, MessageSquare, User, Menu } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Badge } from './ui/badge';
import Logo from './Logo';

export default function Navbar() {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Logo size="md" />

          {/* Search Bar */}
          <div className="hidden md:flex items-center flex-1 max-w-lg mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input 
                placeholder="Search for services..." 
                className="pl-10 rounded-full border-gray-200 focus:border-gray-400"
              />
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden lg:flex items-center gap-6">
            <Link 
              to="/marketplace" 
              className={`transition-colors ${isActive('/marketplace') ? 'text-black' : 'text-gray-600 hover:text-black'}`}
            >
              Explore
            </Link>
            <Link 
              to="/dashboard/freelancer" 
              className={`transition-colors ${isActive('/dashboard/freelancer') ? 'text-black' : 'text-gray-600 hover:text-black'}`}
            >
              Dashboard
            </Link>
            <Link 
              to="/chat" 
              className="relative"
            >
              <MessageSquare className={`w-5 h-5 transition-colors ${isActive('/chat') ? 'text-black' : 'text-gray-600 hover:text-black'}`} />
              <Badge className="absolute -top-2 -right-2 w-5 h-5 flex items-center justify-center p-0 bg-gradient-to-r from-gray-700 to-black border-0">
                3
              </Badge>
            </Link>
            <button className="relative">
              <Bell className="w-5 h-5 text-gray-600 hover:text-black transition-colors" />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-gray-800 rounded-full"></span>
            </button>
            <Link to="/auth">
              <Button className="rounded-full bg-gradient-to-r from-gray-700 to-black hover:from-gray-800 hover:to-gray-900">
                <User className="w-4 h-4 mr-2" />
                Sign In
              </Button>
            </Link>
          </div>

          {/* Mobile Menu */}
          <button className="lg:hidden">
            <Menu className="w-6 h-6 text-gray-600" />
          </button>
        </div>
      </div>
    </nav>
  );
}
