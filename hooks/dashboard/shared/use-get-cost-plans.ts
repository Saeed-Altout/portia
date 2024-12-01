import { useQuery } from "@tanstack/react-query";
import { getCostPlans } from "@/api";

export const useGetCostPlans = (params: Record<string, any>) => {
  return useQuery({
    queryKey: ["get-cost", params],
    queryFn: () => getCostPlans(params),
    enabled: !!params.pkg_id,
  });
};
