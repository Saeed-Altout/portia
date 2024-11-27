import { useQuery } from "@tanstack/react-query";
import { getAffiliateHistories } from "@/api";
export const useGetAffiliateHistories = (params: Record<string, any>) => {
  return useQuery({
    queryKey: ["get-affiliate-histories", params],
    queryFn: () => getAffiliateHistories(params),
  });
};
