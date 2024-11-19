import { keepPreviousData, useQueries } from "@tanstack/react-query";

import {
  getAffiliateEarningsStatistics,
  getAffiliateEarningsHistories,
} from "@/api/dashboard";

export const useGetAffiliateEarnings = (page?: number) => {
  return useQueries({
    queries: [
      {
        queryKey: ["get-affiliate-earnings-histories", `page=${page}`],
        queryFn: () => getAffiliateEarningsHistories(page),
        placeholderData: keepPreviousData,
      },
      {
        queryKey: ["get-affiliate-earnings-statistics"],
        queryFn: () => getAffiliateEarningsStatistics(),
      },
    ],
  });
};
