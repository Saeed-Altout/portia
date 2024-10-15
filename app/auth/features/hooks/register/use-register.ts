import * as z from "zod";

import { registerSchema } from "@/app/auth/features/schemas";
import {
  useHandleResponse,
  useRegisterMutation,
} from "@/app/auth/features/hooks";

import cookieStorage from "@/services/cookie-storage";

export const useRegister = () => {
  const { handleSuccess, handleError } = useHandleResponse();
  const { mutateAsync: registerMutation, isPending } = useRegisterMutation();

  const onSubmit = async (data: z.infer<typeof registerSchema>) => {
    try {
      const res = await registerMutation(data);
      cookieStorage.setEmail(data.email);
      handleSuccess({
        message: res.message,
        redirectTo: `/auth/verify-email?email=${data.email}`,
      });
    } catch (error) {
      handleError({ error });
    }
  };

  return { onSubmit, isPending };
};
