import { apiClient } from "@/lib/api";

export const getUserBalance = async (): Promise<Root<IUserBalance>> => {
  try {
    const res = await apiClient.get("/get-user-balance");
    return res.data;
  } catch (error) {
    throw error;
  }
};
