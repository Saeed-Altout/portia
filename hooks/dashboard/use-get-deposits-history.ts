import { useQuery } from "@tanstack/react-query";
import { getDepositsHistory } from "@/api/dashboard/get-deposits-history";
export const useGetDepositsHistory = (params: Record<string, any>) => {
  return useQuery({
    queryKey: ["get-deposits-history", params],
    queryFn: () => getDepositsHistory(params),
  });
};
