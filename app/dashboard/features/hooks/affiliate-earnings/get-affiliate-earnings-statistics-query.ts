import { AxiosError } from "axios";
import { useQuery, UseQueryOptions } from "@tanstack/react-query";

import { getAffiliateEarningsStatistics } from "@/app/dashboard/features/api/affiliate-earnings-statistics";

export const useGetAffiliateEarningsStatisticsQuery = (
  options?: UseQueryOptions<
    EarningsStatisticsResponseType,
    AxiosError<ErrorResponse>
  >
) => {
  return useQuery({
    queryKey: ["get-affiliate-earnings-statistics"],
    queryFn: () => getAffiliateEarningsStatistics(),
    ...options,
  });
};
