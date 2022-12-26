import create from 'zustand'

export const authStore = create((set, get) => ({
  navigation: null,
  navigationContainer: 'auth',
  user: null,
  token: null,

  setUser: user => set({ user }),
  setNavigationContainer: navigationContainer => set({ navigationContainer }),
  setNavigation: navigation => set({ navigation }),
}))
