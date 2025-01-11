import { apiClient } from "@/lib/api";

export const getUserBalance = async (): Promise<RootResponse<IUserBalance>> => {
  try {
    const res = await apiClient.get("/get-user-balance");
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const getUser = async (): Promise<RootResponse<IUser>> => {
  try {
    const res = await apiClient.get("/get-user-details");
    return res.data;
  } catch (error) {
    throw error;
  }
};
