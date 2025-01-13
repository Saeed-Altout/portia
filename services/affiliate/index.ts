import { apiClient } from "@/lib/api";
import { ENDPOINTS } from "@/config/constants";

export const getAffiliateHistories = async (
  params: Record<string, any>
): Promise<IGetAffiliatesHistoriesResponse> => {
  const filteredParams = Object.fromEntries(
    Object.entries(params).filter(
      ([, value]) => value !== undefined && value !== null && value !== 0
    )
  );
  try {
    const response = await apiClient.get(ENDPOINTS.AFFILIATE_HISTORIES, {
      params: { ...filteredParams },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getAffiliateStatistics =
  async (): Promise<IGetAffiliateStatisticsResponse> => {
    try {
      const response = await apiClient.get(ENDPOINTS.AFFILIATE_STATISTICS);
      return response.data;
    } catch (error) {
      throw error;
    }
  };
