import { create } from "zustand";
import { getToken, getUser } from "@/utils/cookie";

interface User {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  referred_code: string;
}

const initialUser: User = {
  id: 0,
  first_name: "",
  last_name: "",
  email: "",
  referred_code: "",
};

interface AuthStore {
  isAuthenticated: boolean;
  setAuthenticated: (isAuthenticated: boolean) => void;

  user: User;
  setUser: (user: User) => void;
}

export const useAuthStore = create<AuthStore>((set) => ({
  isAuthenticated: getToken() ? true : false,
  setAuthenticated: (isAuthenticated) => set({ isAuthenticated }),
  user: getUser() ?? initialUser,
  setUser: (user) => set({ user }),
}));
