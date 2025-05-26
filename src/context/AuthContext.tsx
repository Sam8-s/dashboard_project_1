import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthUser, mockUsers, saveAuthToStorage, getAuthFromStorage, delay } from '../lib/utils';

interface AuthContextType {
  user: AuthUser | null;
  loading: boolean;
  error: string | null;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string, name: string, role: 'vendor' | 'customer') => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Check for stored authentication on mount
    const storedUser = getAuthFromStorage();
    if (storedUser) {
      setUser(storedUser);
    }
    setLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    setLoading(true);
    setError(null);
    
    try {
      // Simulate API request delay
      await delay(1000);
      
      // In a real app, this would be an API call to verify credentials
      const foundUser = mockUsers.find(u => u.email === email);
      
      if (foundUser) {
        // In a real app, we would check password hash here
        setUser(foundUser);
        saveAuthToStorage(foundUser);
        
        // Redirect based on role
        if (foundUser.role === 'admin') {
          navigate('/admin');
        } else if (foundUser.role === 'vendor') {
          navigate('/vendor');
        } else {
          navigate('/customer');
        }
      } else {
        setError('Invalid email or password');
      }
    } catch (err) {
      setError('An error occurred during login');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const register = async (
    email: string, 
    password: string, 
    name: string, 
    role: 'vendor' | 'customer'
  ) => {
    setLoading(true);
    setError(null);
    
    try {
      // Simulate API request delay
      await delay(1000);
      
      // Check if user already exists
      const existingUser = mockUsers.find(u => u.email === email);
      
      if (existingUser) {
        setError('User with this email already exists');
        return;
      }
      
      // In a real app, this would create a user in the database
      const newUser: AuthUser = {
        id: `${mockUsers.length + 1}`,
        email,
        name,
        role,
      };
      
      // Update our mock data (this would be unnecessary in a real app)
      mockUsers.push(newUser);
      
      // Set the user in state and storage
      setUser(newUser);
      saveAuthToStorage(newUser);
      
      // Redirect based on role
      if (role === 'vendor') {
        navigate('/vendor');
      } else {
        navigate('/customer');
      }
    } catch (err) {
      setError('An error occurred during registration');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    saveAuthToStorage(null);
    navigate('/login');
  };

  const value = {
    user,
    loading,
    error,
    login,
    register,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}