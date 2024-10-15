import { _axios } from "@/lib/axios";
import { AxiosResponse } from "axios";

export const sendResetEmail = async (
  email: SendResetEmailRequestType
): Promise<SendResetEmailResponseType> => {
  try {
    const response: AxiosResponse<SendResetEmailResponseType> =
      await _axios.post<SendResetEmailResponseType>(
        process.env.NEXT_PUBLIC_SEND_RESET_EMAIL_ENDPOINT!,
        email
      );
    return response.data;
  } catch (error) {
    throw error;
  }
};
