import { apiClient } from "@/api/config";

export const getPlansOffer = async (): Promise<IGetPlansOffer> => {
  try {
    const response = await apiClient.get(process.env.NEXT_PUBLIC_PLANS_OFFERS!);
    return response.data;
  } catch (error) {
    throw error;
  }
};
