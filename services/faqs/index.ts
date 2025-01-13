import { apiClient } from "@/lib/api";
import { ENDPOINTS } from "@/config/constants";

export const getFaqs = async (): Promise<GetFaqsResponse> => {
  try {
    const response = await apiClient.get(ENDPOINTS.GET_FAQS);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getTopFaqs = async (): Promise<GetFaqsResponse> => {
  try {
    const response = await apiClient.get(ENDPOINTS.GET_TOP_FAQS);
    return response.data;
  } catch (error) {
    throw error;
  }
};
