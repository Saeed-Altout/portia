import { apiClient } from "@/lib/api";

export const getAffiliateHistories = async (): Promise<
  RootResponse<IAffiliateHistories>
> => {
  try {
    const response = await apiClient.get("/affiliate/earnings/history");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getAffiliateStatistics = async (): Promise<
  RootResponse<IAffiliateStatistics>
> => {
  try {
    const response = await apiClient.get("/affiliate/earnings/statistics");
    return response.data;
  } catch (error) {
    throw error;
  }
};
