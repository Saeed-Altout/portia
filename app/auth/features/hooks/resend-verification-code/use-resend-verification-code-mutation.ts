import { AxiosError } from "axios";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";

import { resendVerificationCode } from "@/app/auth/features/api/resend-verification-code";

export const useResendVerificationCodeMutation = (
  options?: UseMutationOptions<
    ResendVerificationCodeResponseType,
    AxiosError<ErrorResponse>,
    ResendVerificationCodeRequestType
  >
) => {
  return useMutation<
    ResendVerificationCodeResponseType,
    AxiosError<ErrorResponse>,
    ResendVerificationCodeRequestType
  >({
    mutationKey: ["resend-verification-code"],
    mutationFn: (email: ResendVerificationCodeRequestType) =>
      resendVerificationCode(email),
    ...options,
  });
};
