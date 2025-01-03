import {create} from 'zustand';

interface Store {
  isSideMenuOpen: boolean;
  openSideMenu: () => void;
  closeSideMenu: () => void;
}

export const useUIStore = create<Store>()(set => ({
  isSideMenuOpen: false,
  openSideMenu: () => set({isSideMenuOpen: true}),
  closeSideMenu: () => set({isSideMenuOpen: false}),
}));
