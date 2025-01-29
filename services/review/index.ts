import { apiClient } from "@/lib/api";
import { filterParams } from "@/utils/filter-params";

export const getReviews = async (
  params: Record<string, any>
): Promise<ApiResponse<IReview[]>> => {
  const filteredParams = filterParams(params);
  try {
    const response = await apiClient.get(process.env.NEXT_PUBLIC_GET_REVIEWS!, {
      params: { ...filteredParams },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
