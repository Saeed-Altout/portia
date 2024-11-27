import { useMutation } from "@tanstack/react-query";
import { sendContactMessage } from "@/api";
import { useResponse } from "@/hooks";

export const useSendContactMessage = () => {
  const { Success, Error } = useResponse();

  return useMutation({
    mutationKey: ["send-contact-message"],
    mutationFn: (values: ISendContactMessageRequest) => sendContactMessage(values),
    onSuccess: (res) => {
      Success({ message: res.message });
    },
    onError: (error) => {
      Error({ error: error, message: "Something went wrong!" });
    },
  });
};
