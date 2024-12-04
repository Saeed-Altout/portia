import { apiClient } from "@/api/config";

export const getPricingPlans = async (): Promise<IGetPricingPlansResponse> => {
  try {
    const response = await apiClient.get(
      process.env.NEXT_PUBLIC_GET_PRICING_PLANS!
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const getPackageWithPlans =
  async (): Promise<IGetPackageWithPlansResponse> => {
    try {
      const response = await apiClient.get(
        process.env.NEXT_PUBLIC_GET_PRICING_WITH_PLANS!
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  };
export const getOffersPackage =
  async (): Promise<IGetOffersPackageResponse> => {
    try {
      const response = await apiClient.get(
        process.env.NEXT_PUBLIC_GET_OFFERS_PRICING!
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  };
