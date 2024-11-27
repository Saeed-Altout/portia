import { useQuery } from "@tanstack/react-query";
import { getDepositsStatistics } from "@/api/dashboard/get-deposits-statistics";
export const useGetDepositsStatistics = () => {
  return useQuery({
    queryKey: ["get-deposits-statistics"],
    queryFn: () => getDepositsStatistics(),
  });
};
