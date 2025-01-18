import { create } from "zustand";

interface NotificationsState {
  notifications: INotification[];
  selectedNotification: INotification | null;
  setSelectedNotification: (notification: INotification) => void;
  markAsRead: (id: number) => void;
  deleteNotification: (id: number) => void;
  addNotification: (notification: INotification) => void;
}

export const useNotificationsStore = create<NotificationsState>((set) => ({
  notifications: [],
  selectedNotification: null,
  setSelectedNotification: (notification) =>
    set({ selectedNotification: notification }),
  markAsRead: (id) =>
    set((state) => ({
      notifications: state.notifications.map((n) =>
        +n.id === id ? { ...n, read: true } : n
      ),
    })),
  deleteNotification: (id) =>
    set((state) => ({
      notifications: state.notifications.filter((n) => +n.id !== id),
    })),
  addNotification: (notification) =>
    set((state) => ({
      notifications: [notification, ...state.notifications],
    })),
}));
