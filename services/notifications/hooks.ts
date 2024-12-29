import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  getNotifications,
  markAllNotifications,
  markNotificationById,
} from "./apis";

export const useGetNotificationsQuery = () => {
  return useQuery({
    queryKey: ["notifications"],
    queryFn: () => getNotifications(),
  });
};

export const useMarkAllNotificationsMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["mark-all-notifications"],
    mutationFn: () => markAllNotifications(),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["notifications"] });
    },
  });
};

export const useMarkNotificationByIdMutation = (id: string) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["mark-notification-by-id", `id:${id}`],
    mutationFn: () => markNotificationById(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["notifications"] });
    },
  });
};
