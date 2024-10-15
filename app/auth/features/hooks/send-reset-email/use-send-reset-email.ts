import * as z from "zod";

import { sendResetEmailSchema } from "@/app/auth/features/schemas";
import {
  useHandleResponse,
  useSendResetEmailMutation,
} from "@/app/auth/features/hooks";

export const useSendResetEmail = () => {
  const { handleSuccess, handleError } = useHandleResponse();

  const { mutateAsync: sendResetEmailMutation, isPending } =
    useSendResetEmailMutation();

  const onSubmit = async (values: z.infer<typeof sendResetEmailSchema>) => {
    try {
      const res = await sendResetEmailMutation(values);
      handleSuccess({
        message: res.message,
        redirectTo: `/auth/verify-reset-email?email=${values.email}`,
      });
    } catch (error) {
      handleError({ error });
    }
  };

  return { onSubmit, isPending };
};
