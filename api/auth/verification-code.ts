import { apiClient } from "@/api/config";

export const verificationCode = async (
  values: IVerificationCodeRequest
): Promise<IVerificationCodeResponse> => {
  try {
    const response = await apiClient.post(
      process.env.NEXT_PUBLIC_VERIFY_CODE!,
      values
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
