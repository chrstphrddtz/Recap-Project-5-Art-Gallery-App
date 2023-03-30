import { create } from 'zustand'

const url = "https://example-apis.vercel.app/api/art";


const useArtPieceStore = create((set) => ({



  bears: 0,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
}))