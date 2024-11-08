import * as z from "zod";
import { formContactSchema } from "@/app/(root)/schema";
import {
  useHandleResponse,
  useSendContactMessageMutation,
} from "@/app/(root)/hooks";

export const useSendContactMessage = () => {
  const { handleSuccess, handleError } = useHandleResponse();
  const { mutateAsync: sendContactMessageMutation, isPending } =
    useSendContactMessageMutation();

  const onSubmit = async (data: z.infer<typeof formContactSchema>) => {
    try {
      const res = await sendContactMessageMutation(data);
      handleSuccess(res.message);
    } catch (error) {
      handleError(error);
    }
  };

  return { onSubmit, isPending };
};
