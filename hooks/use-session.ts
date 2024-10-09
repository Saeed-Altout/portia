import { create } from "zustand";

export interface Session {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  code: string;
}

interface UseSessionProps {
  session: Session | null;
  isLoading: boolean;
  setSession: (session: Session | null) => void;
  setIsLoading: (isLoading: boolean) => void;
}

export const useSession = create<UseSessionProps>((set) => ({
  session: null,
  isLoading: true,
  setSession: (session: Session | null) => set({ session, isLoading: false }),
  setIsLoading: (isLoading: boolean) => set({ isLoading }),
}));
