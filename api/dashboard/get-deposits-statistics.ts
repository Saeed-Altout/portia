import { AxiosResponse } from "axios";

import { apiClient } from "@/api/config";

export const getDepositsStatistics = async (): Promise<
  RootObj<IDepositsStatistics>
> => {
  try {
    const response: AxiosResponse<RootObj<IDepositsStatistics>> =
      await apiClient.get<RootObj<IDepositsStatistics>>("/deposits/Statistics");
    return response.data;
  } catch (error) {
    throw error;
  }
};
