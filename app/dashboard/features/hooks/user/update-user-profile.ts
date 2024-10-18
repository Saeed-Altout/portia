import * as z from "zod";

import { getModifiedData } from "@/utils";

import { userProfileSchema } from "@/app/dashboard/features/schemas";

import { useUpdateUserProfileMutation } from "./update-user-profile-mutation";
import { useResponse } from "@/features/auth/hooks";

export const useUpdateUserProfile = () => {
  const { Success, Error } = useResponse();
  const { mutateAsync: updateUserProfileMutation, isPending } =
    useUpdateUserProfileMutation();

  const onSubmit = async (data: z.infer<typeof userProfileSchema>) => {
    const modifiedData = getModifiedData(data) as UpdateUserProfileRequestType;
    try {
      const res = await updateUserProfileMutation(modifiedData);
      Success({ message: res.message[0] });
    } catch (error) {
      Error({ error });
    }
  };
  return { onSubmit, isPending };
};
