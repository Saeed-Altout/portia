import { AxiosError } from "axios";
import { useMutation } from "@tanstack/react-query";

import { useResponse } from "@/features/dashboard/hooks";
import { updateUserProfile } from "@/features/dashboard/api";

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
