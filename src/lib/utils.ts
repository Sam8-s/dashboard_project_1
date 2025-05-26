import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combines multiple class names using clsx and tailwind-merge
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Simulates API request delay
 */
export function delay(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Mock Auth Service (to be replaced with a real one)
 */
export const AUTH_STORAGE_KEY = 'artisans_alley_auth';

interface AuthUser {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'vendor' | 'customer';
}

export const mockUsers: AuthUser[] = [
  {
    id: '1',
    email: 'admin@artisansalley.com',
    name: 'Admin User',
    role: 'admin',
  },
  {
    id: '2',
    email: 'vendor@artisansalley.com',
    name: 'Vendor User',
    role: 'vendor',
  },
  {
    id: '3',
    email: 'customer@artisansalley.com',
    name: 'Customer User',
    role: 'customer',
  },
];

export function saveAuthToStorage(user: AuthUser | null): void {
  if (user) {
    localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(user));
  } else {
    localStorage.removeItem(AUTH_STORAGE_KEY);
  }
}

export function getAuthFromStorage(): AuthUser | null {
  const stored = localStorage.getItem(AUTH_STORAGE_KEY);
  if (stored) {
    try {
      return JSON.parse(stored) as AuthUser;
    } catch (error) {
      console.error('Failed to parse auth from storage', error);
      return null;
    }
  }
  return null;
}

export type { AuthUser };