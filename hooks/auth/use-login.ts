import { AxiosError } from "axios";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";

import { _axios } from "@/lib/axios";
import { authService } from "@/api/auth-service";

const key = ["login"];

export const useLoginMutation = (
  options?: UseMutationOptions<
    LoginResponse,
    AxiosError<ErrorResponse>,
    LoginBody
  >
) => {
  return useMutation<LoginResponse, AxiosError<ErrorResponse>, LoginBody>({
    mutationKey: key,
    mutationFn: (user: LoginBody) => authService.login(user),
    ...options,
  });
};
