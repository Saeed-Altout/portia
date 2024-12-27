import { create } from "zustand";

export interface INotification {
  id: number;
  title: string;
  message: string;
  type: "success" | "warning" | "new" | "error";
  timestamp: string;
  read: boolean;
}

// Dummy notifications data
const dummyNotifications: INotification[] = [
  {
    id: 1,
    title: "System Update",
    message: "A new system update has been successfully installed.",
    type: "success",
    timestamp: new Date().toISOString(),
    read: false,
  },
  {
    id: 2,
    title: "Payment Reminder",
    message:
      "Your monthly subscription is due in 3 days. Please make a payment to avoid service disruption.",
    type: "warning",
    timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
    read: false,
  },
  {
    id: 3,
    title: "New Feature: IP Rotation",
    message:
      "Try our new automated IP rotation feature for better proxy management!",
    type: "new",
    timestamp: new Date(Date.now() - 48 * 60 * 60 * 1000).toISOString(),
    read: true,
  },
  {
    id: 4,
    title: "Security Alert",
    message: "Unusual login attempt detected from IP: 192.168.1.1",
    type: "error",
    timestamp: new Date(Date.now() - 72 * 60 * 60 * 1000).toISOString(),
    read: true,
  },
  {
    id: 5,
    title: "Limited Time Offer",
    message: "Get 20% off on annual proxy subscriptions. Use code: PROXY20",
    type: "new",
    timestamp: new Date(Date.now() - 96 * 60 * 60 * 1000).toISOString(),
    read: false,
  },
  {
    id: 6,
    title: "Proxy Performance Update",
    message:
      "Your proxy speeds have increased by 25% due to network optimizations.",
    type: "success",
    timestamp: new Date(Date.now() - 120 * 60 * 60 * 1000).toISOString(),
    read: false,
  },
  {
    id: 7,
    title: "Account Verification",
    message: "Please verify your email address to enable additional features.",
    type: "warning",
    timestamp: new Date(Date.now() - 144 * 60 * 60 * 1000).toISOString(),
    read: true,
  },
  {
    id: 8,
    title: "New Location Available",
    message: "We've added new proxy locations in Asia-Pacific region!",
    type: "new",
    timestamp: new Date(Date.now() - 168 * 60 * 60 * 1000).toISOString(),
    read: false,
  },
  {
    id: 9,
    title: "Maintenance Notice",
    message: "Scheduled maintenance in 48 hours. Service might be interrupted.",
    type: "warning",
    timestamp: new Date(Date.now() - 192 * 60 * 60 * 1000).toISOString(),
    read: false,
  },
  {
    id: 10,
    title: "Bandwidth Alert",
    message: "You've used 80% of your monthly bandwidth allocation.",
    type: "warning",
    timestamp: new Date(Date.now() - 216 * 60 * 60 * 1000).toISOString(),
    read: true,
  },
  {
    id: 11,
    title: "Proxy Expiration",
    message: "5 proxies will expire in the next 7 days.",
    type: "warning",
    timestamp: new Date(Date.now() - 240 * 60 * 60 * 1000).toISOString(),
    read: false,
  },
  {
    id: 12,
    title: "Authentication Update",
    message: "Two-factor authentication has been enabled for your account.",
    type: "success",
    timestamp: new Date(Date.now() - 264 * 60 * 60 * 1000).toISOString(),
    read: true,
  },
  {
    id: 13,
    title: "API Access Granted",
    message: "Your API key has been generated successfully.",
    type: "success",
    timestamp: new Date(Date.now() - 288 * 60 * 60 * 1000).toISOString(),
    read: false,
  },
  {
    id: 14,
    title: "Connection Error",
    message: "Unable to establish connection with proxy server PRX-001.",
    type: "error",
    timestamp: new Date(Date.now() - 312 * 60 * 60 * 1000).toISOString(),
    read: true,
  },
  {
    id: 15,
    title: "Referral Bonus",
    message: "You earned $50 from referral: user@example.com",
    type: "success",
    timestamp: new Date(Date.now() - 336 * 60 * 60 * 1000).toISOString(),
    read: false,
  },
];

interface NotificationsState {
  notifications: INotification[];
  selectedNotification: INotification | null;
  setSelectedNotification: (notification: INotification) => void;
  markAsRead: (id: number) => void;
  deleteNotification: (id: number) => void;
  addNotification: (notification: INotification) => void;
}

export const useNotificationsStore = create<NotificationsState>((set) => ({
  notifications: dummyNotifications,
  selectedNotification: null,
  setSelectedNotification: (notification) =>
    set({ selectedNotification: notification }),
  markAsRead: (id) =>
    set((state) => ({
      notifications: state.notifications.map((n) =>
        n.id === id ? { ...n, read: true } : n
      ),
    })),
  deleteNotification: (id) =>
    set((state) => ({
      notifications: state.notifications.filter((n) => n.id !== id),
    })),
  addNotification: (notification) =>
    set((state) => ({
      notifications: [notification, ...state.notifications],
    })),
}));
