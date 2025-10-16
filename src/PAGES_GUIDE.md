# Freelance Marketplace - Pages Guide

This document outlines all the pages and routes available in the platform, organized by user role.

## 🎨 Design System

### Color Palette by Role
- **Freelancer Pages**: Blue accent (`#60A5FA` to `#3B82F6`)
- **Client Pages**: Indigo/Purple accent (`#818CF8` to `#6366F1`)
- **Admin Pages**: Dark Gray/Neutral (`#374151` to `#111827`)

### Common Elements
- Typography: System defaults with proper hierarchy
- Spacing: Generous whitespace for clarity
- Borders: Rounded corners (xl, 2xl) for modern look
- Shadows: Soft shadows for depth
- Gradients: Subtle background gradients

## 📁 File Structure

```
/pages
├── LandingPage.tsx              # Public home page
├── MarketplacePage.tsx          # Browse services
├── FreelancerProfile.tsx        # Freelancer public profile
├── ProjectDetail.tsx            # Project/Service details
├── ChatPage.tsx                 # Real-time messaging
├── AuthPage.tsx                 # Login/Register with role selection
├── DashboardFreelancer.tsx      # Freelancer main dashboard
├── DashboardClient.tsx          # Client main dashboard
│
├── /freelancer                  # Freelancer-specific pages
│   ├── MyServicesPage.tsx       # Manage services (CRUD)
│   ├── OrderManagementPage.tsx  # Active orders with delivery
│   └── EarningsPage.tsx         # Wallet & transactions
│
├── /client                      # Client-specific pages
│   ├── MyOrdersPage.tsx         # Track hired projects
│   └── PostProjectPage.tsx      # Multi-step project posting
│
└── /admin                       # Admin-specific pages
    ├── AdminDashboard.tsx       # Platform overview
    ├── UsersManagement.tsx      # User CRUD operations
    ├── TransactionsPage.tsx     # Transaction monitoring
    └── DisputesPage.tsx         # Dispute resolution
```

## 🛣️ Routes

### Public Routes
| Path | Component | Description |
|------|-----------|-------------|
| `/` | LandingPage | Marketing homepage with hero |
| `/marketplace` | MarketplacePage | Browse all services |
| `/freelancer/:id` | FreelancerProfile | Public freelancer profile |
| `/project/:id` | ProjectDetail | Service/Project details |
| `/auth` | AuthPage | Login/Register with role selection |
| `/chat` | ChatPage | Messaging system |

### Freelancer Routes (Blue Theme)
| Path | Component | Description |
|------|-----------|-------------|
| `/dashboard/freelancer` | DashboardFreelancer | Performance stats, active orders |
| `/freelancer/services` | MyServicesPage | Create/edit/delete services |
| `/freelancer/orders` | OrderManagementPage | Order timeline & delivery |
| `/freelancer/earnings` | EarningsPage | Wallet, withdrawals, history |

### Client Routes (Indigo/Purple Theme)
| Path | Component | Description |
|------|-----------|-------------|
| `/dashboard/client` | DashboardClient | Projects overview, spending |
| `/client/orders` | MyOrdersPage | Track active projects |
| `/client/post-project` | PostProjectPage | Step-by-step project form |

### Admin Routes (Gray Theme)
| Path | Component | Description |
|------|-----------|-------------|
| `/admin/dashboard` | AdminDashboard | Platform stats & metrics |
| `/admin/users` | UsersManagement | User table with actions |
| `/admin/transactions` | TransactionsPage | Payment monitoring |
| `/admin/disputes` | DisputesPage | Dispute resolution |

## 👩‍💻 Freelancer Pages Details

### MyServicesPage
**Purpose**: Manage service offerings
- Grid view of all services
- Create new service dialog with form
- Edit/delete/pause actions
- Service stats (orders, revenue, rating)
- Image upload placeholder

### OrderManagementPage
**Purpose**: Detailed order management
- Order list with filters (active/completed)
- Order details view with timeline
- Milestone tracking
- File upload for delivery
- Client communication button

### EarningsPage
**Purpose**: Financial management
- Wallet balance card
- Monthly earnings chart
- Withdrawal dialog with bank selection
- Transaction history table
- Quick stats (avg order value, completion rate)

## 🧍‍♂️ Client Pages Details

### MyOrdersPage
**Purpose**: Track hired projects
- Order cards with progress bars
- Status badges (pending, in progress, completed)
- Freelancer info and ratings
- View details and message actions
- Stats overview cards

### PostProjectPage
**Purpose**: Create new project listings
- 4-step wizard (Details, Budget, Requirements, Review)
- Progress indicator
- Budget type selection (fixed/hourly)
- Skills tagging
- File upload for requirements
- Final review before posting

## 🧑‍💼 Admin Pages Details

### AdminDashboard
**Purpose**: Platform overview
- Key metrics cards (users, revenue, projects, disputes)
- Monthly revenue chart
- User growth stats
- Recent transactions feed
- Top performing freelancers

### UsersManagement
**Purpose**: User administration
- Searchable user table
- Filter by role/status
- User stats (orders, revenue/spent, rating)
- Actions: view, suspend, delete
- Tabs for filtering (all/freelancers/clients)

### TransactionsPage
**Purpose**: Payment monitoring
- Transaction table with all details
- Filters (date, status, type)
- Stats: volume, completed, pending, fees
- Export functionality
- Type badges (payment/withdrawal)

### DisputesPage
**Purpose**: Dispute resolution
- Dispute cards with full context
- Priority and status badges
- Client and freelancer info
- Resolution action buttons
- Admin notes section

## 🎯 Key Features by Role

### Freelancer Features
✅ Service creation and management
✅ Order tracking with milestones
✅ Delivery upload system
✅ Earnings analytics
✅ Withdrawal management
✅ Performance metrics

### Client Features
✅ Service browsing and filtering
✅ Multi-step project posting
✅ Order status tracking
✅ Progress monitoring
✅ Freelancer communication
✅ Payment summaries

### Admin Features
✅ Platform analytics dashboard
✅ User management (CRUD)
✅ Transaction monitoring
✅ Dispute resolution tools
✅ Revenue tracking
✅ User growth metrics

## 🔄 Navigation Component

Use the `RoleNavigation` component to add sidebar navigation:

```tsx
import RoleNavigation from './components/RoleNavigation';

// In your page
<RoleNavigation role="freelancer" />  // or "client" or "admin"
```

## 📊 Mock Data

All pages use realistic mock data for demonstration:
- User profiles with avatars
- Transaction history
- Service listings
- Order timelines
- Financial metrics

## 🚀 Next Steps

To extend the platform:
1. Add backend API integration
2. Implement real-time chat with WebSockets
3. Add payment gateway integration
4. Implement file upload functionality
5. Add email notifications
6. Create mobile responsive views
7. Add more admin tools (analytics, reports)

## 💡 Usage Tips

1. **Navigation**: Use the Navbar to switch between dashboards
2. **Role Testing**: Access different routes to see role-specific UIs
3. **Color Consistency**: Each role has a distinct color theme
4. **Reusable Components**: All pages use components from `/components/ui`
5. **Mock Data**: Replace mock data with real API calls in production
