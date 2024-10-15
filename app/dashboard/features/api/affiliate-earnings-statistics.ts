import { _axios } from "@/lib/axios";
import { AxiosResponse } from "axios";

export const getAffiliateEarningsStatistics =
  async (): Promise<EarningsStatisticsResponseType> => {
    try {
      const response: AxiosResponse<EarningsStatisticsResponseType> =
        await _axios.get(
          process.env.NEXT_PUBLIC_AFFILIATE_EARNINGS_STATISTICS!
        );
      return response.data;
    } catch (error) {
      throw error;
    }
  };
