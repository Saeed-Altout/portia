import { apiClient } from "@/lib/api";
import { filterParams } from "@/utils/filter-params";

export const getAffiliateHistories = async (
  params: Record<string, any>
): Promise<ApiResponse<IAffiliateHistoriesData>> => {
  const filteredParams = filterParams(params);
  try {
    const response = await apiClient.get(
      process.env.NEXT_PUBLIC_AFFILIATE_HISTORIES!,
      { params: { ...filteredParams } }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getAffiliateStatistics = async (): Promise<
  ApiResponse<IAffiliateStatisticsData>
> => {
  try {
    const response = await apiClient.get(
      process.env.NEXT_PUBLIC_AFFILIATE_STATISTICS!
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
