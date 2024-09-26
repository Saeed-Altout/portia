import { AxiosResponse } from "axios";

import { _axios } from "@/lib/axios";

const loginEndpoint = "/auth/login";
const logoutEndpoint = "/auth/logout";
const registerEndpoint = "/auth/register";
const loginWithGoogleEndpoint = "/auth/google/redirect";

export const authService = {
  async register(user: RegisterBody): Promise<RegisterResponse> {
    try {
      const response: AxiosResponse<RegisterResponse> =
        await _axios.post<RegisterResponse>(registerEndpoint, user);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  async login(user: LoginBody): Promise<LoginResponse> {
    try {
      const response: AxiosResponse<LoginResponse> =
        await _axios.post<LoginResponse>(loginEndpoint, user);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  async loginWithGoogle(): Promise<void> {
    try {
      await _axios.get(loginWithGoogleEndpoint);
    } catch (error) {
      throw error;
    }
  },

  async logout(): Promise<void> {
    try {
      await _axios.get(logoutEndpoint);
    } catch (error) {
      throw error;
    }
  },
};
