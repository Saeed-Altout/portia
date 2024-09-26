import { AxiosError } from "axios";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";

import { _axios } from "@/lib/axios";
import { authService } from "@/api/auth-service";

const key = ["logout"];

export const useLogoutMutation = (
  options?: UseMutationOptions<void, AxiosError<ErrorResponse>, void>
) => {
  return useMutation<void, AxiosError<ErrorResponse>, void>({
    mutationKey: key,
    mutationFn: () => authService.logout(),
    ...options,
  });
};
