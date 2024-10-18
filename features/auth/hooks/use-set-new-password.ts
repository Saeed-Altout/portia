import { AxiosError } from "axios";
import { useMutation } from "@tanstack/react-query";

import { useResponse } from "@/features/auth/hooks";
import { setNewPassword } from "@/features/auth/api";

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
      Success({
        message: res.message,
        refresh: true,
        redirectTo: "/auth/password-reset",
      });
    },
    onError(error) {
      Error({ error });
    },
  });
};
