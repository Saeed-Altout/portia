import { apiClient } from "@/lib/api";
import { ENDPOINTS } from "@/config/constants";

export const getProxyLocations = async (): Promise<RootResponse<Locations>> => {
  try {
    const response = await apiClient.get(ENDPOINTS.GET_PROXY_FAQS);
    return response.data;
  } catch (error) {
    throw error;
  }
};
