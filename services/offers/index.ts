import { apiClient } from "@/lib/api";
import { ENDPOINTS } from "@/config/constants";

export const getOffers = async (): Promise<RootResponse<Offers>> => {
  try {
    const response = await apiClient.get(ENDPOINTS.GET_OFFERS);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getOffersFeatures = async (): Promise<
  RootResponse<FeaturesOffers>
> => {
  try {
    const response = await apiClient.get(ENDPOINTS.GET_FEATURES_OFFER);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getOffersPlans = async (): Promise<RootResponse<PlansOffer>> => {
  try {
    const response = await apiClient.get(ENDPOINTS.GET_PLANS_OFFERS);
    return response.data;
  } catch (error) {
    throw error;
  }
};
