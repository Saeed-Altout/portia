import { useMutation } from "@tanstack/react-query";

import { verificationCode } from "@/api";
import { useResponse } from "@/hooks";
import { setToken } from "@/utils/cookie";

export const useVerifyCode = () => {
  const { Success, Error } = useResponse();
  return useMutation({
    mutationKey: ["verification-code"],
    mutationFn: (values: IVerificationCodeRequest) => verificationCode(values),
    onSuccess(data) {
      setToken(data.access_token);
      Success({
        message: data.message || "Verify code is success.",
        redirectTo: "/auth/email-confirmed",
      });
    },
    onError(error) {
      Error({ error, message: "Verify code is failed." });
    },
  });
};
