import { apiClient } from "@/api/config";

export const getAffiliateStatistics =
  async (): Promise<IGetAffiliateStatisticsResponse> => {
    try {
      const response = await apiClient.get(
        process.env.NEXT_PUBLIC_GET_AFFILIATE_STATISTICS!
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  };
