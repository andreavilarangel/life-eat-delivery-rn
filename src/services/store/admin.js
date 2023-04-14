import create from 'zustand'

export const adminStore = create((set, get) => ({
  date: null,
  setDate: date => set({ date }),
}))
