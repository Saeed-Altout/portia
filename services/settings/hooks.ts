import { useMutation, useQuery } from "@tanstack/react-query";
import { getPorts, updateUserProfile } from "./apis";
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
