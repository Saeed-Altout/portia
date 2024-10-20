import { AxiosError } from "axios";
import { useMutation } from "@tanstack/react-query";

import { resendVerificationCode } from "@/features/auth/api";
import { useResponse } from "@/features/auth/hooks";

export const useResendVerificationCode = () => {
  const { Success, Error } = useResponse();
  return useMutation<
    ResendVerificationCodeResponseType,
    AxiosError<ErrorResponse>,
    ResendVerificationCodeRequestType
  >({
    mutationKey: ["resend-verification-code"],
    mutationFn: (email: ResendVerificationCodeRequestType) =>
      resendVerificationCode(email),
    onSuccess: (res) => {
      Success({ message: res.message });
    },
    onError: (error) => {
      Error({ error });
    },
  });
};
