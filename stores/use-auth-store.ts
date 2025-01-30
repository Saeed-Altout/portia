import { create } from "zustand";
import { getToken, getUser } from "@/lib/cookie";

const initialUser: IUser = {
  id: 0,
  first_name: "",
  last_name: "",
  email: "",
  referred_code: "",
  user_balance: "",
  edit_profile: false,
  notification_enable: false,
};

interface AuthStore {
  isAuthenticated: boolean;
  setAuthenticated: (isAuthenticated: boolean) => void;

  user: IUser;
  setUser: (user: IUser) => void;

  resetAuth: () => void;
}

export const useAuthStore = create<AuthStore>((set) => ({
  isAuthenticated: Boolean(getToken()),
  user: getUser() ?? initialUser,

  setAuthenticated: (isAuthenticated) =>
    set((state) => ({ ...state, isAuthenticated })),

  setUser: (user) =>
    set((state) => ({ ...state, user: { ...state.user, ...user } })),

  resetAuth: () => set({ isAuthenticated: false, user: initialUser }),
}));
