import { AxiosError } from "axios";
import { useMutation } from "@tanstack/react-query";

import { useResponse } from "@/hooks/auth";
import { sendResetEmail } from "@/api/auth";

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
        refresh: true,
        redirectTo: `/auth/verify-reset-email?email=${req.email}`,
      });
    },
    onError(error) {
      Error({ error });
    },
  });
};
