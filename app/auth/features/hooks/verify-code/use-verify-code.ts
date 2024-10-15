import * as z from "zod";

import { verifyCodeSchema } from "@/app/auth/features/schemas";
import {
  useHandleResponse,
  useVerifyCodeMutation,
} from "@/app/auth/features/hooks";

export const useVerifyCode = (email: string) => {
  const { handleSuccess, handleError } = useHandleResponse();
  const { mutateAsync: verifyCodeMutation, isPending } =
    useVerifyCodeMutation();

  const onSubmit = async (values: z.infer<typeof verifyCodeSchema>) => {
    try {
      const res = await verifyCodeMutation({ code: values.code, email });
      handleSuccess({
        message: res.message,
        redirectTo: "/auth/email-confirmed",
        token: res.access_token,
      });
    } catch (error) {
      handleError({ error });
    }
  };

  return { onSubmit, isPending };
};
