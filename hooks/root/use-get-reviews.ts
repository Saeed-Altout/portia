import { useQuery } from "@tanstack/react-query";
import { getReviews } from "@/api";

export const useGetReviews = (params: Record<string, any>) => {
  return useQuery({
    queryKey: ["reviews", params],
    queryFn: () => getReviews(params),
  });
};
