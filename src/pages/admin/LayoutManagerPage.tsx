import React from 'react';
import DashboardLayout from '../../components/layout/DashboardLayout';
import LayoutManager from '../../components/admin/LayoutManager';
import { LayoutDashboard, Users, Store, FileText, Settings, BarChart, Palette } from 'lucide-react';

const navItems = [
  {
    path: '/admin',
    label: 'Dashboard',
    icon: <LayoutDashboard className="h-5 w-5" />,
  },
  {
    path: '/admin/layout',
    label: 'Layout Manager',
    icon: <Palette className="h-5 w-5" />,
  },
  {
    path: '/admin/vendors',
    label: 'Vendors',
    icon: <Store className="h-5 w-5" />,
  },
  {
    path: '/admin/customers',
    label: 'Customers',
    icon: <Users className="h-5 w-5" />,
  },
  {
    path: '/admin/analytics',
    label: 'Analytics',
    icon: <BarChart className="h-5 w-5" />,
  },
  {
    path: '/admin/content',
    label: 'Content',
    icon: <FileText className="h-5 w-5" />,
  },
  {
    path: '/admin/settings',
    label: 'Settings',
    icon: <Settings className="h-5 w-5" />,
  },
];

const LayoutManagerPage: React.FC = () => {
  return (
    <DashboardLayout title="Layout Manager" navItems={navItems}>
      <LayoutManager />
    </DashboardLayout>
  );
};

export default LayoutManagerPage;