import { AxiosResponse } from "axios";

import { apiClient } from "@/api/config";
import { API_GET_PROXIES_COUNTS } from "@/config/constants";

export const getProxiesCounts = async (): Promise<GetProxiesCountsResponse> => {
  try {
    const response: AxiosResponse<GetProxiesCountsResponse> =
      await apiClient.get<GetProxiesCountsResponse>(API_GET_PROXIES_COUNTS);
    return response.data;
  } catch (error) {
    throw error;
  }
};
