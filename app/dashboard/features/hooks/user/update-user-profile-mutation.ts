import { AxiosError } from "axios";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";

import { updateUserProfile } from "@/app/dashboard/features/api/user-profile";

export const useUpdateUserProfileMutation = (
  options?: UseMutationOptions<
    UpdateUserProfileResponseType,
    AxiosError<ErrorResponse>,
    UpdateUserProfileRequestType
  >
) => {
  return useMutation<
    UpdateUserProfileResponseType,
    AxiosError<ErrorResponse>,
    UpdateUserProfileRequestType
  >({
    mutationKey: ["update-user-profile"],
    mutationFn: (values: UpdateUserProfileRequestType) =>
      updateUserProfile(values),
    ...options,
  });
};
