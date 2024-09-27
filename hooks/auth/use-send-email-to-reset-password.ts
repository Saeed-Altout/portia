import { AxiosError } from "axios";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";

import { _axios } from "@/lib/axios";
import { authService } from "@/services/auth-service";

const key = ["send-email-to-reset-password"];

export const useSendEmailToResetPasswordMutation = (
  options?: UseMutationOptions<
    SendEmailToResetPasswordResponse,
    AxiosError<ErrorResponse>,
    SendEmailToResetPasswordBody
  >
) => {
  return useMutation<
    SendEmailToResetPasswordResponse,
    AxiosError<ErrorResponse>,
    SendEmailToResetPasswordBody
  >({
    mutationKey: key,
    mutationFn: (email: SendEmailToResetPasswordBody) =>
      authService.sendEmailToResetPassword(email),
    ...options,
  });
};
