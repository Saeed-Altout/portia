import { useMutation } from "@tanstack/react-query";

import { verificationCode } from "@/api";
import { useResponse } from "@/hooks";
import { setToken } from "@/utils/cookie";

export const useVerifyCode = () => {
  const { Success, Error } = useResponse();
  return useMutation({
    mutationKey: ["verification-code"],
    mutationFn: (values: IVerificationCodeRequest) => verificationCode(values),
    onSuccess(res) {
      setToken(res.access_token);
      Success({ message: res.message, redirectTo: "/auth/email-confirmed" });
    },
    onError(error) {
      Error({ error: error, message: "Something went wrong!" });
    },
  });
};
