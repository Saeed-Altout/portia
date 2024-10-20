import { AxiosError } from "axios";
import { useMutation } from "@tanstack/react-query";

import { useResponse } from "@/features/auth/hooks";
import { setNewPassword } from "@/features/auth/api";
import { setAccessToken } from "@/lib/auth";

export const useSetNewPassword = () => {
  const { Success, Error } = useResponse();
  return useMutation<
    SetNewPasswordResponseType,
    AxiosError<ErrorResponse>,
    SetNewPasswordRequestType
  >({
    mutationKey: ["set-new-password"],
    mutationFn: (values: SetNewPasswordRequestType) => setNewPassword(values),
    onSuccess(res) {
      setAccessToken(res.access_token);
      Success({
        message: res.message,
        redirectTo: "/auth/password-reset",
      });
    },
    onError(error) {
      Error({ error });
    },
  });
};
