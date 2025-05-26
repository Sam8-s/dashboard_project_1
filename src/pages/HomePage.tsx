import React from 'react';
import { Link } from 'react-router-dom';
import PublicLayout from '../components/layout/PublicLayout';
import { Palette, ShoppingBag, User } from 'lucide-react';

const HomePage: React.FC = () => {
  return (
    <PublicLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-700 text-white">
        <div className="container-custom py-16 md:py-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 leading-tight">
              Discover Unique Handcrafted Treasures
            </h1>
            <p className="text-lg md:text-xl opacity-90 mb-8">
              Welcome to Artisans Alley, a marketplace connecting skilled artisans with customers who appreciate handmade quality.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/register" className="btn bg-white text-primary-700 hover:bg-neutral-100 font-medium px-8 py-3">
                Sign Up Now
              </Link>
              <Link to="/login" className="btn bg-transparent border border-white text-white hover:bg-white/10 font-medium px-8 py-3">
                Login
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* User Types Section */}
      <section className="py-16 bg-neutral-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-center mb-12">
            Join Our Community
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Admin Card */}
            <div className="dashboard-card transition-transform hover:translate-y-[-5px] animate-enter">
              <div className="flex justify-center mb-4">
                <div className="p-4 rounded-full bg-primary-100 text-primary-600">
                  <Palette size={32} />
                </div>
              </div>
              <h3 className="text-xl font-serif font-semibold text-center mb-3">Admin</h3>
              <p className="text-neutral-600 text-center mb-6">
                Manage the marketplace, oversee vendors and customers, and customize the site experience.
              </p>
              <div className="flex justify-center">
                <Link to="/login" className="btn-primary w-full text-center">
                  Admin Login
                </Link>
              </div>
            </div>
            
            {/* Vendor Card */}
            <div className="dashboard-card transition-transform hover:translate-y-[-5px] animate-enter" style={{ animationDelay: '100ms' }}>
              <div className="flex justify-center mb-4">
                <div className="p-4 rounded-full bg-secondary-100 text-secondary-700">
                  <ShoppingBag size={32} />
                </div>
              </div>
              <h3 className="text-xl font-serif font-semibold text-center mb-3">Vendor</h3>
              <p className="text-neutral-600 text-center mb-6">
                Showcase and sell your handcrafted products to a community of enthusiastic buyers.
              </p>
              <div className="flex justify-center">
                <Link to="/register" className="btn-secondary w-full text-center">
                  Become a Vendor
                </Link>
              </div>
            </div>
            
            {/* Customer Card */}
            <div className="dashboard-card transition-transform hover:translate-y-[-5px] animate-enter" style={{ animationDelay: '200ms' }}>
              <div className="flex justify-center mb-4">
                <div className="p-4 rounded-full bg-accent-100 text-accent-600">
                  <User size={32} />
                </div>
              </div>
              <h3 className="text-xl font-serif font-semibold text-center mb-3">Customer</h3>
              <p className="text-neutral-600 text-center mb-6">
                Discover unique handcrafted items and connect directly with talented artisans.
              </p>
              <div className="flex justify-center">
                <Link to="/register" className="btn-accent w-full text-center">
                  Join as Customer
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PublicLayout>
  );
};

export default HomePage;