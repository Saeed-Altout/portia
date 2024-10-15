import { _axios } from "@/lib/axios";
import { AxiosResponse } from "axios";

export const getUserDetails = async (): Promise<UserDetails> => {
  try {
    const response: AxiosResponse<UserDetails> = await _axios.get(
      process.env.NEXT_PUBLIC_USER_DETAILS!
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
