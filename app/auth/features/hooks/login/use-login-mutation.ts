import { AxiosError } from "axios";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";

import { login } from "@/app/auth/features/api/login";
import cookieStorage from "@/services/cookie-storage";

export const useLoginMutation = (
  options?: UseMutationOptions<
    LoginResponseType,
    AxiosError<ErrorResponse>,
    LoginRequestType
  >
) => {
  return useMutation<
    LoginResponseType,
    AxiosError<ErrorResponse>,
    LoginRequestType
  >({
    mutationKey: ["login"],
    mutationFn: async (data) => login(data),
    onSuccess: (res: LoginResponseType) => {
      cookieStorage.setAccessToken(res.access_token, {
        days: +res.expires_in.split(" ")[0],
      });
    },
    ...options,
  });
};
