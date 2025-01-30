import { apiClient } from "@/lib/api";
import { filterParams } from "@/utils/filter-params";

export const addDeposit = async (
  values: IDepositCredentials
): Promise<ApiResponse<IDepositResponse>> => {
  try {
    const response = await apiClient.post(
      process.env.NEXT_PUBLIC_ADD_DEPOSIT!,
      values
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getWayPayment = async (): Promise<ApiResponse<string[]>> => {
  try {
    const response = await apiClient.get(
      process.env.NEXT_PUBLIC_GET_WAY_PAYMENT!
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getDepositsHistories = async (
  params: Record<string, any>
): Promise<ApiResponse<IDepositHistories>> => {
  const filteredParams = filterParams(params);
  try {
    const response = await apiClient.get(
      process.env.NEXT_PUBLIC_DEPOSIT_HISTORIES!,
      { params: { ...filteredParams } }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getDepositStatistics = async (): Promise<
  ApiResponse<IDepositStatistics>
> => {
  try {
    const response = await apiClient.get(
      process.env.NEXT_PUBLIC_DEPOSIT_STATISTICS!
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
