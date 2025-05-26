import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './router/ProtectedRoute';

// Public pages
import HomePage from './pages/HomePage';
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';

// Admin pages
import AdminDashboardPage from './pages/admin/AdminDashboardPage';
import LayoutManagerPage from './pages/admin/LayoutManagerPage';

// Vendor pages
import VendorDashboardPage from './pages/vendor/VendorDashboardPage';
import VendorProfilePage from './pages/vendor/VendorProfilePage';

// Customer pages
import CustomerDashboardPage from './pages/customer/CustomerDashboardPage';
import CustomerProfilePage from './pages/customer/CustomerProfilePage';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          
          {/* Admin routes */}
          <Route element={<ProtectedRoute allowedRoles={['admin']} />}>
            <Route path="/admin" element={<AdminDashboardPage />} />
            <Route path="/admin/layout" element={<LayoutManagerPage />} />
            {/* Add more admin routes as needed */}
          </Route>
          
          {/* Vendor routes */}
          <Route element={<ProtectedRoute allowedRoles={['vendor']} />}>
            <Route path="/vendor" element={<VendorDashboardPage />} />
            <Route path="/vendor/profile" element={<VendorProfilePage />} />
            {/* Add more vendor routes as needed */}
          </Route>
          
          {/* Customer routes */}
          <Route element={<ProtectedRoute allowedRoles={['customer']} />}>
            <Route path="/customer" element={<CustomerDashboardPage />} />
            <Route path="/customer/profile" element={<CustomerProfilePage />} />
            {/* Add more customer routes as needed */}
          </Route>
          
          {/* Fallback route */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;