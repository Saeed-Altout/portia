import { AxiosError } from "axios";
import { useMutation } from "@tanstack/react-query";

import { useResponse } from "@/features/auth/hooks";
import { verificationCode } from "@/features/auth/api";
import { setAccessToken } from "@/lib/auth";

export const useVerifyCode = () => {
  const { Success, Error } = useResponse();
  return useMutation<
    VerificationCodeResponse,
    AxiosError<ErrorResponse>,
    VerificationCodeRequestType
  >({
    mutationKey: ["verification-code"],
    mutationFn: (values: VerificationCodeRequestType) =>
      verificationCode(values),
    onSuccess(res) {
      Success({
        message: res.message,
        refresh: true,
        redirectTo: "/auth/email-confirmed",
      });
      setAccessToken(res.access_token);
    },
    onError(error) {
      Error({ error });
    },
  });
};
