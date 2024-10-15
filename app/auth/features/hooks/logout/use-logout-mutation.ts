import { AxiosError } from "axios";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";

import { logout } from "@/app/auth/features/api/logout";

export const useLogoutMutation = (
  options?: UseMutationOptions<void, AxiosError<ErrorResponse>, void>
) => {
  return useMutation<void, AxiosError<ErrorResponse>, void>({
    mutationKey: ["logout"],
    mutationFn: () => logout(),
    ...options,
  });
};
