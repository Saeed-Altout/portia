import { cookies } from "@/lib/cookies";
import {
  AUTH_COOKIE_INFO_MAIL,
  AUTH_COOKIE_REFRESH_TOKEN,
  AUTH_COOKIE_SESSION,
  AUTH_COOKIE_TOKEN,
} from "@/constants";

interface CookieOptions {
  days?: number;
  path?: string;
  secure?: boolean;
  sameSite?: "Strict" | "Lax" | "None";
}

export const setAccessToken = (
  accessToken: string,
  options: CookieOptions = {}
): void => {
  cookies.setCookie(AUTH_COOKIE_TOKEN, accessToken, options);
};

export const getAccessToken = (): string | null => {
  return cookies.getCookie<string>(AUTH_COOKIE_TOKEN);
};

export const removeAccessToken = (): void => {
  cookies.removeCookie(AUTH_COOKIE_TOKEN);
};

export const setRefreshToken = (
  refreshToken: string,
  options: CookieOptions = {}
): void => {
  cookies.setCookie(AUTH_COOKIE_REFRESH_TOKEN, refreshToken, options);
};

export const getRefreshToken = (): string | null => {
  return cookies.getCookie<string>(AUTH_COOKIE_REFRESH_TOKEN);
};

export const removeRefreshToken = (): void => {
  cookies.removeCookie(AUTH_COOKIE_REFRESH_TOKEN);
};

export const setSession = (session: any, options: CookieOptions = {}): void => {
  cookies.setCookie(AUTH_COOKIE_SESSION, session, options);
};

export const getSession = (): any | null => {
  return cookies.getCookie<any>(AUTH_COOKIE_SESSION);
};

export const removeSession = (): void => {
  cookies.removeCookie(AUTH_COOKIE_SESSION);
};

export const setEmail = (email: string, options: CookieOptions = {}): void => {
  cookies.setCookie(AUTH_COOKIE_INFO_MAIL, email, options);
};

export const getEmail = (): string | null => {
  return cookies.getCookie<string>(AUTH_COOKIE_INFO_MAIL);
};

export const removeEmail = (): void => {
  cookies.removeCookie(AUTH_COOKIE_INFO_MAIL);
};
