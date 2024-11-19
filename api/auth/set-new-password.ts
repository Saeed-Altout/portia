import { _axios } from "@/lib/axios";
import { AxiosResponse } from "axios";

export const setNewPassword = async (
  data: SetNewPasswordRequestType
): Promise<SetNewPasswordResponseType> => {
  try {
    const response: AxiosResponse<SetNewPasswordResponseType> =
      await _axios.post<SetNewPasswordResponseType>(
        process.env.NEXT_PUBLIC_SET_NEW_PASSWORD_ENDPOINT!,
        {
          password: data.password,
          password_confirmation: data.password_confirmation,
        },
        {
          headers: {
            Authorization: `Bearer ${data.token}`,
          },
        }
      );
    return response.data;
  } catch (error) {
    throw error;
  }
};
