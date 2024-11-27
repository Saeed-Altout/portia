import { useQuery } from "@tanstack/react-query";
import { getAffiliateStatistics } from "@/api";
export const useGetAffiliateStatistics = () => {
  return useQuery({
    queryKey: ["get-affiliate-statistics"],
    queryFn: () => getAffiliateStatistics(),
  });
};
