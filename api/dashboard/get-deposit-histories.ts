import { apiClient } from "@/api/config";

export const getDepositHistories = async (
  params: Record<string, any>
): Promise<IGetDepositHistoriesResponse> => {
  const filteredParams = Object.fromEntries(
    Object.entries(params).filter(
      ([, value]) => value !== undefined && value !== null && value !== 0
    )
  );

  try {
    const response = await apiClient.get(
      process.env.NEXT_PUBLIC_GET_DEPOSIT_HISTORIES!,
      {
        params: { ...filteredParams },
      }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
