import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import MarketplacePage from './pages/MarketplacePage';
import FreelancerProfile from './pages/FreelancerProfile';
import ProjectDetail from './pages/ProjectDetail';
import ChatPage from './pages/ChatPage';
import DashboardFreelancer from './pages/DashboardFreelancer';
import DashboardClient from './pages/DashboardClient';
import AuthPage from './pages/AuthPage';
import Navbar from './components/Navbar';

// Freelancer Pages
import MyServicesPage from './pages/freelancer/MyServicesPage';
import OrderManagementPage from './pages/freelancer/OrderManagementPage';
import EarningsPage from './pages/freelancer/EarningsPage';

// Client Pages
import MyOrdersPage from './pages/client/MyOrdersPage';
import PostProjectPage from './pages/client/PostProjectPage';

// Admin Pages
import AdminDashboard from './pages/admin/AdminDashboard';
import UsersManagement from './pages/admin/UsersManagement';
import TransactionsPage from './pages/admin/TransactionsPage';
import DisputesPage from './pages/admin/DisputesPage';
import ProjectsManagement from './pages/admin/ProjectsManagement';
import ReportsPage from './pages/admin/ReportsPage';
import SettingsPage from './pages/admin/SettingsPage';
import VerificationPage from './pages/admin/VerificationPage';
import CategoriesPage from './pages/admin/CategoriesPage';
import AnalyticsPage from './pages/admin/AnalyticsPage';
import NotificationsPage from './pages/admin/NotificationsPage';
import { Toaster } from './components/ui/sonner';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200">
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/marketplace" element={<MarketplacePage />} />
          <Route path="/freelancer/:id" element={<FreelancerProfile />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
          <Route path="/chat" element={<ChatPage />} />
          <Route path="/auth" element={<AuthPage />} />
          
          {/* Freelancer Routes */}
          <Route path="/dashboard/freelancer" element={<DashboardFreelancer />} />
          <Route path="/freelancer/services" element={<MyServicesPage />} />
          <Route path="/freelancer/orders" element={<OrderManagementPage />} />
          <Route path="/freelancer/earnings" element={<EarningsPage />} />
          
          {/* Client Routes */}
          <Route path="/dashboard/client" element={<DashboardClient />} />
          <Route path="/client/orders" element={<MyOrdersPage />} />
          <Route path="/client/post-project" element={<PostProjectPage />} />
          
          {/* Admin Routes */}
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/users" element={<UsersManagement />} />
          <Route path="/admin/verification" element={<VerificationPage />} />
          <Route path="/admin/projects" element={<ProjectsManagement />} />
          <Route path="/admin/transactions" element={<TransactionsPage />} />
          <Route path="/admin/disputes" element={<DisputesPage />} />
          <Route path="/admin/categories" element={<CategoriesPage />} />
          <Route path="/admin/reports" element={<ReportsPage />} />
          <Route path="/admin/analytics" element={<AnalyticsPage />} />
          <Route path="/admin/notifications" element={<NotificationsPage />} />
          <Route path="/admin/settings" element={<SettingsPage />} />
          
          {/* Catch-all route - redirect to home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Toaster />
      </div>
    </Router>
  );
}
