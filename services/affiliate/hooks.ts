import { useQuery } from "@tanstack/react-query";
import {
  getAffiliateHistories,
  getAffiliateStatistics,
} from "@/services/affiliate";

export const useGetAffiliateHistoriesQuery = (params: Record<string, any>) => {
  return useQuery({
    queryKey: ["affiliate-histories", params],
    queryFn: () => getAffiliateHistories(params),
  });
};

export const useGetAffiliateStatisticsQuery = () => {
  return useQuery({
    queryKey: ["affiliate-statistics"],
    queryFn: () => getAffiliateStatistics(),
  });
};
