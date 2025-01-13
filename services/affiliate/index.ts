import { apiClient } from "@/lib/api";
import { ENDPOINTS } from "@/config/constants";

export const getAffiliateHistories = async (): Promise<
  RootResponse<Affiliates>
> => {
  try {
    const response = await apiClient.get(ENDPOINTS.AFFILIATE_HISTORIES);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getAffiliateStatistics = async (): Promise<
  RootResponse<AffiliateStatistics>
> => {
  try {
    const response = await apiClient.get(ENDPOINTS.AFFILIATE_STATISTICS);
    return response.data;
  } catch (error) {
    throw error;
  }
};
