import { AxiosError } from "axios";
import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { websiteService } from "@/app/(root)/services";

export const useGetOffersQuery = (
  options?: UseQueryOptions<RootObj<Offer[]>, AxiosError<ErrorResponse>>
) => {
  return useQuery({
    queryKey: ["get-offers"],
    queryFn: () => websiteService.getOffers(),
    ...options,
  });
};
