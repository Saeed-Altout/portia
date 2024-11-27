import { useMutation } from "@tanstack/react-query";
import { sendContactMessage } from "@/api";

export const useSendContactMessage = () => {
  return useMutation({
    mutationKey: ["send-contact-message"],
    mutationFn: (values: ISendContactMessageRequest) => sendContactMessage(values),
  });
};
