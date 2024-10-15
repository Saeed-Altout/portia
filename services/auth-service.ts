import { AxiosResponse } from "axios";

import { _axios } from "@/lib/axios";

export const authService = {
  async logout(): Promise<void> {
    try {
      await _axios.get(process.env.NEXT_PUBLIC_LOGOUT_ENDPOINT!);
    } catch (error) {
      throw error;
    }
  },
};
