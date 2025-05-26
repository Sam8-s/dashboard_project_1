import React from 'react';
import { useForm } from 'react-hook-form';
import Button from '../common/Button';
import FormField from '../common/FormField';
import { CustomerProfile, mockCustomerProfile } from '../../lib/mockData';

const CustomerProfileForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty },
  } = useForm<CustomerProfile>({
    defaultValues: mockCustomerProfile,
  });

  const onSubmit = (data: CustomerProfile) => {
    // This would save to an API in a real app
    console.log('Updated profile:', data);
    alert('Profile updated successfully!');
  };

  return (
    <div className="bg-white rounded-lg shadow-soft p-6">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <h3 className="text-lg font-medium text-neutral-900 mb-4">Personal Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField<CustomerProfile>
              name="firstName"
              label="First Name"
              register={register}
              options={{ required: 'First name is required' }}
              error={errors.firstName}
              required
              fullWidth
            />
            
            <FormField<CustomerProfile>
              name="lastName"
              label="Last Name"
              register={register}
              options={{ required: 'Last name is required' }}
              error={errors.lastName}
              required
              fullWidth
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <FormField<CustomerProfile>
              name="email"
              type="email"
              label="Email"
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
            
            <FormField<CustomerProfile>
              name="phone"
              label="Phone Number"
              register={register}
              fullWidth
            />
          </div>
        </div>
        
        <div className="border-t border-neutral-200 pt-6">
          <h3 className="text-lg font-medium text-neutral-900 mb-4">Shipping Address</h3>
          <div className="grid grid-cols-1 gap-4">
            <FormField<CustomerProfile>
              name="address"
              label="Street Address"
              register={register}
              fullWidth
            />
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
            <FormField<CustomerProfile>
              name="city"
              label="City"
              register={register}
              fullWidth
            />
            
            <FormField<CustomerProfile>
              name="state"
              label="State/Province"
              register={register}
              fullWidth
            />
            
            <FormField<CustomerProfile>
              name="zipCode"
              label="ZIP / Postal Code"
              register={register}
              fullWidth
            />
            
            <FormField<CustomerProfile>
              name="country"
              label="Country"
              register={register}
              fullWidth
            />
          </div>
        </div>
        
        <div className="border-t border-neutral-200 pt-6">
          <h3 className="text-lg font-medium text-neutral-900 mb-4">Preferences</h3>
          <p className="text-sm text-neutral-500 mb-3">
            Select categories you're interested in to receive personalized recommendations:
          </p>
          
          <div className="flex flex-wrap gap-2">
            {['Pottery', 'Ceramics', 'Jewelry', 'Woodworking', 'Textiles', 'Leather', 'Paper', 'Glass', 'Metal', 'Home Decor'].map((preference) => (
              <label key={preference} className="inline-flex items-center bg-neutral-50 px-3 py-1.5 rounded-md border border-neutral-200 cursor-pointer hover:bg-neutral-100 transition-colors">
                <input
                  type="checkbox"
                  value={preference}
                  className="mr-2 h-4 w-4 rounded border-neutral-300 text-primary-600 focus:ring-primary-500"
                  {...register('preferences')}
                />
                {preference}
              </label>
            ))}
          </div>
        </div>
        
        <div className="flex justify-end">
          <Button 
            type="submit" 
            variant="primary"
            disabled={!isDirty}
          >
            Save Changes
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CustomerProfileForm;