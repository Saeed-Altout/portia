import { AxiosError } from "axios";
import { apiClient } from "@/lib/api";

class UserService {
  static async getUserDetails(): Promise<ApiResponse<IUser>> {
    try {
      const { data } = await apiClient.get(
        process.env.NEXT_PUBLIC_GET_USER_DETAILS as string
      );
      return data;
    } catch (error) {
      if (error instanceof AxiosError) {
        throw new Error(
          error.response?.data?.message || "Failed to get user details"
        );
      }
      throw error;
    }
  }

  static async getUserBalance(): Promise<
    RootResponse<{ id: number; user_balance: string }>
  > {
    try {
      const { data } = await apiClient.get(
        process.env.NEXT_PUBLIC_GET_USER_BALANCE as string
      );
      return data;
    } catch (error) {
      if (error instanceof AxiosError) {
        throw new Error(
          error.response?.data?.message || "Failed to get user balance"
        );
      }
      throw error;
    }
  }

  static async updateUserProfile(
    values: IUpdateUserProfileCredentials
  ): Promise<RootResponse<null>> {
    try {
      const { data } = await apiClient.post(
        process.env.NEXT_PUBLIC_UPDATE_USER_PROFILE as string,
        values
      );
      return data;
    } catch (error) {
      if (error instanceof AxiosError) {
        throw new Error(
          error.response?.data?.message || "Failed to update user profile"
        );
      }
      throw error;
    }
  }
}

export const userService = new UserService();
