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

export const getDepositsHistories = async (): Promise<
  RootResponse<DepositHistories>
> => {
  try {
    const response = await apiClient.get(ENDPOINTS.DEPOSIT_HISTORIES);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getDepositStatistics = async (): Promise<
  RootResponse<DepositStatistics>
> => {
  try {
    const response = await apiClient.get(ENDPOINTS.DEPOSIT_STATISTICS);
    return response.data;
  } catch (error) {
    throw error;
  }
};
