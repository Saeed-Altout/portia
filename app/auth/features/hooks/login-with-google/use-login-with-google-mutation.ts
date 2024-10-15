import { AxiosError } from "axios";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";

import { loginWithGoogle } from "@/app/auth/features/api/login-with-google";

export const useLoginWithGoogleMutation = (
  options?: UseMutationOptions<void, AxiosError<ErrorResponse>, void>
) => {
  return useMutation<void, AxiosError<ErrorResponse>, void>({
    mutationKey: ["login-with-google"],
    mutationFn: () => loginWithGoogle(),
    ...options,
  });
};
