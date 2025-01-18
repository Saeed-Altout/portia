import { apiClient } from "@/lib/api";
import { ENDPOINTS } from "@/config/constants";

export const getProxyLocations = async (): Promise<
  RootResponse<ILocation[]>
> => {
  try {
    const response = await apiClient.get(ENDPOINTS.GET_PROXY_LOCATIONS);
    return response.data;
  } catch (error) {
    throw error;
  }
};
