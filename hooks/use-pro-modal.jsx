import { create } from "zustand";

const useProModalStore = (set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
});

export const useProModal = create(useProModalStore);
