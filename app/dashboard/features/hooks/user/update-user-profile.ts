import * as z from "zod";

import { getModifiedData } from "@/utils";

import { useHandleResponse } from "@/app/auth/features/hooks";
import { userProfileSchema } from "@/app/dashboard/features/schemas";

import { useUpdateUserProfileMutation } from "./update-user-profile-mutation";

export const useUpdateUserProfile = () => {
  const { handleSuccess, handleError } = useHandleResponse();
  const { mutateAsync: updateUserProfileMutation, isPending } =
    useUpdateUserProfileMutation();

  const onSubmit = async (data: z.infer<typeof userProfileSchema>) => {
    const modifiedData = getModifiedData(data) as UpdateUserProfileRequestType;
    try {
      const res = await updateUserProfileMutation(modifiedData);
      handleSuccess({ message: res.message });
    } catch (error) {
      handleError({ error });
    }
  };
  return { onSubmit, isPending };
};
