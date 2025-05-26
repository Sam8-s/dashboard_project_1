import React from 'react';
import { Navigate } from 'react-router-dom';
import PublicLayout from '../../components/layout/PublicLayout';
import RegisterForm from '../../components/auth/RegisterForm';
import { useAuth } from '../../context/AuthContext';

const RegisterPage: React.FC = () => {
  const { user } = useAuth();

  // Redirect if already logged in
  if (user) {
    if (user.role === 'admin') {
      return <Navigate to="/admin" replace />;
    } else if (user.role === 'vendor') {
      return <Navigate to="/vendor" replace />;
    } else if (user.role === 'customer') {
      return <Navigate to="/customer" replace />;
    }
  }

  return (
    <PublicLayout className="flex flex-col justify-center bg-neutral-50 py-12">
      <div className="container-custom">
        <RegisterForm />
      </div>
    </PublicLayout>
  );
};

export default RegisterPage;