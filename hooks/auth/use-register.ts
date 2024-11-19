import { AxiosError } from "axios";
import { useMutation } from "@tanstack/react-query";

import { register } from "@/api/auth";
import { useResponse } from "@/hooks/auth";
import { setEmail } from "@/lib/auth";

export const useRegister = () => {
  const { Success, Error } = useResponse();
  return useMutation<
    RegisterResponseType,
    AxiosError<ErrorResponse>,
    RegisterRequestType
  >({
    mutationKey: ["register"],
    mutationFn: (values: RegisterRequestType) => register(values),
    onSuccess(res, req) {
      setEmail(req.email);
      Success({
        message: res.message,
        refresh: true,
        redirectTo: `/auth/verify-email?email=${req.email}`,
      });
    },
    onError(error) {
      Error({ error });
    },
  });
};
