import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from '../../lib/utils';

interface PublicLayoutProps {
  children: ReactNode;
  className?: string;
}

const PublicLayout: React.FC<PublicLayoutProps> = ({ children, className }) => {
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white shadow-sm">
        <div className="container-custom py-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-primary-500 font-serif text-2xl font-bold">Artisans Alley</span>
            </Link>
            
            {/* Desktop navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link to="/login" className="text-neutral-700 hover:text-primary-600 transition-colors">
                Login
              </Link>
              <Link to="/register" className="btn-primary">
                Register
              </Link>
            </nav>
            
            {/* Mobile menu button */}
            <button 
              className="md:hidden text-neutral-700 hover:text-primary-600 transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          
          {/* Mobile navigation */}
          {menuOpen && (
            <nav className="md:hidden py-4 animate-enter">
              <div className="flex flex-col space-y-4">
                <Link 
                  to="/login" 
                  className="text-neutral-700 hover:text-primary-600 transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  Login
                </Link>
                <Link 
                  to="/register" 
                  className="btn-primary inline-block text-center"
                  onClick={() => setMenuOpen(false)}
                >
                  Register
                </Link>
              </div>
            </nav>
          )}
        </div>
      </header>
      
      <main className={cn("flex-grow", className)}>
        {children}
      </main>
      
      <footer className="bg-neutral-900 text-white py-8">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-lg font-serif mb-4">Artisans Alley</h4>
              <p className="text-neutral-300">Connecting artisans with customers who appreciate handcrafted quality.</p>
            </div>
            <div>
              <h4 className="text-lg font-serif mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link to="/login" className="text-neutral-300 hover:text-white transition-colors">Login</Link></li>
                <li><Link to="/register" className="text-neutral-300 hover:text-white transition-colors">Register</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-serif mb-4">Contact</h4>
              <p className="text-neutral-300">info@artisansalley.com</p>
              <p className="text-neutral-300">123 Crafters Lane, Artville</p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-neutral-800 text-center text-neutral-400">
            <p>© {new Date().getFullYear()} Artisans Alley. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PublicLayout;