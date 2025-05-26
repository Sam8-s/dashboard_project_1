import React from 'react';
import { useForm } from 'react-hook-form';
import Button from '../common/Button';
import FormField from '../common/FormField';
import { VendorProfile, mockVendorProfile } from '../../lib/mockData';

const VendorProfileForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty },
  } = useForm<VendorProfile>({
    defaultValues: mockVendorProfile,
  });

  const onSubmit = (data: VendorProfile) => {
    // This would save to an API in a real app
    console.log('Updated profile:', data);
    alert('Profile updated successfully!');
  };

  return (
    <div className="bg-white rounded-lg shadow-soft p-6">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <h3 className="text-lg font-medium text-neutral-900 mb-4">Shop Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField<VendorProfile>
              name="shopName"
              label="Shop Name"
              register={register}
              options={{ required: 'Shop name is required' }}
              error={errors.shopName}
              required
              fullWidth
            />
            
            <FormField<VendorProfile>
              name="contactEmail"
              type="email"
              label="Contact Email"
              register={register}
              options={{
                required: 'Contact email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid email address',
                },
              }}
              error={errors.contactEmail}
              required
              fullWidth
            />
          </div>
          
          <div className="mt-4">
            <label className="block text-sm font-medium text-neutral-700 mb-1">
              Shop Description *
            </label>
            <textarea
              {...register('description', { required: 'Description is required' })}
              rows={4}
              className={`w-full px-4 py-2 rounded-md border ${
                errors.description ? 'border-error-500 focus:ring-error-500' : 'border-neutral-200 focus:ring-primary-300'
              } focus:outline-none focus:ring-2 focus:border-transparent transition duration-200`}
            />
            {errors.description && (
              <p className="error-message">{errors.description.message}</p>
            )}
          </div>
          
          <div className="mt-4">
            <label className="block text-sm font-medium text-neutral-700 mb-1">
              Specialties
            </label>
            <div className="flex flex-wrap gap-2">
              {['Pottery', 'Ceramics', 'Jewelry', 'Woodworking', 'Textiles', 'Leather', 'Paper', 'Glass', 'Metal', 'Home Decor'].map((specialty) => (
                <label key={specialty} className="inline-flex items-center bg-neutral-50 px-3 py-1.5 rounded-md border border-neutral-200 cursor-pointer hover:bg-neutral-100 transition-colors">
                  <input
                    type="checkbox"
                    value={specialty}
                    className="mr-2 h-4 w-4 rounded border-neutral-300 text-primary-600 focus:ring-primary-500"
                    {...register('specialties')}
                  />
                  {specialty}
                </label>
              ))}
            </div>
          </div>
        </div>
        
        <div className="border-t border-neutral-200 pt-6">
          <h3 className="text-lg font-medium text-neutral-900 mb-4">Contact Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField<VendorProfile>
              name="phone"
              label="Phone Number"
              register={register}
              options={{ required: 'Phone number is required' }}
              error={errors.phone}
              required
              fullWidth
            />
            
            <FormField<VendorProfile>
              name="website"
              label="Website"
              placeholder="https://www.example.com"
              register={register}
              fullWidth
            />
          </div>
        </div>
        
        <div className="border-t border-neutral-200 pt-6">
          <h3 className="text-lg font-medium text-neutral-900 mb-4">Address</h3>
          <div className="grid grid-cols-1 gap-4">
            <FormField<VendorProfile>
              name="address"
              label="Street Address"
              register={register}
              options={{ required: 'Address is required' }}
              error={errors.address}
              required
              fullWidth
            />
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
            <FormField<VendorProfile>
              name="city"
              label="City"
              register={register}
              options={{ required: 'City is required' }}
              error={errors.city}
              required
              fullWidth
            />
            
            <FormField<VendorProfile>
              name="state"
              label="State/Province"
              register={register}
              options={{ required: 'State is required' }}
              error={errors.state}
              required
              fullWidth
            />
            
            <FormField<VendorProfile>
              name="zipCode"
              label="ZIP / Postal Code"
              register={register}
              options={{ required: 'ZIP code is required' }}
              error={errors.zipCode}
              required
              fullWidth
            />
            
            <FormField<VendorProfile>
              name="country"
              label="Country"
              register={register}
              options={{ required: 'Country is required' }}
              error={errors.country}
              required
              fullWidth
            />
          </div>
        </div>
        
        <div className="border-t border-neutral-200 pt-6">
          <h3 className="text-lg font-medium text-neutral-900 mb-4">Social Media</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField<VendorProfile>
              name="socialMedia.instagram"
              label="Instagram"
              placeholder="@yourusername"
              register={register}
              fullWidth
            />
            
            <FormField<VendorProfile>
              name="socialMedia.facebook"
              label="Facebook"
              placeholder="yourusername"
              register={register}
              fullWidth
            />
            
            <FormField<VendorProfile>
              name="socialMedia.twitter"
              label="Twitter"
              placeholder="@yourusername"
              register={register}
              fullWidth
            />
            
            <FormField<VendorProfile>
              name="socialMedia.pinterest"
              label="Pinterest"
              placeholder="yourusername"
              register={register}
              fullWidth
            />
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

export default VendorProfileForm;