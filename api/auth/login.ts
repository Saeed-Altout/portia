import { _axios } from "@/lib/axios";
import { AxiosResponse } from "axios";

export const login = async (
  values: LoginRequestType
): Promise<LoginResponseType> => {
  try {
    const response: AxiosResponse<LoginResponseType> =
      await _axios.post<LoginResponseType>(
        process.env.NEXT_PUBLIC_LOGIN_ENDPOINT!,
        values
      );
    return response.data;
  } catch (error) {
    throw error;
  }
};
