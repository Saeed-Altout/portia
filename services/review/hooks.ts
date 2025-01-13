import { useQuery } from "@tanstack/react-query";
import { getReviews } from "@/services/review";
export const useGetReviewsQuery = (params: Record<string, any>) => {
  return useQuery({
    queryKey: ["reviews", params],
    queryFn: () => getReviews(params),
  });
};
