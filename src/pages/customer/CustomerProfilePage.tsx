import React from 'react';
import DashboardLayout from '../../components/layout/DashboardLayout';
import CustomerProfileForm from '../../components/customer/CustomerProfileForm';
import { LayoutDashboard, ShoppingBag, Heart, MessageSquare, Settings, User } from 'lucide-react';

const navItems = [
  {
    path: '/customer',
    label: 'Dashboard',
    icon: <LayoutDashboard className="h-5 w-5" />,
  },
  {
    path: '/customer/profile',
    label: 'Profile',
    icon: <User className="h-5 w-5" />,
  },
  {
    path: '/customer/orders',
    label: 'Orders',
    icon: <ShoppingBag className="h-5 w-5" />,
  },
  {
    path: '/customer/favorites',
    label: 'Favorites',
    icon: <Heart className="h-5 w-5" />,
  },
  {
    path: '/customer/customizations',
    label: 'Customizations',
    icon: <MessageSquare className="h-5 w-5" />,
  },
  {
    path: '/customer/settings',
    label: 'Settings',
    icon: <Settings className="h-5 w-5" />,
  },
];

const CustomerProfilePage: React.FC = () => {
  return (
    <DashboardLayout title="Customer Profile" navItems={navItems}>
      <CustomerProfileForm />
    </DashboardLayout>
  );
};

export default CustomerProfilePage;