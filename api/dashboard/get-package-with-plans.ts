import { apiClient } from "@/api/config";

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
