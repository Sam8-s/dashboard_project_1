import { AuthUser } from './utils';

export interface VendorProfile {
  id: string;
  userId: string;
  shopName: string;
  description: string;
  contactEmail: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  website?: string;
  socialMedia: {
    instagram?: string;
    facebook?: string;
    twitter?: string;
    pinterest?: string;
  };
  specialties: string[];
  createdAt: string;
  updatedAt: string;
}

export interface CustomerProfile {
  id: string;
  userId: string;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  address?: string;
  city?: string;
  state?: string;
  zipCode?: string;
  country?: string;
  preferences?: string[];
  createdAt: string;
  updatedAt: string;
}

export interface LayoutSection {
  id: string;
  name: string;
  type: 'banner' | 'featured' | 'category' | 'testimonial' | 'about' | 'newsletter';
  active: boolean;
  order: number;
  settings: Record<string, any>;
}

// Mock data for vendor profile
export const mockVendorProfile: VendorProfile = {
  id: 'v1',
  userId: '2',
  shopName: 'Crafty Creations',
  description: 'Handmade pottery and ceramic items for your home.',
  contactEmail: 'vendor@artisansalley.com',
  phone: '555-123-4567',
  address: '123 Artisan St',
  city: 'Craftsville',
  state: 'CA',
  zipCode: '90210',
  country: 'USA',
  website: 'https://craftycreations.com',
  socialMedia: {
    instagram: '@crafty_creations',
    facebook: 'CraftyCreations',
    pinterest: 'CraftyCreations',
  },
  specialties: ['Pottery', 'Ceramics', 'Home Decor'],
  createdAt: '2023-01-15T12:00:00Z',
  updatedAt: '2023-06-20T15:30:00Z',
};

// Mock data for customer profile
export const mockCustomerProfile: CustomerProfile = {
  id: 'c1',
  userId: '3',
  firstName: 'John',
  lastName: 'Doe',
  email: 'customer@artisansalley.com',
  phone: '555-987-6543',
  address: '456 Buyer Lane',
  city: 'Shopville',
  state: 'NY',
  zipCode: '10001',
  country: 'USA',
  preferences: ['Pottery', 'Jewelry', 'Woodworking'],
  createdAt: '2023-02-10T09:15:00Z',
  updatedAt: '2023-05-05T14:20:00Z',
};

// Mock data for layout sections
export const mockLayoutSections: LayoutSection[] = [
  {
    id: 'ls1',
    name: 'Hero Banner',
    type: 'banner',
    active: true,
    order: 1,
    settings: {
      title: 'Discover Unique Handcrafted Treasures',
      subtitle: 'Support independent artisans and find one-of-a-kind pieces for your home',
      buttonText: 'Shop Now',
      buttonLink: '/shop',
      backgroundImage: 'https://images.pexels.com/photos/1106442/pexels-photo-1106442.jpeg',
      textColor: 'light',
    },
  },
  {
    id: 'ls2',
    name: 'Featured Products',
    type: 'featured',
    active: true,
    order: 2,
    settings: {
      title: 'Popular This Week',
      itemCount: 4,
      showPrices: true,
      showRatings: true,
    },
  },
  {
    id: 'ls3',
    name: 'Categories Showcase',
    type: 'category',
    active: true,
    order: 3,
    settings: {
      title: 'Shop By Category',
      layout: 'grid',
      categories: ['Pottery', 'Jewelry', 'Woodworking', 'Textiles'],
    },
  },
  {
    id: 'ls4',
    name: 'Customer Testimonials',
    type: 'testimonial',
    active: true,
    order: 4,
    settings: {
      title: 'What Our Customers Say',
      testimonialCount: 3,
      showImages: true,
      autoRotate: true,
    },
  },
  {
    id: 'ls5',
    name: 'About Section',
    type: 'about',
    active: true,
    order: 5,
    settings: {
      title: 'Our Story',
      content: 'Artisans Alley was founded with a passion for supporting independent craftspeople and connecting them with customers who value handmade quality.',
      image: 'https://images.pexels.com/photos/3184183/pexels-photo-3184183.jpeg',
      imagePosition: 'left',
    },
  },
  {
    id: 'ls6',
    name: 'Newsletter Signup',
    type: 'newsletter',
    active: true,
    order: 6,
    settings: {
      title: 'Stay Updated',
      subtitle: 'Subscribe to our newsletter for the latest products and artisan stories',
      buttonText: 'Subscribe',
      backgroundColor: '#F9F7F3',
    },
  },
];

// Function to get profile by user
export function getProfileByUser(user: AuthUser): VendorProfile | CustomerProfile | null {
  if (user.role === 'vendor') {
    return mockVendorProfile;
  } else if (user.role === 'customer') {
    return mockCustomerProfile;
  }
  return null;
}