import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Users, 
  Briefcase, 
  DollarSign, 
  AlertTriangle,
  FileText,
  Settings,
  Shield,
  CheckCircle,
  Tag,
  Bell,
  BarChart3
} from 'lucide-react';

const menuItems = [
  { path: '/admin/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
  { path: '/admin/users', icon: Users, label: 'User Management' },
  { path: '/admin/verification', icon: Shield, label: 'Verifikasi User' },
  { path: '/admin/projects', icon: Briefcase, label: 'Projects' },
  { path: '/admin/transactions', icon: DollarSign, label: 'Transactions' },
  { path: '/admin/disputes', icon: AlertTriangle, label: 'Disputes' },
  { path: '/admin/categories', icon: Tag, label: 'Kategori' },
  { path: '/admin/reports', icon: FileText, label: 'Reports' },
  { path: '/admin/analytics', icon: BarChart3, label: 'Analytics' },
  { path: '/admin/notifications', icon: Bell, label: 'Notifications' },
  { path: '/admin/settings', icon: Settings, label: 'Settings' }
];

export default function AdminSidebar() {
  const location = useLocation();

  return (
    <div className="fixed left-0 top-16 h-[calc(100vh-4rem)] w-64 bg-white border-r border-gray-200 shadow-lg overflow-y-auto">
      <div className="p-6">
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2">
            <Shield className="w-5 h-5 text-gray-700" />
            <h3 className="text-gray-900">Admin Panel</h3>
          </div>
          <p className="text-sm text-gray-500">Platform Management</p>
        </div>

        <nav className="space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                  isActive
                    ? 'bg-gradient-to-r from-gray-700 to-black text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="text-sm">{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
