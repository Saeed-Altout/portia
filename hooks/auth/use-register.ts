import { useMutation } from "@tanstack/react-query";

import { register } from "@/api";
import { useResponse } from "@/hooks";
import { setEmail } from "@/utils/cookie";
export const useRegister = () => {
  const { Success, Error } = useResponse();

  return useMutation({
    mutationKey: ["register"],
    mutationFn: (values: IRegisterRequest) => register(values),
    onSuccess(res, req) {
      setEmail(req.email);
      Success({
        message: res.message,
        redirectTo: `/auth/verify-email?email=${req.email}`,
      });
    },
    onError(error) {
      Error({ error: error, message: "Something went wrong!" });
    },
  });
};
