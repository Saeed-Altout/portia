import { apiClient } from "@/api/config";

export const getDeposits = async (): Promise<RootResponse<IDeposits>> => {
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
