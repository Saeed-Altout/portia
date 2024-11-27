import { apiClient } from "@/api/config";

export const getPricingPlans = async (): Promise<IGetPricingPlansResponse> => {
  try {
    const response = await apiClient.get(process.env.NEXT_PUBLIC_GET_PRICING_PLANS!);
    return response.data;
  } catch (error) {
    throw error;
  }
};
