import { AxiosError } from "axios";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";

import { sendResetEmail } from "@/app/auth/features/api/send-reset-email";

export const useSendResetEmailMutation = (
  options?: UseMutationOptions<
    SendResetEmailResponseType,
    AxiosError<ErrorResponse>,
    SendResetEmailRequestType
  >
) => {
  return useMutation<
    SendResetEmailResponseType,
    AxiosError<ErrorResponse>,
    SendResetEmailRequestType
  >({
    mutationKey: ["send-reset-email"],
    mutationFn: (email: SendResetEmailRequestType) => sendResetEmail(email),
    ...options,
  });
};
