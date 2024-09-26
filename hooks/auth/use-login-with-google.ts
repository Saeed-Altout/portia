import { AxiosError } from "axios";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";

import { _axios } from "@/lib/axios";
import { authService } from "@/api/auth-service";

const key = ["login-with-google"];

export const useLoginWithGoogleMutation = (
  options?: UseMutationOptions<void, AxiosError<ErrorResponse>, void>
) => {
  return useMutation<void, AxiosError<ErrorResponse>, void>({
    mutationKey: key,
    mutationFn: () => authService.loginWithGoogle(),
    ...options,
  });
};
