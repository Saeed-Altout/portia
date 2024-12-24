import { apiClient } from "@/api/config";

export const getAffiliateHistories = async (
  params: Record<string, any>
): Promise<IGetAffiliateHistoriesResponse> => {
  const filteredParams = Object.fromEntries(
    Object.entries(params).filter(
      ([, value]) => value !== undefined && value !== null && value !== 0
    )
  );

  try {
    const response = await apiClient.get(
      process.env.NEXT_PUBLIC_GET_AFFILIATE_HISTORIES!,
      {
        params: { ...filteredParams },
      }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
