import { apiClient } from "@/api/config";

export const sendResetEmail = async (
  values: ISendResetEmailRequest
): Promise<ISendResetEmailResponse> => {
  try {
    const response = await apiClient.post(
      process.env.NEXT_PUBLIC_SEND_RESET_EMAIL!,
      values
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
