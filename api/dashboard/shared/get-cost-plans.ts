import { apiClient } from "@/api/config";

export const getCostPlans = async (
  params: Record<string, any>
): Promise<IGetCostPlansResponse> => {
  const filteredParams = Object.fromEntries(
    Object.entries(params).filter(
      ([, value]) => value !== undefined && value !== null && value !== 0
    )
  );

  try {
    const response = await apiClient.get(
      process.env.NEXT_PUBLIC_GET_COST_PLANS!,
      {
        params: { ...filteredParams },
      }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
