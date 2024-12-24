import { apiClient } from "@/api/config";

export const getActiveProxies =
  async (): Promise<IGetProxiesActiveResponse> => {
    try {
      const response = await apiClient.get(
        process.env.NEXT_PUBLIC_GET_ACTIVE_PROXIES!
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  };
