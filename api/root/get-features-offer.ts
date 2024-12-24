import { apiClient } from "@/api/config";

export const getFeaturesOffer = async (): Promise<IGetFeaturesOffer> => {
  try {
    const response = await apiClient.get(
      process.env.NEXT_PUBLIC_FEATURES_OFFER!
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
