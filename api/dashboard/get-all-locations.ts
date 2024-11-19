import { AxiosResponse } from "axios";

import { apiClient } from "@/api/config";
import { API_GET_ALL_LOCATIONS } from "@/config/constants";

export const getAllLocations = async (
  params: Record<string, any>
): Promise<RootObj<proxy>> => {
  const filteredParams = Object.fromEntries(
    Object.entries(params).filter(
      ([, value]) => value !== undefined && value !== null
    )
  );

  try {
    const response: AxiosResponse<RootObj<proxy>> = await apiClient.get(
      `${API_GET_ALL_LOCATIONS}`,
      { params: { ...filteredParams } }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
