import { apiClient } from "@/api/config";

export const getDepositStatistics =
  async (): Promise<IGetDepositStatisticsResponse> => {
    try {
      const response = await apiClient.get(
        process.env.NEXT_PUBLIC_GET_DEPOSIT_STATISTICS!
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  };
