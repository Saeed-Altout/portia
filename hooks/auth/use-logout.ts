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
      Success({ message: req.message });
      clear();
      localStorage.clear();
      location.reload();
    },
    onError(error) {
      Error({ error: error, message: "Something went wrong!" });
    },
  });
};
