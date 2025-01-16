import * as z from "zod";
import { userProfileSchema } from "@/schemas";

export const getModifiedData = (
  freshData: z.infer<typeof userProfileSchema>,
  cloneData: IUser
): Partial<z.infer<typeof userProfileSchema>> => {
  const modifiedData: Partial<z.infer<typeof userProfileSchema>> = {};

  for (const [key, value] of Object.entries(freshData)) {
    if (value !== "" && value !== cloneData[key as keyof IUser]) {
      modifiedData[key as keyof z.infer<typeof userProfileSchema>] = value;
    }
  }

  return modifiedData;
};
