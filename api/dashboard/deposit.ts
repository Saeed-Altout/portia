import { apiClient } from "@/api/config";

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
