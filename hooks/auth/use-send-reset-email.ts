import { useMutation } from "@tanstack/react-query";

import { sendResetEmail } from "@/api";
import { useResponse } from "@/hooks";

export const useSendResetEmail = () => {
  const { Success, Error } = useResponse();
  return useMutation({
    mutationKey: ["send-reset-email"],
    mutationFn: (values: ISendResetEmailRequest) => sendResetEmail(values),
    onSuccess(res, req) {
      Success({ message: res.message, redirectTo: `/auth/verify-reset-email?email=${req.email}` });
    },
    onError(error) {
      Error({ error: error, message: "Something went wrong!" });
    },
  });
};
