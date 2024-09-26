import { AxiosError } from "axios";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";

import { _axios } from "@/lib/axios";
import { authService } from "@/api/auth-service";

const key = ["set-new-password"];

export const useSetNewPasswordMutation = (
  options?: UseMutationOptions<
    SetNewPasswordResponse,
    AxiosError<ErrorResponse>,
    SetNewPasswordBody
  >
) => {
  return useMutation<
    SetNewPasswordResponse,
    AxiosError<ErrorResponse>,
    SetNewPasswordBody
  >({
    mutationKey: key,
    mutationFn: (user: SetNewPasswordBody) => authService.setNewPassword(user),
    ...options,
  });
};
