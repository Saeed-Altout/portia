import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getReviews } from "./apis";
import { useResponse } from "@/hooks/use-response";

export const useGetReviewsQuery = (params: Record<string, any>) => {
  return useQuery({
    queryKey: ["reviews", params],
    queryFn: () => getReviews(params),
  });
};