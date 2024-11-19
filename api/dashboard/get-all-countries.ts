import { AxiosResponse } from "axios";

import { apiClient } from "@/api/config";
import { API_GET_ALL_COUNTRIES } from "@/config/constants";

export const getAllCountries = async (
  params: Record<string, any>
): Promise<RootObj<Country[]>> => {
  const filteredParams = Object.fromEntries(
    Object.entries(params).filter(
      ([, value]) => value !== undefined && value !== null && value !== 0
    )
  );

  try {
    const response: AxiosResponse<RootObj<Country[]>> = await apiClient.get<
      RootObj<Country[]>
    >(API_GET_ALL_COUNTRIES, { params: { ...filteredParams } });
    return response.data;
  } catch (error) {
    throw error;
  }
};
