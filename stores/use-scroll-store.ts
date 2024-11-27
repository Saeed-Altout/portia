import { create } from "zustand";

interface ScrollStore {
  sectionRef: React.RefObject<HTMLElement> | null;
  setSectionRef: (ref: React.RefObject<HTMLElement>) => void;
  scrollToSection: () => void;
}

export const useScrollStore = create<ScrollStore>((set, get) => ({
  sectionRef: null,
  setSectionRef: (ref) => set({ sectionRef: ref }),
  scrollToSection: () => {
    const sectionRef = get().sectionRef;
    sectionRef?.current?.scrollIntoView({ behavior: "smooth" });
  },
}));
