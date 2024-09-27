import { AxiosError } from "axios";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";

import { _axios } from "@/lib/axios";
import { authService } from "@/services/auth-service";
import localStorage from "@/services/local-storage-service";
import cookieStorage from "@/services/cookie-storage-service";

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
    onSuccess: (res: LoginResponse) => {
      localStorage.setAccessToken(res.access_token);
      cookieStorage.setAccessToken(res.access_token, {
        days: +res.expires_in.split(" ")[0],
      });
      console.log(+res.expires_in.split(" ")[0]);
    },
    ...options,
  });
};
