import { AxiosError } from "axios";
import { useMutation } from "@tanstack/react-query";

import { useResponse } from "@/features/auth/hooks";
import { sendResetEmail } from "@/features/auth/api";

export const useSendResetEmail = () => {
  const { Success, Error } = useResponse();
  return useMutation<
    SendResetEmailResponseType,
    AxiosError<ErrorResponse>,
    SendResetEmailRequestType
  >({
    mutationKey: ["send-reset-email"],
    mutationFn: (email: SendResetEmailRequestType) => sendResetEmail(email),
    onSuccess(res, req) {
      Success({
        message: res.message,
        redirectTo: `/auth/verify-reset-email?email=${req.email}`,
      });
    },
    onError(error) {
      Error({ error });
    },
  });
};
