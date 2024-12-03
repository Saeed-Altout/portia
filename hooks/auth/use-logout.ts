import { useMutation } from "@tanstack/react-query";

import { logout } from "@/api";
import { useResponse } from "@/hooks";
import { clear } from "@/utils/cookie";

export const useLogout = () => {
  const { Success, Error } = useResponse();
  return useMutation({
    mutationKey: ["logout"],
    mutationFn: () => logout(),
    onSuccess(data) {
      Success({ message: data.message || "Logout is Success." });
      clear();
      localStorage.clear();
      location.reload();
    },
    onError(error) {
      Error({ error, message: "logout is failed." });
    },
  });
};
