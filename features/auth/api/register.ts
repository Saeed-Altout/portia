import { _axios } from "@/lib/axios";
import { AxiosResponse } from "axios";

export const register = async (
  values: RegisterRequestType
): Promise<RegisterResponseType> => {
  try {
    const response: AxiosResponse<RegisterResponseType> =
      await _axios.post<RegisterResponseType>(
        process.env.NEXT_PUBLIC_REGISTER_ENDPOINT!,
        values
      );
    return response.data;
  } catch (error) {
    throw error;
  }
};
