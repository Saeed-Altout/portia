import { apiClient } from "@/api/config";

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
export const deposit = async (
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
