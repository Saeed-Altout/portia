import { apiClient } from "@/lib/api";

export const getFaqs = async (): Promise<IGetFaqs> => {
  try {
    const response = await apiClient.get("/get-all-faqs");
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const getTopFaqs = async (): Promise<IGetFaqs> => {
  try {
    const response = await apiClient.get("/get-faq");
    return response.data;
  } catch (error) {
    throw error;
  }
};
