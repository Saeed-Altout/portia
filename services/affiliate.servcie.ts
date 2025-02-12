import { AxiosError } from "axios";
import { apiClient } from "@/lib/api";
import { filterParams } from "@/utils/filter-params";

class AffiliateService {
  static async getAffiliateHistories(
    params: Record<string, any>
  ): Promise<ApiResponse<IAffiliateHistories>> {
    const filteredParams = filterParams(params);
    try {
      const { data } = await apiClient.get(
        process.env.NEXT_PUBLIC_AFFILIATE_HISTORIES!,
        { params: { ...filteredParams } }
      );
      return data;
    } catch (error) {
      if (error instanceof AxiosError) {
        throw new Error(
          error.response?.data?.message || "Failed to get affiliate histories"
        );
      }
      throw error;
    }
  }

  static async getAffiliateStatistics(): Promise<
    ApiResponse<IAffiliateStatistics>
  > {
    try {
      const { data } = await apiClient.get(
        process.env.NEXT_PUBLIC_AFFILIATE_STATISTICS!
      );
      return data;
    } catch (error) {
      if (error instanceof AxiosError) {
        throw new Error(
          error.response?.data?.message || "Failed to get affiliate statistics"
        );
      }
      throw error;
    }
  }
}

export const affiliateService = new AffiliateService();
