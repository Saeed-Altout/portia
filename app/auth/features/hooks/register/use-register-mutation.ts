import { AxiosError } from "axios";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";

import { register } from "@/app/auth/features/api/register";

export const useRegisterMutation = (
  options?: UseMutationOptions<
    RegisterResponseType,
    AxiosError<ErrorResponse>,
    RegisterRequestType
  >
) => {
  return useMutation<
    RegisterResponseType,
    AxiosError<ErrorResponse>,
    RegisterRequestType
  >({
    mutationKey: ["register"],
    mutationFn: (values: RegisterRequestType) => register(values),
    ...options,
  });
};
