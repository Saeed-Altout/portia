import { AxiosResponse } from "axios";

import { apiClient } from "@/api/config";
import { API_GET_ALL_CITIES } from "@/config/constants";

export const getAllCities = async (
  params: Record<string, any>
): Promise<RootObj<City[]>> => {
  const filteredParams = Object.fromEntries(
    Object.entries(params).filter(
      ([, value]) => value !== undefined && value !== null && value !== 0
    )
  );

  try {
    const response: AxiosResponse<RootObj<City[]>> = await apiClient.get<
      RootObj<City[]>
    >(API_GET_ALL_CITIES, { params: { ...filteredParams } });
    return response.data;
  } catch (error) {
    throw error;
  }
};
