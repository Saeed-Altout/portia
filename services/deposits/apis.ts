import { apiClient } from "@/lib/api";

export const addDeposit = async (
  values: IDepositRequest
): Promise<IDepositResponse> => {
  try {
    const response = await apiClient.post(
      process.env.NEXT_PUBLIC_DEPOSIT!,
      values
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const getWayPayment = async (): Promise<IGetWayPaymentResponse> => {
  try {
    const response = await apiClient.get(
      process.env.NEXT_PUBLIC_GET_WAY_PAYMENT!,
      {}
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

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
