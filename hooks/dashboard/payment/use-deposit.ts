import { useMutation } from "@tanstack/react-query";

import { useResponse } from "@/hooks";
import { deposit } from "@/api/dashboard/payment";

export const useDeposit = () => {
  const { Success, Error } = useResponse();

  return useMutation({
    mutationKey: ["deposit"],
    mutationFn: (values: IDepositRequest) => deposit(values),
    onSuccess: (data) => {
      Success({ message: data.message || "Deposit Success." });
    },
    onError: (error) => {
      Error({
        error,
        message: "Deposit failed.",
      });
    },
  });
};
