import React from 'react';
import DashboardLayout from '../../components/layout/DashboardLayout';
import VendorProfileForm from '../../components/vendor/VendorProfileForm';
import { LayoutDashboard, Package, MessageSquare, CreditCard, Settings, User } from 'lucide-react';

const navItems = [
  {
    path: '/vendor',
    label: 'Dashboard',
    icon: <LayoutDashboard className="h-5 w-5" />,
  },
  {
    path: '/vendor/profile',
    label: 'Profile',
    icon: <User className="h-5 w-5" />,
  },
  {
    path: '/vendor/products',
    label: 'Products',
    icon: <Package className="h-5 w-5" />,
  },
  {
    path: '/vendor/customizations',
    label: 'Customizations',
    icon: <MessageSquare className="h-5 w-5" />,
  },
  {
    path: '/vendor/payments',
    label: 'Payments',
    icon: <CreditCard className="h-5 w-5" />,
  },
  {
    path: '/vendor/settings',
    label: 'Settings',
    icon: <Settings className="h-5 w-5" />,
  },
];

const VendorProfilePage: React.FC = () => {
  return (
    <DashboardLayout title="Vendor Profile" navItems={navItems}>
      <VendorProfileForm />
    </DashboardLayout>
  );
};

export default VendorProfilePage;