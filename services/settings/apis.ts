import { apiClient } from "@/api/config";

export const getPorts = async (
  params: Record<string, any>
): Promise<RootResponse<IPorts>> => {
  const filteredParams = Object.fromEntries(
    Object.entries(params).filter(
      ([, value]) =>
        value !== undefined && value !== null && value !== 0 && value !== "0"
    )
  );
  try {
    const res = await apiClient.get("/get-ports", {
      params: { ...filteredParams },
    });
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const updateUserProfile = async (
  values: IUpdateUserProfileCredentials
): Promise<RootResponse<null>> => {
  try {
    const response = await apiClient.post("/update-user-profile", values);
    return response.data;
  } catch (error) {
    throw error;
  }
};
