import { AxiosError } from "axios";

import {
  keepPreviousData,
  useQuery,
  UseQueryOptions,
} from "@tanstack/react-query";

import { getAffiliateEarningsHistories } from "@/app/dashboard/features/api/affiliate-earnings-histories";

export const useGetAffiliateEarningsHistoriesQuery = (
  page?: number,
  options?: UseQueryOptions<
    EarningsHistoriesResponseType,
    AxiosError<ErrorResponse>
  >
) => {
  return useQuery({
    queryKey: ["get-affiliate-earnings-histories", page],
    queryFn: (data) => getAffiliateEarningsHistories(data),
    placeholderData: keepPreviousData,
    ...options,
  });
};
