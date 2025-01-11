import { useQuery } from "@tanstack/react-query";
import { getDeposits, getDepositStatistics } from "./apis";

export const useGetDepositsQuery = () => {
  return useQuery({
    queryKey: ["deposits"],
    queryFn: () => getDeposits(),
  });
};

export const useGetDepositsStatisticsQuery = () => {
  return useQuery({
    queryKey: ["deposits-statistics"],
    queryFn: () => getDepositStatistics(),
  });
};
