import { ENDPOINTS } from "@/config/constants";
import { apiClient } from "@/lib/api";

export const getNotifications = async (): Promise<
  RootResponse<INotification[]>
> => {
  try {
    const res = await apiClient.get(ENDPOINTS.GET_NOTIFICATIONS);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const markAllNotifications = async (): Promise<RootResponse<null>> => {
  try {
    const res = await apiClient.post(ENDPOINTS.MARK_ALL_NOTIFICATIONS);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const markNotificationById = async (
  id: string
): Promise<RootResponse<null>> => {
  try {
    const res = await apiClient.post(`${ENDPOINTS.MARK_NOTIFICATION}/${id}`);
    return res.data;
  } catch (error) {
    throw error;
  }
};
