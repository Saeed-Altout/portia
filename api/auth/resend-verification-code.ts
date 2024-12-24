import { apiClient } from "@/api/config";

export const resendVerificationCode = async (
  values: IResendVerificationCodeRequest
): Promise<IResendVerificationCodeResponse> => {
  try {
    const response = await apiClient.post(
      process.env.NEXT_PUBLIC_RESEND_VERIFICATION_CODE!,
      values
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
