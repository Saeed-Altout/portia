import { apiClient } from "@/api/config";

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
