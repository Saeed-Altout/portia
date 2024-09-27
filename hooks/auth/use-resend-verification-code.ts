import { AxiosError } from "axios";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";

import { _axios } from "@/lib/axios";
import { authService } from "@/services/auth-service";

const key = ["resend-verification-code"];

export const useResendVerificationCodeMutation = (
  options?: UseMutationOptions<
    ResendVerificationCodeResponse,
    AxiosError<ErrorResponse>,
    ResendVerificationCodeBody
  >
) => {
  return useMutation<
    ResendVerificationCodeResponse,
    AxiosError<ErrorResponse>,
    ResendVerificationCodeBody
  >({
    mutationKey: key,
    mutationFn: (user: ResendVerificationCodeBody) =>
      authService.resendVerificationCode(user),
    ...options,
  });
};
