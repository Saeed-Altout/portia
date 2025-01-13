import { apiClient } from "@/lib/api";
import { ENDPOINTS } from "@/config/constants";

export const addDeposit = async (
  values: DepositCredentials
): Promise<DepositResponse> => {
  try {
    const response = await apiClient.post(ENDPOINTS.DEPOSIT, values);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getWayPayment = async (): Promise<GetWayPaymentResponse> => {
  try {
    const response = await apiClient.get(ENDPOINTS.GET_WAY_PAYMENT);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getDepositsHistories = async (
  params: Record<string, any>
): Promise<IGetDepositsHistoriesResponse> => {
  const filteredParams = Object.fromEntries(
    Object.entries(params).filter(
      ([, value]) => value !== undefined && value !== null && value !== 0
    )
  );
  try {
    const response = await apiClient.get(ENDPOINTS.DEPOSIT_HISTORIES, {
      params: { ...filteredParams },
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getDepositStatistics =
  async (): Promise<IGetDepositsStatisticsResponse> => {
    try {
      const response = await apiClient.get(ENDPOINTS.DEPOSIT_STATISTICS);
      console.log(response.data);
      return response.data;
    } catch (error) {
      throw error;
    }
  };
