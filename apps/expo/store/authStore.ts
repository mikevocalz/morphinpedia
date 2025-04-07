import { create } from 'zustand';

import { storage } from '../lib/mmkv';

interface User {
  id: string;
  email: string;
  displayName?: string;
  photoURL?: string;
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
  setUser: (user: User | null) => Promise<void>;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  signUp: (email: string, password: string) => Promise<void>;
}

// Helper functions for AsyncStorage
const getStoredUser = async () => {
  const userString = await storage.getItem('user');
  return userString ? JSON.parse(userString) : null;
};

const setStoredUser = async (user: User | null) => {
  if (user) {
    await storage.setItem('user', JSON.stringify(user));
  } else {
    await storage.removeItem('user');
  }
};

// Initialize store with empty values
export const useAuthStore = create<AuthState>()((set) => ({
  user: null,
  isAuthenticated: false,
  loading: true, // Start with loading true
  error: null,

  setUser: async (user) => {
    await setStoredUser(user);
    set({ user, isAuthenticated: !!user });
  },

  signIn: async (email: string, password: string) => {
    set({ loading: true, error: null });
    try {
      // Add your authentication logic here
      // Example:
      // const response = await authService.signIn(email, password)
      // await setStoredUser(response.user)
      // set({ user: response.user, isAuthenticated: true })
      throw new Error('Authentication not implemented');
    } catch (error) {
      set({ error: error instanceof Error ? error.message : 'Sign in failed' });
      throw error;
    } finally {
      set({ loading: false });
    }
  },

  signUp: async (email: string, password: string) => {
    set({ loading: true, error: null });
    try {
      // Add your sign up logic here
      // Example:
      // const response = await authService.signUp(email, password)
      // await setStoredUser(response.user)
      // set({ user: response.user, isAuthenticated: true })
      throw new Error('Sign up not implemented');
    } catch (error) {
      set({ error: error instanceof Error ? error.message : 'Sign up failed' });
      throw error;
    } finally {
      set({ loading: false });
    }
  },

  signOut: async () => {
    set({ loading: true, error: null });
    try {
      await setStoredUser(null);
      set({ user: null, isAuthenticated: false });
    } catch (error) {
      set({ error: error instanceof Error ? error.message : 'Sign out failed' });
      throw error;
    } finally {
      set({ loading: false });
    }
  },
}));

// Initialize the auth state from storage
getStoredUser().then((user) => {
  useAuthStore.setState({ user, isAuthenticated: !!user, loading: false });
});
