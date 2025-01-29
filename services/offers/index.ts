import { apiClient } from "@/lib/api";

export const getOffers = async (): Promise<ApiResponse<IOfferData[]>> => {
  try {
    const response = await apiClient.get(process.env.NEXT_PUBLIC_GET_OFFERS!);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// This endpoint not need
export const getOffersPlans = async (): Promise<ApiResponse<IOfferData[]>> => {
  try {
    const response = await apiClient.get(
      process.env.NEXT_PUBLIC_GET_PLANS_OFFERS!
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getOffersFeatures = async (): Promise<
  ApiResponse<IFeatureData[]>
> => {
  try {
    const response = await apiClient.get(
      process.env.NEXT_PUBLIC_GET_FEATURES_OFFER!
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
