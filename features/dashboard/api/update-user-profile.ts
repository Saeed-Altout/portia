import { _axios } from "@/lib/axios";
import { AxiosResponse } from "axios";

export const updateUserProfile = async (
  values: UpdateUserProfileRequestType
): Promise<UpdateUserProfileResponse> => {
  try {
    const response: AxiosResponse<UpdateUserProfileResponseType> =
      await _axios.post(process.env.NEXT_PUBLIC_USER_PROFILE_ENDPOINT!, values);
    return response.data;
  } catch (error) {
    throw error;
  }
};
