import React from 'react';
import { Link } from 'react-router-dom';
import DashboardLayout from '../../components/layout/DashboardLayout';
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

const AdminDashboardPage: React.FC = () => {
  return (
    <DashboardLayout title="Admin Dashboard" navItems={navItems}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="dashboard-card">
          <h3 className="text-lg font-medium text-neutral-900 mb-2">Total Vendors</h3>
          <p className="text-3xl font-semibold text-primary-600">24</p>
          <div className="mt-2 text-sm text-neutral-500">
            <span className="text-success-600">↑ 12%</span> from last month
          </div>
          <div className="mt-4">
            <Link to="/admin/vendors" className="text-sm text-primary-600 hover:text-primary-700">
              View all vendors →
            </Link>
          </div>
        </div>
        
        <div className="dashboard-card">
          <h3 className="text-lg font-medium text-neutral-900 mb-2">Total Customers</h3>
          <p className="text-3xl font-semibold text-primary-600">187</p>
          <div className="mt-2 text-sm text-neutral-500">
            <span className="text-success-600">↑ 8%</span> from last month
          </div>
          <div className="mt-4">
            <Link to="/admin/customers" className="text-sm text-primary-600 hover:text-primary-700">
              View all customers →
            </Link>
          </div>
        </div>
        
        <div className="dashboard-card">
          <h3 className="text-lg font-medium text-neutral-900 mb-2">Total Orders</h3>
          <p className="text-3xl font-semibold text-primary-600">342</p>
          <div className="mt-2 text-sm text-neutral-500">
            <span className="text-success-600">↑ 17%</span> from last month
          </div>
          <div className="mt-4">
            <Link to="/admin/orders" className="text-sm text-primary-600 hover:text-primary-700">
              View all orders →
            </Link>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <div className="dashboard-card">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-medium text-neutral-900">Recent Vendors</h3>
            <Link to="/admin/vendors" className="text-sm text-primary-600 hover:text-primary-700">
              View all
            </Link>
          </div>
          
          <div className="space-y-3">
            {[
              { id: 1, name: 'Pottery Paradise', owner: 'Jane Smith', status: 'active' },
              { id: 2, name: 'Wooden Wonders', owner: 'John Doe', status: 'pending' },
              { id: 3, name: 'Textile Treasures', owner: 'Alice Brown', status: 'active' },
              { id: 4, name: 'Glass Creations', owner: 'Robert Johnson', status: 'active' },
            ].map((vendor) => (
              <div key={vendor.id} className="flex items-center justify-between p-3 bg-neutral-50 rounded-md">
                <div>
                  <p className="font-medium">{vendor.name}</p>
                  <p className="text-sm text-neutral-500">{vendor.owner}</p>
                </div>
                <span
                  className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    vendor.status === 'active'
                      ? 'bg-success-100 text-success-800'
                      : 'bg-warning-100 text-warning-800'
                  }`}
                >
                  {vendor.status}
                </span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="dashboard-card">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-medium text-neutral-900">Recent Customers</h3>
            <Link to="/admin/customers" className="text-sm text-primary-600 hover:text-primary-700">
              View all
            </Link>
          </div>
          
          <div className="space-y-3">
            {[
              { id: 1, name: 'Emma Wilson', email: 'emma@example.com', date: '2 days ago' },
              { id: 2, name: 'Michael Brown', email: 'michael@example.com', date: '3 days ago' },
              { id: 3, name: 'Sophia Martinez', email: 'sophia@example.com', date: '5 days ago' },
              { id: 4, name: 'William Lee', email: 'william@example.com', date: '1 week ago' },
            ].map((customer) => (
              <div key={customer.id} className="flex items-center justify-between p-3 bg-neutral-50 rounded-md">
                <div>
                  <p className="font-medium">{customer.name}</p>
                  <p className="text-sm text-neutral-500">{customer.email}</p>
                </div>
                <span className="text-xs text-neutral-500">{customer.date}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="mt-6">
        <div className="dashboard-card">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-medium text-neutral-900">Quick Actions</h3>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link
              to="/admin/layout"
              className="bg-primary-50 p-4 rounded-lg text-center hover:bg-primary-100 transition-colors"
            >
              <Palette className="h-8 w-8 mx-auto text-primary-600 mb-2" />
              <p className="font-medium text-primary-900">Manage Layout</p>
            </Link>
            
            <Link
              to="/admin/content"
              className="bg-secondary-50 p-4 rounded-lg text-center hover:bg-secondary-100 transition-colors"
            >
              <FileText className="h-8 w-8 mx-auto text-secondary-700 mb-2" />
              <p className="font-medium text-secondary-900">Edit Content</p>
            </Link>
            
            <Link
              to="/admin/vendors/new"
              className="bg-accent-50 p-4 rounded-lg text-center hover:bg-accent-100 transition-colors"
            >
              <Store className="h-8 w-8 mx-auto text-accent-600 mb-2" />
              <p className="font-medium text-accent-900">Add Vendor</p>
            </Link>
            
            <Link
              to="/admin/settings"
              className="bg-neutral-100 p-4 rounded-lg text-center hover:bg-neutral-200 transition-colors"
            >
              <Settings className="h-8 w-8 mx-auto text-neutral-700 mb-2" />
              <p className="font-medium text-neutral-900">Settings</p>
            </Link>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AdminDashboardPage;