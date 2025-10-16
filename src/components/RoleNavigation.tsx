import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Package, 
  ShoppingCart, 
  DollarSign, 
  User, 
  Search,
  PlusCircle,
  Users,
  FileText,
  AlertTriangle,
  FolderKanban,
  BarChart3,
  Settings
} from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';

interface NavItem {
  label: string;
  path: string;
  icon: any;
  badge?: string;
}

const freelancerNav: NavItem[] = [
  { label: 'Dashboard', path: '/dashboard/freelancer', icon: LayoutDashboard },
  { label: 'My Services', path: '/freelancer/services', icon: Package },
  { label: 'Orders', path: '/freelancer/orders', icon: ShoppingCart, badge: '2' },
  { label: 'Earnings', path: '/freelancer/earnings', icon: DollarSign },
  { label: 'Profile', path: '/freelancer/1', icon: User }
];

const clientNav: NavItem[] = [
  { label: 'Dashboard', path: '/dashboard/client', icon: LayoutDashboard },
  { label: 'Explore Services', path: '/marketplace', icon: Search },
  { label: 'My Orders', path: '/client/orders', icon: ShoppingCart },
  { label: 'Post Project', path: '/client/post-project', icon: PlusCircle }
];

const adminNav: NavItem[] = [
  { label: 'Dashboard', path: '/admin/dashboard', icon: LayoutDashboard },
  { label: 'Pengguna', path: '/admin/users', icon: Users },
  { label: 'Proyek', path: '/admin/projects', icon: FolderKanban },
  { label: 'Transaksi', path: '/admin/transactions', icon: DollarSign },
  { label: 'Sengketa', path: '/admin/disputes', icon: AlertTriangle, badge: '3' },
  { label: 'Laporan', path: '/admin/reports', icon: BarChart3 },
  { label: 'Pengaturan', path: '/admin/settings', icon: Settings }
];

interface RoleNavigationProps {
  role: 'freelancer' | 'client' | 'admin';
}

export default function RoleNavigation({ role }: RoleNavigationProps) {
  const location = useLocation();

  const navItems = role === 'freelancer' ? freelancerNav : role === 'client' ? clientNav : adminNav;
  
  const getAccentColor = () => {
    switch (role) {
      case 'freelancer':
        return { bg: 'from-gray-600 to-gray-800', hover: 'hover:bg-gray-100', text: 'text-gray-900', activeBg: 'bg-gray-100' };
      case 'client':
        return { bg: 'from-gray-700 to-black', hover: 'hover:bg-gray-100', text: 'text-black', activeBg: 'bg-gray-100' };
      case 'admin':
        return { bg: 'from-gray-700 to-gray-900', hover: 'hover:bg-gray-100', text: 'text-gray-900', activeBg: 'bg-gray-100' };
    }
  };

  const colors = getAccentColor();

  return (
    <Card className="p-4 border-0 bg-white shadow-lg sticky top-24">
      <div className="mb-6">
        <div className={`w-full h-2 rounded-full bg-gradient-to-r ${colors.bg}`}></div>
        <p className="text-xs text-gray-500 mt-3 uppercase tracking-wide">
          {role} Menu
        </p>
      </div>

      <nav className="space-y-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;

          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center justify-between px-4 py-3 rounded-xl transition-all ${
                isActive 
                  ? `${colors.activeBg} ${colors.text}` 
                  : `text-gray-600 ${colors.hover}`
              }`}
            >
              <div className="flex items-center gap-3">
                <Icon className="w-5 h-5" />
                <span className="text-sm">{item.label}</span>
              </div>
              {item.badge && (
                <Badge className={`bg-gradient-to-r ${colors.bg} border-0 text-white`}>
                  {item.badge}
                </Badge>
              )}
            </Link>
          );
        })}
      </nav>
    </Card>
  );
}
