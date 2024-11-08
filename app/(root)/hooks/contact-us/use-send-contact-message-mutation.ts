import { AxiosError } from "axios";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";

import { websiteService } from "@/app/(root)/services";

export const useSendContactMessageMutation = (
  options?: UseMutationOptions<
    SendContactMessageResponse,
    AxiosError<ErrorResponse>,
    SendContactMessageBody
  >
) => {
  return useMutation<
    SendContactMessageResponse,
    AxiosError<ErrorResponse>,
    SendContactMessageBody
  >({
    mutationKey: ["send-contact-message"],
    mutationFn: (data: SendContactMessageBody) =>
      websiteService.sendContactMessage(data),
    ...options,
  });
};
