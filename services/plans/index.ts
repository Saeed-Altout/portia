import { apiClient } from "@/lib/api";
import { ENDPOINTS } from "@/config/constants";

export const getPackages = async (): Promise<RootResponse<OffersPlan>> => {
  try {
    const response = await apiClient.get(ENDPOINTS.GET_PACKAGES);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getOffers = async (): Promise<RootResponse<OffersPlan>> => {
  try {
    const response = await apiClient.get(ENDPOINTS.GET_ALL_OFFERS);
    return response.data;
  } catch (error) {
    throw error;
  }
};
