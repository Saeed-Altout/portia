import { keepPreviousData, useMutation, useQuery } from "@tanstack/react-query";
import {
  addDeposit,
  getDepositsHistories,
  getDepositStatistics,
  getWayPayment,
} from "@/services/deposits";
import { useResponse } from "@/hooks/use-response";

export const useGetDepositsHistoriesQuery = (params: Record<string, any>) => {
  return useQuery({
    queryKey: ["deposits-histories", params],
    queryFn: () => getDepositsHistories(params),
    placeholderData: keepPreviousData,
  });
};

export const useGetDepositsStatisticsQuery = () => {
  return useQuery({
    queryKey: ["deposits-statistics"],
    queryFn: () => getDepositStatistics(),
  });
};

export const useAddDepositMutation = () => {
  const { Error } = useResponse();
  return useMutation({
    mutationKey: ["add-deposit"],
    mutationFn: (values: IDepositCredentials) => addDeposit(values),
    onSuccess: (data) => {
      window.open(data.data.url, "_blank");
    },
    onError: (error) => {
      Error({ error, message: "Deposit failed." });
    },
  });
};

export const useGetWayPaymentQuery = () => {
  return useQuery({
    queryKey: ["get-way-payment"],
    queryFn: () => getWayPayment(),
  });
};
