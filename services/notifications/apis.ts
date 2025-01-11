import { apiClient } from "@/lib/api";

export const getNotifications = async (): Promise<Root<INotifications>> => {
  try {
    const res = await apiClient.get("/notifications/all");
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const markAllNotifications = async (): Promise<Root<null>> => {
  try {
    const res = await apiClient.post("/notifications/mark-all-read");
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const markNotificationById = async (id: string): Promise<Root<null>> => {
  try {
    const res = await apiClient.post(`${"/notifications/mark-as-read"}/${id}`);
    return res.data;
  } catch (error) {
    throw error;
  }
};
