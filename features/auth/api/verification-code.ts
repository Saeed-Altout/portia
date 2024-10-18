import { AxiosResponse } from "axios";
import { _axios } from "@/lib/axios";

export const verificationCode = async (
  data: VerificationCodeRequestType
): Promise<VerificationCodeResponse> => {
  try {
    const response: AxiosResponse<VerificationCodeResponse> =
      await _axios.post<VerificationCodeResponse>(
        process.env.NEXT_PUBLIC_VERIFY_CODE_ENDPOINT!,
        data
      );
    return response.data;
  } catch (error) {
    throw error;
  }
};
