import { useMutation } from "@tanstack/react-query";

import { sendResetEmail } from "@/api";
import { useResponse } from "@/hooks";

export const useSendResetEmail = () => {
  const { Success, Error } = useResponse();
  return useMutation({
    mutationKey: ["send-reset-email"],
    mutationFn: (values: ISendResetEmailRequest) => sendResetEmail(values),
    onSuccess(data, req) {
      Success({
        message: data.message || "Send your email is Success.",
        redirectTo: `/auth/verify-reset-email?email=${req.email}`,
      });
    },
    onError(error) {
      Error({ error, message: "Send your email is failed." });
    },
  });
};
