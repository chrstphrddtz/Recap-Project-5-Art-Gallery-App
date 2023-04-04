import { create } from 'zustand'
import { State } from 'zustand'


export const useArtStore = create((set) => ({
  art: [],


  // increasePopulation: () => set((state) => ({ art: state.art + 1 })),
  // removeAllArt: () => set({ art: 0 }),
}))
