import { AxiosError } from "axios";
import {
  keepPreviousData,
  useQuery,
  UseQueryOptions,
} from "@tanstack/react-query";
import { dashboardService } from "@dashboard/services";

export const useGetAffiliateEarningsHistoryQuery = (
  page?: number,
  options?: UseQueryOptions<RootObj<EarningsHistory>, AxiosError<ErrorResponse>>
) => {
  return useQuery({
    queryKey: ["get-affiliate-earnings-history", page],
    queryFn: (data) => dashboardService.getAffiliateEarningsHistory(data),
    placeholderData: keepPreviousData,
    ...options,
  });
};
