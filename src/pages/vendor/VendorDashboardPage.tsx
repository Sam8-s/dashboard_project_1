import React from 'react';
import { Link } from 'react-router-dom';
import DashboardLayout from '../../components/layout/DashboardLayout';
import { LayoutDashboard, Package, MessageSquare, CreditCard, Settings, User, Store } from 'lucide-react';

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

const VendorDashboardPage: React.FC = () => {
  return (
    <DashboardLayout title="Vendor Dashboard" navItems={navItems}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="dashboard-card">
          <h3 className="text-lg font-medium text-neutral-900 mb-2">Total Products</h3>
          <p className="text-3xl font-semibold text-primary-600">12</p>
          <div className="mt-2 text-sm text-neutral-500">
            <span className="text-success-600">↑ 2</span> from last month
          </div>
          <div className="mt-4">
            <Link to="/vendor/products" className="text-sm text-primary-600 hover:text-primary-700">
              Manage products →
            </Link>
          </div>
        </div>
        
        <div className="dashboard-card">
          <h3 className="text-lg font-medium text-neutral-900 mb-2">Total Orders</h3>
          <p className="text-3xl font-semibold text-primary-600">28</p>
          <div className="mt-2 text-sm text-neutral-500">
            <span className="text-success-600">↑ 5</span> from last month
          </div>
          <div className="mt-4">
            <Link to="/vendor/orders" className="text-sm text-primary-600 hover:text-primary-700">
              View orders →
            </Link>
          </div>
        </div>
        
        <div className="dashboard-card">
          <h3 className="text-lg font-medium text-neutral-900 mb-2">Revenue</h3>
          <p className="text-3xl font-semibold text-primary-600">$1,842</p>
          <div className="mt-2 text-sm text-neutral-500">
            <span className="text-success-600">↑ $320</span> from last month
          </div>
          <div className="mt-4">
            <Link to="/vendor/payments" className="text-sm text-primary-600 hover:text-primary-700">
              View details →
            </Link>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <div className="dashboard-card">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-medium text-neutral-900">Recent Orders</h3>
            <Link to="/vendor/orders" className="text-sm text-primary-600 hover:text-primary-700">
              View all
            </Link>
          </div>
          
          <div className="space-y-3">
            {[
              { id: 1, product: 'Ceramic Mug', customer: 'Emma Wilson', price: '$45.00', status: 'completed' },
              { id: 2, product: 'Wooden Bowl', customer: 'Michael Brown', price: '$65.00', status: 'processing' },
              { id: 3, product: 'Pottery Vase', customer: 'Sophia Martinez', price: '$80.00', status: 'processing' },
              { id: 4, product: 'Ceramic Plate Set', customer: 'William Lee', price: '$120.00', status: 'completed' },
            ].map((order) => (
              <div key={order.id} className="flex items-center justify-between p-3 bg-neutral-50 rounded-md">
                <div>
                  <p className="font-medium">{order.product}</p>
                  <p className="text-sm text-neutral-500">by {order.customer}</p>
                </div>
                <div className="text-right">
                  <p className="font-medium">{order.price}</p>
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      order.status === 'completed'
                        ? 'bg-success-100 text-success-800'
                        : 'bg-warning-100 text-warning-800'
                    }`}
                  >
                    {order.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="dashboard-card">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-medium text-neutral-900">Customization Requests</h3>
            <Link to="/vendor/customizations" className="text-sm text-primary-600 hover:text-primary-700">
              View all
            </Link>
          </div>
          
          <div className="space-y-3">
            {[
              { id: 1, customer: 'Emma Wilson', product: 'Ceramic Mug', date: '2 days ago' },
              { id: 2, customer: 'Michael Brown', product: 'Wooden Bowl', date: '3 days ago' },
              { id: 3, customer: 'Sophia Martinez', product: 'Custom Vase', date: '5 days ago' },
            ].map((request) => (
              <div key={request.id} className="flex items-center justify-between p-3 bg-neutral-50 rounded-md">
                <div>
                  <p className="font-medium">{request.customer}</p>
                  <p className="text-sm text-neutral-500">{request.product}</p>
                </div>
                <div className="flex items-center">
                  <span className="text-xs text-neutral-500 mr-3">{request.date}</span>
                  <button className="btn-ghost p-1 text-primary-600 hover:text-primary-700">
                    View
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          {/* Empty state for demonstration */}
          {false && (
            <div className="flex flex-col items-center justify-center p-8 text-center">
              <MessageSquare className="h-12 w-12 text-neutral-300 mb-2" />
              <h4 className="text-lg font-medium text-neutral-900 mb-1">No customization requests</h4>
              <p className="text-neutral-500">
                When customers request customizations for your products, they'll appear here.
              </p>
            </div>
          )}
        </div>
      </div>
      
      <div className="mt-6">
        <div className="dashboard-card">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-medium text-neutral-900">Quick Actions</h3>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link
              to="/vendor/products/new"
              className="bg-primary-50 p-4 rounded-lg text-center hover:bg-primary-100 transition-colors"
            >
              <Package className="h-8 w-8 mx-auto text-primary-600 mb-2" />
              <p className="font-medium text-primary-900">Add Product</p>
            </Link>
            
            <Link
              to="/vendor/profile"
              className="bg-secondary-50 p-4 rounded-lg text-center hover:bg-secondary-100 transition-colors"
            >
              <Store className="h-8 w-8 mx-auto text-secondary-700 mb-2" />
              <p className="font-medium text-secondary-900">Edit Shop</p>
            </Link>
            
            <Link
              to="/vendor/customizations"
              className="bg-accent-50 p-4 rounded-lg text-center hover:bg-accent-100 transition-colors"
            >
              <MessageSquare className="h-8 w-8 mx-auto text-accent-600 mb-2" />
              <p className="font-medium text-accent-900">View Requests</p>
            </Link>
            
            <Link
              to="/vendor/settings"
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

export default VendorDashboardPage;