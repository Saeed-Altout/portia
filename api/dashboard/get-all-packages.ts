import { AxiosResponse } from "axios";

import { apiClient } from "@/api/config";
import { API_GET_ALL_PACKAGES } from "@/config/constants";

export const getAllPackages = async (): Promise<GetAllPackagesResponse> => {
  try {
    const response: AxiosResponse<GetAllPackagesResponse> =
      await apiClient.get<GetAllPackagesResponse>(API_GET_ALL_PACKAGES);
    return response.data;
  } catch (error) {
    throw error;
  }
};
