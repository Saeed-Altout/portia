import { apiClient } from "@/api/config";

export const sendContactMessage = async (
  values: ISendContactMessageRequest
): Promise<ISendContactMessageResponse> => {
  try {
    const response = await apiClient.post(
      process.env.NEXT_PUBLIC_CONTACT_MESSAGE!,
      values
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
