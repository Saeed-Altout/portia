import { apiClient } from "@/lib/api";

export const getNotifications = async (): Promise<
  ApiResponse<INotification[]>
> => {
  try {
    const res = await apiClient.get(process.env.NEXT_PUBLIC_GET_NOTIFICATIONS!);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const markAllNotifications = async (): Promise<ApiResponse<null>> => {
  try {
    const res = await apiClient.post(
      process.env.NEXT_PUBLIC_MARK_ALL_NOTIFICATIONS!
    );
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const markNotificationById = async (
  id: string
): Promise<ApiResponse<null>> => {
  try {
    const res = await apiClient.post(
      `${process.env.NEXT_PUBLIC_MARK_NOTIFICATION}/${id}`
    );
    return res.data;
  } catch (error) {
    throw error;
  }
};
