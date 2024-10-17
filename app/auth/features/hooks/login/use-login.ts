import * as z from "zod";

import { loginSchema } from "@/app/auth/features/schemas";
import { useHandleResponse, useLoginMutation } from "@/app/auth/features/hooks";

import cookieStorageService from "@/services/cookie-storage";

export const useLogin = (isRememberMe: boolean) => {
  const { handleSuccess, handleError } = useHandleResponse();
  const { mutateAsync: loginMutation, isPending } = useLoginMutation();

  const onSubmit = async (data: z.infer<typeof loginSchema>) => {
    try {
      const res = await loginMutation(data);
      isRememberMe && cookieStorageService.setMemoryUser(data, { days: 10 });
      !isRememberMe && cookieStorageService.removeMemoryUser();
      cookieStorageService.setEmail(data.email);
      handleSuccess({
        message: res.message,
        refresh: true,
        redirectTo: "/dashboard",
      });
    } catch (error) {
      handleError({ error });
    }
  };

  return { onSubmit, isPending };
};
