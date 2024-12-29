import { create } from "zustand";
import { persist } from "zustand/middleware";

interface NotificationsStore {
  notifications: INotifications;
  setNotifications: (notifications: INotifications) => void;
  addNotification: (notification: INotification) => void;
  markAsRead: (id: string) => void;
  markAllAsRead: () => void;
  clearNotifications: () => void;
}

export const useNotificationsStore = create<NotificationsStore>()(
  persist(
    (set, get) => ({
      notifications: [],

      setNotifications: (notifications) => set({ notifications }),

      addNotification: (notification) =>
        set((state) => ({
          notifications: [notification, ...state.notifications],
        })),

      markAsRead: (id) =>
        set((state) => ({
          notifications: state.notifications.map((n) =>
            n.id === id ? { ...n, isRead: true } : n
          ),
        })),

      markAllAsRead: () =>
        set((state) => ({
          notifications: state.notifications.map((n) => ({
            ...n,
            isRead: true,
          })),
        })),

      clearNotifications: () => set({ notifications: [] }),
    }),
    {
      name: "notifications-storage",
      partialize: (state) => ({ notifications: state.notifications }),
    }
  )
);
