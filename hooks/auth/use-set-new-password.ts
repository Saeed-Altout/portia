import { useMutation } from "@tanstack/react-query";

import { setNewPassword } from "@/api";
import { useResponse } from "@/hooks";
import { setToken } from "@/utils/cookie";

export const useSetNewPassword = () => {
  const { Success, Error } = useResponse();
  return useMutation({
    mutationKey: ["set-new-password"],
    mutationFn: (values: ISetNewPasswordRequest) => setNewPassword(values),
    onSuccess(res) {
      setToken(res.access_token);
      Success({ message: res.message, redirectTo: "/auth/password-reset" });
    },
    onError(error) {
      Error({ error: error, message: "Something went wrong!" });
    },
  });
};
