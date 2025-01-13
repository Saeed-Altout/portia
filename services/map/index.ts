import { apiClient } from "@/lib/api";
import { ENDPOINTS } from "@/config/constants";

export const getDataMap = async (): Promise<GetDataMapResponse> => {
  try {
    const response = await apiClient.get(ENDPOINTS.GET_DATA_MAP);
    return response.data;
  } catch (error) {
    throw error;
  }
};
