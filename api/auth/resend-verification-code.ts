import { _axios } from "@/lib/axios";
import { AxiosResponse } from "axios";

export const resendVerificationCode = async (
  email: ResendVerificationCodeRequestType
): Promise<ResendVerificationCodeResponseType> => {
  try {
    const response: AxiosResponse<ResendVerificationCodeResponseType> =
      await _axios.post<ResendVerificationCodeResponseType>(
        process.env.NEXT_PUBLIC_RESEND_VERIFICATION_CODE_ENDPOINT!,
        email
      );
    return response.data;
  } catch (error) {
    throw error;
  }
};
