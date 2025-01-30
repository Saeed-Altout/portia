import { ENDPOINTS } from "@/config/constants";
import { apiClient } from "@/lib/api";
import { filterParams } from "@/utils/filter-params";

export const getUser = async (): Promise<ApiResponse<IUser>> => {
  try {
    const response = await apiClient.get(ENDPOINTS.GET_USER);
    return response.data;
  } catch (error) {
    throw error;
  }
};

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
  values: IUpdateUserProfileCredentials
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
  values: ISendContactMessageCredentials
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
): Promise<RootResponse<ICostPlans>> => {
  const filteredParams = filterParams(params);
  try {
    const response = await apiClient.get(ENDPOINTS.GET_COST_PLANS, {
      params: { ...filteredParams },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getSupportLinks = async (): Promise<ApiResponse<ILink[]>> => {
  try {
    const response = await apiClient.get<ApiResponse<ILink[]>>(
      ENDPOINTS.SUPPORT_LINKS
    );
    return response.data;
  } catch (error) {
    console.error("Error in getSupportLinks:", error);
    throw error;
  }
};

export const getSocialMediaAccounts = async (): Promise<
  ApiResponse<ISocialMediaLink[]>
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

export const addFcmToken = async (values: {
  fcm_token: string;
}): Promise<RootResponse<null>> => {
  try {
    const res = await apiClient.post(
      process.env.NEXT_PUBLIC_ADD_FCM_TOKEN!,
      values
    );
    return res.data;
  } catch (error) {
    throw error;
  }
};
