import { AxiosError } from "axios";
import { useMutation } from "@tanstack/react-query";

import { resendVerificationCode } from "@/api";
import { useResponse } from "@/hooks";

export const useResendVerificationCode = () => {
  const { Success, Error } = useResponse();
  return useMutation({
    mutationKey: ["resend-verification-code"],
    mutationFn: (values: IResendVerificationCodeRequest) => resendVerificationCode(values),
    onSuccess: (res) => {
      Success({ message: res.message });
    },
    onError: (error) => {
      Error({ error: error, message: "Something went wrong!" });
    },
  });
};
