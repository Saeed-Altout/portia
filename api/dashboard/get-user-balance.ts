import { AxiosResponse } from "axios";

import { apiClient } from "@/api/config";
import { API_GET_USER_BALANCE } from "@/config/constants";

export const getUserBalance = async (): Promise<GetUserBalanceResponse> => {
  try {
    const response: AxiosResponse<GetUserBalanceResponse> =
      await apiClient.get<GetUserBalanceResponse>(API_GET_USER_BALANCE);
    return response.data;
  } catch (error) {
    throw error;
  }
};
