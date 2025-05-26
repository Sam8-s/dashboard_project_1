import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import Button from '../common/Button';
import FormField from '../common/FormField';
import { useAuth } from '../../context/AuthContext';

interface RegisterFormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const RegisterForm: React.FC = () => {
  const [role, setRole] = useState<'vendor' | 'customer'>('customer');
  const { register: registerUser, loading, error } = useAuth();
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<RegisterFormData>();
  
  const password = watch('password', '');
  
  const onSubmit = async (data: RegisterFormData) => {
    await registerUser(data.email, data.password, data.name, role);
  };
  
  return (
    <div className="card max-w-md w-full mx-auto">
      <h2 className="text-2xl font-serif font-semibold text-center mb-6">Create an Account</h2>
      
      {error && (
        <div className="bg-error-50 text-error-700 p-3 rounded-md mb-4 text-sm">
          {error}
        </div>
      )}
      
      <div className="flex border rounded-md overflow-hidden mb-6">
        <button
          type="button"
          className={`flex-1 py-2 text-center transition-all ${
            role === 'customer'
              ? 'bg-primary-500 text-white'
              : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
          }`}
          onClick={() => setRole('customer')}
        >
          Customer
        </button>
        <button
          type="button"
          className={`flex-1 py-2 text-center transition-all ${
            role === 'vendor'
              ? 'bg-primary-500 text-white'
              : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
          }`}
          onClick={() => setRole('vendor')}
        >
          Vendor
        </button>
      </div>
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <FormField<RegisterFormData>
          name="name"
          label="Full Name"
          placeholder="John Doe"
          register={register}
          options={{ required: 'Name is required' }}
          error={errors.name}
          required
          fullWidth
        />
        
        <FormField<RegisterFormData>
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
        
        <FormField<RegisterFormData>
          name="password"
          type="password"
          label="Password"
          placeholder="••••••••"
          register={register}
          options={{
            required: 'Password is required',
            minLength: {
              value: 6,
              message: 'Password must be at least 6 characters',
            },
          }}
          error={errors.password}
          required
          fullWidth
        />
        
        <FormField<RegisterFormData>
          name="confirmPassword"
          type="password"
          label="Confirm Password"
          placeholder="••••••••"
          register={register}
          options={{
            required: 'Please confirm your password',
            validate: value => value === password || 'Passwords do not match',
          }}
          error={errors.confirmPassword}
          required
          fullWidth
        />
        
        <div className="flex items-center mt-2">
          <input
            id="terms"
            name="terms"
            type="checkbox"
            className="h-4 w-4 rounded border-neutral-300 text-primary-600 focus:ring-primary-500"
            required
          />
          <label htmlFor="terms" className="ml-2 block text-sm text-neutral-700">
            I agree to the{' '}
            <Link to="#" className="text-primary-600 hover:underline">
              Terms of Service
            </Link>{' '}
            and{' '}
            <Link to="#" className="text-primary-600 hover:underline">
              Privacy Policy
            </Link>
          </label>
        </div>
        
        <Button
          type="submit"
          variant="primary"
          fullWidth
          isLoading={loading}
        >
          Register as {role === 'vendor' ? 'Vendor' : 'Customer'}
        </Button>
      </form>
      
      <div className="mt-6 text-center">
        <p className="text-sm text-neutral-600">
          Already have an account?{' '}
          <Link to="/login" className="text-primary-600 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterForm;