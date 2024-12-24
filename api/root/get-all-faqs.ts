import { apiClient } from "@/api/config";

export const getAllFaqs = async (): Promise<IGetFaqs> => {
  try {
    const response = await apiClient.get(process.env.NEXT_PUBLIC_ALL_FAQ!);
    return response.data;
  } catch (error) {
    throw error;
  }
};
