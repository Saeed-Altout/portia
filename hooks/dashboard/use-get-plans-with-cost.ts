import { getPlansWithCost } from "@/api/dashboard/get-plans-with-cost";
import { useQuery } from "@tanstack/react-query";

export const useGetPlansWithCost = (params: Record<string, any>) => {
  return useQuery({
    queryKey: ["get-plans-with-cost"],
    queryFn: () => getPlansWithCost(params),
    enabled: !!params.pkg_id,
  });
};
