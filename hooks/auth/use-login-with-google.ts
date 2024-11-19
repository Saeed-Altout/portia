import { AxiosError } from "axios";
import { useMutation } from "@tanstack/react-query";

import { loginWithGoogle } from "@/api/auth";

export const useLoginWithGoogle = () => {
  return useMutation<void, AxiosError<ErrorResponse>, void>({
    mutationKey: ["login-with-google"],
    mutationFn: () => loginWithGoogle(),
  });
};
