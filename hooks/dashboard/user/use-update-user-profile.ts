import { useMutation } from "@tanstack/react-query";

import { updateUserProfile } from "@/api";
import { useResponse } from "@/hooks";

export const useUpdateUserProfile = () => {
  const { Success, Error } = useResponse();
  return useMutation({
    mutationKey: ["update-user-profile"],
    mutationFn: (values: IUpdateUserProfileRequest) =>
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
