import { useMutation } from "@tanstack/react-query";

import { setNewPassword } from "@/api";
import { useResponse } from "@/hooks";
import { setToken } from "@/utils/cookie";

export const useSetNewPassword = () => {
  const { Success, Error } = useResponse();
  return useMutation({
    mutationKey: ["set-new-password"],
    mutationFn: (values: ISetNewPasswordRequest) => setNewPassword(values),
    onSuccess(data) {
      setToken(data.access_token);
      Success({
        message: data.message || "Set new password is Success.",
        redirectTo: "/auth/password-reset",
      });
    },
    onError(error) {
      Error({ error, message: "Sent new password is failed." });
    },
  });
};
