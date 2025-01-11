import { apiClient } from "@/api/config";

export const getDepositsHistories = async (): Promise<
  RootResponse<IDepositHistories>
> => {
  try {
    const response = await apiClient.get("/deposits/history");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getDepositStatistics = async (): Promise<
  RootResponse<IDepositStatistics>
> => {
  try {
    const response = await apiClient.get("/deposits/Statistics");
    return response.data;
  } catch (error) {
    throw error;
  }
};
