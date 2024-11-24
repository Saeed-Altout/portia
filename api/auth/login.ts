import { _axios } from "@/lib/axios";
import { AxiosResponse } from "axios";

export const login = async (values: ILoginRequest): Promise<ILoginResponse> => {
  try {
    const response: AxiosResponse<ILoginResponse> =
      await _axios.post<ILoginResponse>(
        process.env.NEXT_PUBLIC_LOGIN_ENDPOINT!,
        values
      );
    return response.data;
  } catch (error) {
    throw error;
  }
};
