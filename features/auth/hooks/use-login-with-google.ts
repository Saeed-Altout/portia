import { AxiosError } from "axios";
import { useMutation } from "@tanstack/react-query";

import { loginWithGoogle } from "@/features/auth/api";

export const useLoginWithGoogle = () => {
  return useMutation<void, AxiosError<ErrorResponse>, void>({
    mutationKey: ["login-with-google"],
    mutationFn: () => loginWithGoogle(),
  });
};
