import { AxiosError } from "axios";
import { useMutation } from "@tanstack/react-query";

import { login } from "@/features/auth/api";
import { useResponse } from "@/features/auth/hooks";
import { setAccessToken, setSession } from "@/lib/auth";

export const useLogin = (isRememberMe: boolean) => {
  const { Success, Error } = useResponse();
  return useMutation<
    LoginResponseType,
    AxiosError<ErrorResponse>,
    LoginRequestType
  >({
    mutationKey: ["login"],
    mutationFn: async (data) => login(data),
    onSuccess: (res, req) => {
      const expirationDays = isRememberMe ? +res.expires_in.split(" ")[0] : 0;
      setAccessToken(res.access_token, {
        days: +res.expires_in.split(" ")[0],
      });
      setSession(req, {
        days: expirationDays,
      });
      Success({
        message: res.message,
        refresh: true,
        redirectTo: "/dashboard",
      });
    },
    onError(error) {
      Error({ error });
    },
  });
};
