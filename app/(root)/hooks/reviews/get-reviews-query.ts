import { AxiosError } from "axios";
import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { websiteService } from "@/app/(root)/services";

export const useGetReviewsQuery = (
  per_page?: number,
  options?: UseQueryOptions<RootObj<Review[]>, AxiosError<ErrorResponse>>
) => {
  return useQuery({
    queryKey: ["get-review", per_page],
    queryFn: (data) => websiteService.getReviews(data),
    ...options,
  });
};
