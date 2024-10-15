import * as z from "zod";

import { newPasswordSchema } from "@/app/auth/features/schemas";
import {
  useHandleResponse,
  useSetNewPasswordMutation,
} from "@/app/auth/features/hooks";

export const useSetNewPassword = (token: string) => {
  const { handleSuccess, handleError } = useHandleResponse();
  const { mutateAsync: setNewPasswordMutation, isPending } =
    useSetNewPasswordMutation();

  const onSubmit = async (data: z.infer<typeof newPasswordSchema>) => {
    try {
      const res = await setNewPasswordMutation({ ...data, token });
      handleSuccess({
        message: res.message,
        redirectTo: "/auth/password-reset",
      });
    } catch (error) {
      handleError({ error });
    }
  };

  return { onSubmit, isPending };
};
