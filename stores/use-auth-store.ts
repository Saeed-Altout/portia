import { create } from "zustand";
import { getToken, getUser } from "@/lib/cookie";

const initialUser: IUser = {
  id: 0,
  first_name: "",
  last_name: "",
  email: "",
  referred_code: "",
};

interface AuthStore {
  isAuthenticated: boolean;
  setAuthenticated: (isAuthenticated: boolean) => void;

  user: IUser;
  setUser: (user: Partial<IUser>) => void;

  resetAuth: () => void;
}

export const useAuthStore = create<AuthStore>((set) => ({
  isAuthenticated: Boolean(getToken()),
  setAuthenticated: (isAuthenticated) =>
    set((state) => ({ ...state, isAuthenticated })),

  user: getUser() ?? initialUser,
  setUser: (user) =>
    set((state) => ({ ...state, user: { ...state.user, ...user } })),

  resetAuth: () => set({ isAuthenticated: false, user: initialUser }),
}));
