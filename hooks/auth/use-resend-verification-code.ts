import { AxiosError } from "axios";
import { useMutation } from "@tanstack/react-query";

import { resendVerificationCode } from "@/api";
import { useResponse } from "@/hooks";

export const useResendVerificationCode = () => {
  const { Success, Error } = useResponse();
  return useMutation({
    mutationKey: ["resend-verification-code"],
    mutationFn: (values: IResendVerificationCodeRequest) =>
      resendVerificationCode(values),
    onSuccess: (data) => {
      Success({
        message: data.message || "Resend verification code is Success.",
      });
    },
    onError: (error) => {
      Error({ error, message: "Resend verification code is failed." });
    },
  });
};
