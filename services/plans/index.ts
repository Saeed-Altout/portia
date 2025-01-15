import { apiClient } from "@/lib/api";
import { ENDPOINTS } from "@/config/constants";

export const getPackagesPlans =
  async (): Promise<IGetPackagesPlansResponse> => {
    try {
      const response = await apiClient.get(ENDPOINTS.GET_PACKAGES);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

export const getOffersPlans = async (): Promise<IGetOffersPlansResponse> => {
  try {
    const response = await apiClient.get(ENDPOINTS.GET_ALL_OFFERS);
    return response.data;
  } catch (error) {
    throw error;
  }
};
