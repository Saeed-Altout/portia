import { AxiosError } from "axios";
import { useMutation } from "@tanstack/react-query";

import { logout } from "@/api/auth";
import { useResponse } from "@/hooks/auth";
import { removeToken, removeEmail, removeUser } from "@/utils/cookie";

export const useLogout = () => {
  const { Success, Error } = useResponse();
  return useMutation<LogoutResponseType, AxiosError<ErrorResponse>, void>({
    mutationKey: ["logout"],
    mutationFn: () => logout(),
    onSuccess(req) {
      removeToken();
      removeEmail();
      removeUser();
      localStorage.clear();
      window.location.assign("/auth/login");
      Success({
        message: req.message,
      });
    },
    onError(error) {
      Error({ error });
    },
  });
};
