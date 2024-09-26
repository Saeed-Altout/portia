import { AxiosResponse } from "axios";

import { _axios } from "@/lib/axios";

export const authService = {
  async register(user: RegisterBody): Promise<RegisterResponse> {
    try {
      const response: AxiosResponse<RegisterResponse> =
        await _axios.post<RegisterResponse>("/auth/register", user);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  async login(user: LoginBody): Promise<LoginResponse> {
    try {
      const response: AxiosResponse<LoginResponse> =
        await _axios.post<LoginResponse>("/auth/login", user);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};
