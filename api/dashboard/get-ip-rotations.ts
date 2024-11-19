import { AxiosResponse } from "axios";

import { apiClient } from "@/api/config";
import { API_GET_IP_ROTATIONS } from "@/config/constants";

export const getIpRotations = async (
  params: Record<string, any>
): Promise<RootObj<string[]>> => {
  const filteredParams = Object.fromEntries(
    Object.entries(params).filter(
      ([, value]) => value !== undefined && value !== null && value !== 0
    )
  );

  try {
    const response: AxiosResponse<RootObj<string[]>> = await apiClient.get<
      RootObj<string[]>
    >(API_GET_IP_ROTATIONS, { params: { ...filteredParams } });
    return response.data;
  } catch (error) {
    throw error;
  }
};
