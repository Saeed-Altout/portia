import { useMutation } from "@tanstack/react-query";

import { logout } from "@/api";
import { useResponse } from "@/hooks";
import { clear } from "@/utils/cookie";

export const useLogout = () => {
  const { Success, Error } = useResponse();
  return useMutation({
    mutationKey: ["logout"],
    mutationFn: () => logout(),
    onSuccess(req) {
      clear();
      localStorage.clear();
      Success({ message: req.message, redirectTo: "/auth/login" });
    },
    onError(error) {
      Error({ error: error, message: "Something went wrong!" });
    },
  });
};
