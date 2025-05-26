import React from 'react';
import { Link } from 'react-router-dom';
import DashboardLayout from '../../components/layout/DashboardLayout';
import { LayoutDashboard, ShoppingBag, Heart, MessageSquare, Settings, User, PackageOpen } from 'lucide-react';

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

const CustomerDashboardPage: React.FC = () => {
  return (
    <DashboardLayout title="Customer Dashboard" navItems={navItems}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="dashboard-card">
          <h3 className="text-lg font-medium text-neutral-900 mb-2">Orders</h3>
          <p className="text-3xl font-semibold text-primary-600">8</p>
          <div className="mt-2 text-sm text-neutral-500">
            <span className="text-success-600">↑ 2</span> from last month
          </div>
          <div className="mt-4">
            <Link to="/customer/orders" className="text-sm text-primary-600 hover:text-primary-700">
              View all orders →
            </Link>
          </div>
        </div>
        
        <div className="dashboard-card">
          <h3 className="text-lg font-medium text-neutral-900 mb-2">Saved Items</h3>
          <p className="text-3xl font-semibold text-primary-600">15</p>
          <div className="mt-2 text-sm text-neutral-500">Products in your wishlist</div>
          <div className="mt-4">
            <Link to="/customer/favorites" className="text-sm text-primary-600 hover:text-primary-700">
              View wishlist →
            </Link>
          </div>
        </div>
        
        <div className="dashboard-card">
          <h3 className="text-lg font-medium text-neutral-900 mb-2">Customization Requests</h3>
          <p className="text-3xl font-semibold text-primary-600">3</p>
          <div className="mt-2 text-sm text-neutral-500">
            <span className="text-warning-600">1 pending response</span>
          </div>
          <div className="mt-4">
            <Link to="/customer/customizations" className="text-sm text-primary-600 hover:text-primary-700">
              View requests →
            </Link>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <div className="dashboard-card">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-medium text-neutral-900">Recent Orders</h3>
            <Link to="/customer/orders" className="text-sm text-primary-600 hover:text-primary-700">
              View all
            </Link>
          </div>
          
          <div className="space-y-3">
            {[
              { id: 1, product: 'Ceramic Mug', vendor: 'Pottery Paradise', price: '$45.00', status: 'delivered' },
              { id: 2, product: 'Wooden Bowl', vendor: 'Wooden Wonders', price: '$65.00', status: 'shipped' },
              { id: 3, product: 'Hand-woven Basket', vendor: 'Textile Treasures', price: '$38.00', status: 'processing' },
            ].map((order) => (
              <div key={order.id} className="flex items-center justify-between p-3 bg-neutral-50 rounded-md">
                <div>
                  <p className="font-medium">{order.product}</p>
                  <p className="text-sm text-neutral-500">from {order.vendor}</p>
                </div>
                <div className="text-right">
                  <p className="font-medium">{order.price}</p>
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      order.status === 'delivered'
                        ? 'bg-success-100 text-success-800'
                        : order.status === 'shipped'
                        ? 'bg-primary-100 text-primary-800'
                        : 'bg-warning-100 text-warning-800'
                    }`}
                  >
                    {order.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
          
          {/* Empty state for demonstration */}
          {false && (
            <div className="flex flex-col items-center justify-center p-8 text-center">
              <PackageOpen className="h-12 w-12 text-neutral-300 mb-2" />
              <h4 className="text-lg font-medium text-neutral-900 mb-1">No orders yet</h4>
              <p className="text-neutral-500">
                When you place orders, they'll appear here for easy tracking.
              </p>
              <Link to="/shop" className="btn-primary mt-4">
                Start Shopping
              </Link>
            </div>
          )}
        </div>
        
        <div className="dashboard-card">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-medium text-neutral-900">Recommended for You</h3>
            <Link to="/shop" className="text-sm text-primary-600 hover:text-primary-700">
              View all
            </Link>
          </div>
          
          <div className="grid grid-cols-2 gap-3">
            {[
              { id: 1, name: 'Handcrafted Ceramic Vase', vendor: 'Pottery Paradise', price: '$85.00', image: 'https://images.pexels.com/photos/2162938/pexels-photo-2162938.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
              { id: 2, name: 'Wooden Serving Board', vendor: 'Wooden Wonders', price: '$49.00', image: 'https://images.pexels.com/photos/5702281/pexels-photo-5702281.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
              { id: 3, name: 'Hand-woven Wall Hanging', vendor: 'Textile Treasures', price: '$120.00', image: 'https://images.pexels.com/photos/6069552/pexels-photo-6069552.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
              { id: 4, name: 'Stained Glass Suncatcher', vendor: 'Glass Creations', price: '$65.00', image: 'https://images.pexels.com/photos/1329711/pexels-photo-1329711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
            ].map((product) => (
              <div key={product.id} className="bg-white rounded-lg border border-neutral-200 overflow-hidden hover:shadow-md transition-shadow">
                <div className="h-32 overflow-hidden">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-3">
                  <h4 className="font-medium text-sm truncate" title={product.name}>{product.name}</h4>
                  <p className="text-xs text-neutral-500">{product.vendor}</p>
                  <p className="text-sm font-medium mt-1">{product.price}</p>
                </div>
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
              to="/shop"
              className="bg-primary-50 p-4 rounded-lg text-center hover:bg-primary-100 transition-colors"
            >
              <ShoppingBag className="h-8 w-8 mx-auto text-primary-600 mb-2" />
              <p className="font-medium text-primary-900">Browse Products</p>
            </Link>
            
            <Link
              to="/customer/profile"
              className="bg-secondary-50 p-4 rounded-lg text-center hover:bg-secondary-100 transition-colors"
            >
              <User className="h-8 w-8 mx-auto text-secondary-700 mb-2" />
              <p className="font-medium text-secondary-900">Update Profile</p>
            </Link>
            
            <Link
              to="/customer/orders"
              className="bg-accent-50 p-4 rounded-lg text-center hover:bg-accent-100 transition-colors"
            >
              <PackageOpen className="h-8 w-8 mx-auto text-accent-600 mb-2" />
              <p className="font-medium text-accent-900">Track Orders</p>
            </Link>
            
            <Link
              to="/customer/customizations/new"
              className="bg-neutral-100 p-4 rounded-lg text-center hover:bg-neutral-200 transition-colors"
            >
              <MessageSquare className="h-8 w-8 mx-auto text-neutral-700 mb-2" />
              <p className="font-medium text-neutral-900">Request Custom</p>
            </Link>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default CustomerDashboardPage;