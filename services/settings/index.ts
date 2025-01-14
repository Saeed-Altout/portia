import { ENDPOINTS } from "@/config/constants";
import { apiClient } from "@/lib/api";

export const getPackages = async (): Promise<
  RootResponse<{ id: number; name: string }[]>
> => {
  try {
    const response = await apiClient.get(ENDPOINTS.GET_ALL_PACKAGES);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getTables = async (): Promise<RootResponse<string[]>> => {
  try {
    const response = await apiClient.get(ENDPOINTS.GET_TABLES);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getPorts = async (
  params: Record<string, any>
): Promise<RootResponse<string[]>> => {
  const filteredParams = Object.fromEntries(
    Object.entries(params).filter(
      ([, value]) =>
        value !== undefined && value !== null && value !== 0 && value !== "0"
    )
  );
  try {
    const res = await apiClient.get(ENDPOINTS.GET_PORTS, {
      params: { ...filteredParams },
    });
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const updateUserProfile = async (
  values: UpdateUserProfileCredentials
): Promise<RootResponse<null>> => {
  try {
    const response = await apiClient.post(
      ENDPOINTS.UPDATE_USER_PROFILE,
      values
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const sendContactMessage = async (
  values: SendContactMessageCredentials
): Promise<RootResponse<null>> => {
  try {
    const response = await apiClient.post(
      ENDPOINTS.SEND_CONTACT_MESSAGE,
      values
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const exportTables = async (values: {
  tables: string[];
}): Promise<ArrayBuffer> => {
  try {
    const response = await apiClient.post(ENDPOINTS.EXPORT_TABLES, values, {
      responseType: "arraybuffer",
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getCostPlans = async (
  params: Record<string, any>
): Promise<
  RootResponse<{ plan: { value: number; price: number; duration: number }[] }>
> => {
  const filteredParams = Object.fromEntries(
    Object.entries(params).filter(
      ([, value]) => value !== undefined && value !== null && value !== 0
    )
  );
  try {
    const response = await apiClient.get(ENDPOINTS.GET_COST_PLANS, {
      params: { ...filteredParams },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getSocialMediaAccounts = async (): Promise<
  RootResponse<SocialMediaAccount[]>
> => {
  try {
    const res = await apiClient.get(ENDPOINTS.GET_SOCIAL_MEDIA_ACCOUNTS);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const getUserBalance = async (): Promise<
  RootResponse<{ id: number; user_balance: string }>
> => {
  try {
    const res = await apiClient.get(ENDPOINTS.GET_USER_BALANCE);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const getUser = async (): Promise<RootResponse<User>> => {
  try {
    const res = await apiClient.get(ENDPOINTS.GET_USER_DETAILS);
    return res.data;
  } catch (error) {
    throw error;
  }
};
