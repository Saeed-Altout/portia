import { useMutation, useQuery } from "@tanstack/react-query";
import {
  addDeposit,
  getDepositsHistories,
  getDepositStatistics,
  getWayPayment,
} from "./apis";
import { useResponse } from "@/hooks/use-response";

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

export const useDepositMutation = () => {
  const { Error } = useResponse();

  return useMutation({
    mutationKey: ["add-deposit"],
    mutationFn: (values: IDepositRequest) => addDeposit(values),
    onSuccess: (data) => {
      window.open(data.data.url, "_blank");
    },
    onError: (error) => {
      Error({
        error,
        message: "Deposit failed.",
      });
    },
  });
};

export const useGetWayPayment = () => {
  return useQuery({
    queryKey: ["get-way-payment"],
    queryFn: () => getWayPayment(),
  });
};
