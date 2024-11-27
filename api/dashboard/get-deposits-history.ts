import { AxiosResponse } from "axios";

import { apiClient } from "@/api/config";

export const getDepositsHistory = async (
  params: Record<string, any>
): Promise<RootObj<IDepositsHistory>> => {
  const filteredParams = Object.fromEntries(
    Object.entries(params).filter(
      ([, value]) => value !== undefined && value !== null && value !== 0
    )
  );
  try {
    const response: AxiosResponse<RootObj<IDepositsHistory>> =
      await apiClient.get<RootObj<IDepositsHistory>>("/deposits/history", {
        params: { ...filteredParams },
      });
    return response.data;
  } catch (error) {
    throw error;
  }
};
