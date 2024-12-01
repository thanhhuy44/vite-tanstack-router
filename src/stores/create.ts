import { create } from "zustand";

interface State {
  count: number;
}

export const useCountStore = create((set) => ({
  count: 0,
  increasePopulation: () => set((state: State) => ({ c: state.count + 1 })),
  removeAllBears: () => set({ bears: 0 }),
}));
