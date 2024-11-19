import { AxiosError } from "axios";
import { useMutation } from "@tanstack/react-query";

import { useResponse } from "@/hooks/dashboard";
import { updateUserProfile } from "@/api/dashboard";

export const useUpdateUserProfile = () => {
  const { Success, Error } = useResponse();
  return useMutation<
    UpdateUserProfileResponseType,
    AxiosError<ErrorResponse>,
    UpdateUserProfileRequestType
  >({
    mutationKey: ["update-user-profile"],
    mutationFn: (values: UpdateUserProfileRequestType) =>
      updateUserProfile(values),
    onSuccess: (res) => {
      Success({ message: res.message });
    },
    onError: (error) => {
      Error({ error });
    },
  });
};
