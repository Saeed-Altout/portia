import { apiClient } from "@/lib/api";

export const getPackagesPlans = async (): Promise<
  ApiResponse<IPackagePlan[]>
> => {
  try {
    const response = await apiClient.get(process.env.NEXT_PUBLIC_GET_PACKAGES!);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getOffersPlans = async (): Promise<ApiResponse<IOfferPlan[]>> => {
  try {
    const response = await apiClient.get(
      process.env.NEXT_PUBLIC_GET_ALL_OFFERS!
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
