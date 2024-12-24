import { apiClient } from "@/api/config";

export const getProxyLocations =
  async (): Promise<IGetProxyLocationsResponse> => {
    try {
      const response = await apiClient.get(
        process.env.NEXT_PUBLIC_GET_ALL_PROXY_LOCATION!
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  };
