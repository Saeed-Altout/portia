import { useQuery } from "@tanstack/react-query";
import { getAffiliateHistories, getAffiliateStatistics } from "./apis";

export const useGetAffiliateHistoriesQuery = () => {
  return useQuery({
    queryKey: ["affiliate-histories"],
    queryFn: () => getAffiliateHistories(),
  });
};

export const useGetAffiliateStatisticsQuery = () => {
  return useQuery({
    queryKey: ["affiliate-statistics"],
    queryFn: () => getAffiliateStatistics(),
  });
};
