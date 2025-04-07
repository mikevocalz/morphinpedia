import { create } from 'zustand';

type TabStore = {
  activeTab: 'login' | 'register';
  setActiveTab: (tab: 'login' | 'register') => void;
};

export const useTabStore = create<TabStore>((set) => ({
  activeTab: 'register',
  setActiveTab: (tab) => set({ activeTab: tab }),
}));
