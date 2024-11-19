import { _axios } from "@/lib/axios";
import { AxiosResponse } from "axios";

export const logout = async (): Promise<LogoutResponseType> => {
  try {
    const response: AxiosResponse<LogoutResponseType> = await _axios.get(
      process.env.NEXT_PUBLIC_LOGOUT_ENDPOINT!
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
