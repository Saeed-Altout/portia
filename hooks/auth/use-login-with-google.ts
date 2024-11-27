import { useMutation } from "@tanstack/react-query";

import { loginWithGoogle } from "@/api";
import { useResponse } from "@/hooks";

export const useLoginWithGoogle = () => {
  const { Error } = useResponse();
  return useMutation({
    mutationKey: ["login-with-google"],
    mutationFn: () => loginWithGoogle(),
    onError: (error) => {
      Error({ error: error, message: "Something went wrong!" });
    },
  });
};
