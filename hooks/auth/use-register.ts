import { useMutation } from "@tanstack/react-query";

import { register } from "@/api";
import { useResponse } from "@/hooks";
import { setEmail } from "@/utils/cookie";
export const useRegister = () => {
  const { Success, Error } = useResponse();

  return useMutation({
    mutationKey: ["register"],
    mutationFn: (values: IRegisterRequest) => register(values),
    onSuccess(data, req) {
      setEmail(req.email);
      Success({
        message: data.message || "Register is Success.",
        redirectTo: `/auth/verify-email?email=${req.email}`,
      });
    },
    onError(error) {
      Error({ error, message: "Register is failed." });
    },
  });
};
