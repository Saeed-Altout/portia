import { useMutation } from "@tanstack/react-query";

import { useResponse } from "@/hooks";
import { deposit } from "@/api";

export const useDeposit = () => {
  const { Error } = useResponse();

  return useMutation({
    mutationKey: ["deposit"],
    mutationFn: (values: IDepositRequest) => deposit(values),
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
