import { AxiosError } from "axios";
import { useMutation } from "@tanstack/react-query";

import { logout } from "@/features/auth/api";
import { useResponse } from "@/features/auth/hooks";
import { removeAccessToken, removeEmail } from "@/lib/auth";

export const useLogout = () => {
  const { Success, Error } = useResponse();
  return useMutation<
    LogoutResponseType,
    AxiosError<ErrorResponse>,
    LogoutRequestType
  >({
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
