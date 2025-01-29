import { apiClient } from "@/lib/api";

export const getFaqs = async (): Promise<ApiResponse<IFaq[]>> => {
  try {
    const response = await apiClient.get(process.env.NEXT_PUBLIC_GET_FAQS!);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getTopFaqs = async (): Promise<ApiResponse<IFaq[]>> => {
  try {
    const response = await apiClient.get(process.env.NEXT_PUBLIC_GET_TOP_FAQS!);
    return response.data;
  } catch (error) {
    throw error;
  }
};
