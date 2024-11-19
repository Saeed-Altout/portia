import { AxiosError } from "axios";
import { useMutation } from "@tanstack/react-query";

import { logout } from "@/api/auth";
import { useResponse } from "@/hooks/auth";
import { removeAccessToken, removeEmail } from "@/lib/auth";

export const useLogout = () => {
  const { Success, Error } = useResponse();
  return useMutation<LogoutResponseType, AxiosError<ErrorResponse>, void>({
    mutationKey: ["logout"],
    mutationFn: () => logout(),
    onSuccess(req) {
      removeAccessToken();
      removeEmail();
      Success({
        message: req.message,
        refresh: true,
        redirectTo: "/auth/login",
      });
    },
    onError(error) {
      Error({ error });
    },
  });
};
