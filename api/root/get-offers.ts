import { apiClient } from "@/api/config";

export const getOffers = async (): Promise<IGetOffers> => {
  try {
    const response = await apiClient.get(process.env.NEXT_PUBLIC_OFFERS!);
    return response.data;
  } catch (error) {
    throw error;
  }
};
