import { useMutation, useQuery } from "@tanstack/react-query";
import { getPorts, sendContactMessage, updateUserProfile } from "./apis";
import { useResponse } from "@/hooks";

export const useGetPortsQuery = (params: Record<string, any>) => {
  return useQuery({
    queryKey: ["ports", params],
    queryFn: () => getPorts(params),
    enabled: !!+params.id,
  });
};

export const useUpdateUserProfileMutation = () => {
  const { Success, Error } = useResponse();
  return useMutation({
    mutationKey: ["update-user-profile"],
    mutationFn: (values: IUpdateUserProfileCredentials) =>
      updateUserProfile(values),
    onSuccess: (data) => {
      Success({ message: data.message || "Update profile Success." });
    },
    onError: (error) => {
      Error({
        error,
        message: "Update profile failed.",
      });
    },
  });
};

export const useSendContactMessageMutation = () => {
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
