import { useQuery } from "@tanstack/react-query";
import { getDepositHistories } from "@/api";
export const useGetDepositsHistories = (params: Record<string, any>) => {
  return useQuery({
    queryKey: ["get-deposits-histories", params],
    queryFn: () => getDepositHistories(params),
  });
};
