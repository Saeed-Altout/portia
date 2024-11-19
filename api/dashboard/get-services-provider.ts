import { AxiosResponse } from "axios";

import { apiClient } from "@/api/config";
import { API_GET_SERVICE_PROVIDERS } from "@/config/constants";

export const getServicesProvider = async (
  params: Record<string, any>
): Promise<RootObj<ServiceProvider[]>> => {
  const filteredParams = Object.fromEntries(
    Object.entries(params).filter(
      ([, value]) => value !== undefined && value !== null && value !== 0
    )
  );

  try {
    const response: AxiosResponse<RootObj<ServiceProvider[]>> =
      await apiClient.get<RootObj<ServiceProvider[]>>(
        API_GET_SERVICE_PROVIDERS,
        { params: { ...filteredParams } }
      );
    return response.data;
  } catch (error) {
    throw error;
  }
};
