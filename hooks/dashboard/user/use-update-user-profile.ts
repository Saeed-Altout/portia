import { useMutation } from "@tanstack/react-query";

import { updateUserProfile } from "@/api";
import { useResponse } from "@/hooks";

export const useUpdateUserProfile = () => {
  const { Success, Error } = useResponse();
  return useMutation({
    mutationKey: ["update-user-profile"],
    mutationFn: (values: IUpdateUserProfileRequest) => updateUserProfile(values),
    onSuccess: (res) => {
      Success({ message: res.message });
    },
    onError: (error) => {
      Error({ error: error, message: "Something went wrong!" });
    },
  });
};
