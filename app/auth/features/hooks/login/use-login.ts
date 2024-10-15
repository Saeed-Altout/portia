import * as z from "zod";
import { useEffect, useState } from "react";

import { loginSchema } from "@/app/auth/features/schemas";
import { useHandleResponse, useLoginMutation } from "@/app/auth/features/hooks";

import cookieStorageService from "@/services/cookie-storage";

export const useLogin = (form: any) => {
  const [isRememberMe, setIsRememberMe] = useState<boolean>(false);

  const { handleSuccess, handleError } = useHandleResponse();
  const { mutateAsync: loginMutation, isPending } = useLoginMutation();

  const onSubmit = async (data: z.infer<typeof loginSchema>) => {
    try {
      const res = await loginMutation(data);
      isRememberMe && cookieStorageService.setMemoryUser(data, { days: 10 });
      !isRememberMe && cookieStorageService.removeMemoryUser();
      cookieStorageService.setEmail(data.email);
      handleSuccess({ message: res.message, refresh: true });
    } catch (error) {
      handleError({ error });
    }
  };

  useEffect(() => {
    const currentMemoryUser = cookieStorageService.getMemoryUser();
    if (currentMemoryUser) {
      form.setValue("email", currentMemoryUser.email);
      form.setValue("password", currentMemoryUser.password);
      setIsRememberMe(true);
    }
  }, [form]);

  return { onSubmit, isPending, isRememberMe, setIsRememberMe };
};
