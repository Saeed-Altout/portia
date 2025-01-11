import { apiClient } from "@/api/config";

export const getOffers = async (): Promise<IGetOffers> => {
  try {
    const response = await apiClient.get(process.env.NEXT_PUBLIC_OFFERS!);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getOffersFeatures = async (): Promise<IGetFeaturesOffer> => {
  try {
    const response = await apiClient.get(
      process.env.NEXT_PUBLIC_FEATURES_OFFER!
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const getOffersPlans = async (): Promise<IGetPlansOffer> => {
  try {
    const response = await apiClient.get(process.env.NEXT_PUBLIC_PLANS_OFFERS!);
    return response.data;
  } catch (error) {
    throw error;
  }
};
