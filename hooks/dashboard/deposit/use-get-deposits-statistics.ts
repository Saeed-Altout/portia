import { useQuery } from "@tanstack/react-query";
import { getDepositStatistics } from "@/api";
export const useGetDepositsStatistics = () => {
  return useQuery({
    queryKey: ["get-deposits-statistics"],
    queryFn: () => getDepositStatistics(),
  });
};
