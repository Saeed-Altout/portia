import { AxiosError } from "axios";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";

import { setNewPassword } from "@/app/auth/features/api/set-new-password";

export const useSetNewPasswordMutation = (
  options?: UseMutationOptions<
    SetNewPasswordResponseType,
    AxiosError<ErrorResponse>,
    SetNewPasswordRequestType
  >
) => {
  return useMutation<
    SetNewPasswordResponseType,
    AxiosError<ErrorResponse>,
    SetNewPasswordRequestType
  >({
    mutationKey: ["set-new-password"],
    mutationFn: (values: SetNewPasswordRequestType) => setNewPassword(values),
    ...options,
  });
};
