import { apiClient } from "@/api/config";

export const getUserBalance = async (): Promise<IGetUserBalanceResponse> => {
  try {
    const response = await apiClient.get(
      process.env.NEXT_PUBLIC_GET_USER_BALANCE!
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
