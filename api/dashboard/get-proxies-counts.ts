import { apiClient } from "@/api/config";

export const getProxiesCounts =
  async (): Promise<IGetProxiesCountsResponse> => {
    try {
      const response = await apiClient.get(
        process.env.NEXT_PUBLIC_GET_COUNTS_PROXIES!
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  };
