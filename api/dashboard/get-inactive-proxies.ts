import { apiClient } from "@/api/config";

export const getInactiveProxies =
  async (): Promise<IGetProxiesInactiveResponse> => {
    try {
      const response = await apiClient.get(
        process.env.NEXT_PUBLIC_GET_INACTIVE_PROXIES!
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  };
