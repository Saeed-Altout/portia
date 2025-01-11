import { apiClient } from "@/lib/api";

export const getReviews = async (
  params: Record<string, any>
): Promise<IGetReviews> => {
  const filteredParams = Object.fromEntries(
    Object.entries(params).filter(
      ([, value]) => value !== undefined && value !== null && value !== 0
    )
  );
  try {
    const response = await apiClient.get(process.env.NEXT_PUBLIC_REVIEWS!, {
      params: { ...filteredParams },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
