import { AxiosError } from "axios";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";

import { verificationCode } from "@/app/auth/features/api/verification-code";

export const useVerifyCodeMutation = (
  options?: UseMutationOptions<
    VerificationCodeResponse,
    AxiosError<ErrorResponse>,
    VerificationCodeRequestType
  >
) => {
  return useMutation<
    VerificationCodeResponse,
    AxiosError<ErrorResponse>,
    VerificationCodeRequestType
  >({
    mutationKey: ["verification-code"],
    mutationFn: (data: VerificationCodeRequestType) => verificationCode(data),
    ...options,
  });
};
