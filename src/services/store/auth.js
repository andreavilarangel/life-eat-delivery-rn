import create from 'zustand'

export const authStore = create((set, get) => ({
  navigation: null,
  navigationContainer: 'auth',
  user: null,
  setUser: user => set({ user }),
  token: null,

  setNavigationContainer: navigationContainer => set({ navigationContainer }),
  setNavigation: navigation => set({ navigation }),
}))
