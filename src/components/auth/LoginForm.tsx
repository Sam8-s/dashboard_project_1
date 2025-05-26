import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import Button from '../common/Button';
import FormField from '../common/FormField';
import { useAuth } from '../../context/AuthContext';

interface LoginFormData {
  email: string;
  password: string;
}

const LoginForm: React.FC = () => {
  const { login, loading, error } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>();

  const onSubmit = async (data: LoginFormData) => {
    await login(data.email, data.password);
  };

  return (
    <div className="card max-w-md w-full mx-auto">
      <h2 className="text-2xl font-serif font-semibold text-center mb-6">Login to Your Account</h2>
      
      {error && (
        <div className="bg-error-50 text-error-700 p-3 rounded-md mb-4 text-sm">
          {error}
        </div>
      )}
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <FormField<LoginFormData>
          name="email"
          type="email"
          label="Email"
          placeholder="your@email.com"
          register={register}
          options={{
            required: 'Email is required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Invalid email address',
            },
          }}
          error={errors.email}
          required
          fullWidth
        />
        
        <FormField<LoginFormData>
          name="password"
          type="password"
          label="Password"
          placeholder="••••••••"
          register={register}
          options={{ required: 'Password is required' }}
          error={errors.password}
          required
          fullWidth
        />
        
        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              className="h-4 w-4 rounded border-neutral-300 text-primary-600 focus:ring-primary-500"
            />
            <label htmlFor="remember-me" className="ml-2 block text-sm text-neutral-700">
              Remember me
            </label>
          </div>
          
          <div className="text-sm">
            <Link to="#" className="text-primary-600 hover:text-primary-500">
              Forgot password?
            </Link>
          </div>
        </div>
        
        <Button
          type="submit"
          variant="primary"
          fullWidth
          isLoading={loading}
        >
          Login
        </Button>
      </form>
      
      <div className="mt-6 text-center">
        <p className="text-sm text-neutral-600">
          Don't have an account?{' '}
          <Link to="/register" className="text-primary-600 hover:underline">
            Register now
          </Link>
        </p>
      </div>
      
      {/* Demo accounts for testing */}
      <div className="mt-8 border-t border-neutral-200 pt-4">
        <p className="text-sm text-neutral-500 mb-2">Demo Accounts:</p>
        <div className="space-y-1 text-xs text-neutral-600">
          <p>Admin: admin@artisansalley.com</p>
          <p>Vendor: vendor@artisansalley.com</p>
          <p>Customer: customer@artisansalley.com</p>
          <p className="italic mt-1">Use any password to login</p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;