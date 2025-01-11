import { useQuery } from "@tanstack/react-query";
import { getDepositsHistories, getDepositStatistics } from "./apis";

export const useGetDepositsHistoriesQuery = () => {
  return useQuery({
    queryKey: ["deposits"],
    queryFn: () => getDepositsHistories(),
  });
};

export const useGetDepositsStatisticsQuery = () => {
  return useQuery({
    queryKey: ["deposits-statistics"],
    queryFn: () => getDepositStatistics(),
  });
};
