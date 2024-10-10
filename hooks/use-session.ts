import { create } from "zustand";

interface UseSessionProps {
  session: UserProfile | null;
  token: string | null;
  isLoading: boolean;
  setSession: (session: UserProfile | null) => void;
  setToken: (token: string | null) => void;
  setIsLoading: (isLoading: boolean) => void;
}

export const useSession = create<UseSessionProps>((set) => ({
  session: null,
  isLoading: true,
  token: null,
  setSession: (session: UserProfile | null) =>
    set({ session, isLoading: false }),
  setIsLoading: (isLoading: boolean) => set({ isLoading }),
  setToken: (token: string | null) => set({ token }),
}));
