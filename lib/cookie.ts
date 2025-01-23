import Cookies from "js-cookie";
import { EMAIL_KEY, TOKEN_KEY, USER_KEY } from "@/config/constants";

const initialUser: IUser = {
  id: 0,
  first_name: "",
  last_name: "",
  email: "",
  referred_code: "",
  user_balance: "",
  edit_profile: false,
};

export const setUser = (user: User, options?: any) => {
  Cookies.set(USER_KEY, JSON.stringify(user), {
    expires: 10,
    secure: process.env.NODE_ENV === "production",
    sameSite: "Strict",
    ...options,
  });
};
export const removeUser = () => {
  Cookies.remove(USER_KEY);
};

export const getUser = () => {
  const user = Cookies.get(USER_KEY);
  return user ? JSON.parse(user) : initialUser;
};

export const setToken = (token: string, options?: any) => {
  Cookies.set(TOKEN_KEY, token, {
    expires: 10,
    secure: process.env.NODE_ENV === "production",
    sameSite: "Strict",
    ...options,
  });
};

export const getToken = () => {
  return Cookies.get(TOKEN_KEY) ?? null;
};

export const removeToken = () => {
  Cookies.remove(TOKEN_KEY);
};

export const setEmail = (email: string, options?: any) => {
  Cookies.set(EMAIL_KEY, email, {
    expires: 10,
    secure: process.env.NODE_ENV === "production",
    sameSite: "Strict",
    ...options,
  });
};

export const getEmail = () => {
  return Cookies.get(EMAIL_KEY) ?? null;
};

export const removeEmail = () => {
  Cookies.remove(EMAIL_KEY);
};

export const clear = () => {
  removeUser();
  removeToken();
  removeEmail();
};
