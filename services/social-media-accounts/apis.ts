import { apiClient } from "@/lib/api";

export const getSocialMediaAccounts = async (): Promise<
  Root<ISocialMediaAccounts>
> => {
  try {
    const res = await apiClient.get("/social-media-accounts");
    return res.data;
  } catch (error) {
    throw error;
  }
};
