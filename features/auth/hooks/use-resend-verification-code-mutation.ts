import { AxiosError } from "axios";
import { useMutation } from "@tanstack/react-query";

import { resendVerificationCode } from "@/features/auth/api";

export const useResendVerificationCode = () => {
  return useMutation<
    ResendVerificationCodeResponseType,
    AxiosError<ErrorResponse>,
    ResendVerificationCodeRequestType
  >({
    mutationKey: ["resend-verification-code"],
    mutationFn: (email: ResendVerificationCodeRequestType) =>
      resendVerificationCode(email),
  });
};
