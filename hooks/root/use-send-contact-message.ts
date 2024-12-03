import { useMutation } from "@tanstack/react-query";
import { sendContactMessage } from "@/api";
import { useResponse } from "@/hooks";

export const useSendContactMessage = () => {
  const { Success, Error } = useResponse();

  return useMutation({
    mutationKey: ["send-contact-message"],
    mutationFn: (values: ISendContactMessageRequest) =>
      sendContactMessage(values),
    onSuccess: (data) => {
      Success({ message: data.message || "Send your message Success." });
    },
    onError: (error) => {
      Error({
        error,
        message: "Send your message failed.",
      });
    },
  });
};
