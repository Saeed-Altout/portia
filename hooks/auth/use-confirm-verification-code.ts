import { AxiosError } from "axios";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";

import { _axios } from "@/lib/axios";
import { authService } from "@/services/auth-service";

const key = ["confirm-verification-code"];

export const useConfirmVerificationCodeMutation = (
  options?: UseMutationOptions<
    ConfirmVerificationCodeResponse,
    AxiosError<ErrorResponse>,
    ConfirmVerificationCodeBody
  >
) => {
  return useMutation<
    ConfirmVerificationCodeResponse,
    AxiosError<ErrorResponse>,
    ConfirmVerificationCodeBody
  >({
    mutationKey: key,
    mutationFn: (user: ConfirmVerificationCodeBody) =>
      authService.confirmVerificationCode(user),
    ...options,
  });
};
