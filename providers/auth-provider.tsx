"use client";

import { useEffect } from "react";
import { useAuthStore } from "@/stores/use-auth-store";
import {
  useGetUserQuery,
  useAddFcmTokenMutation,
} from "@/services/settings/hooks";
import { getFcmToken } from "@/lib/local-storage";
import { initializeFirebaseMessaging } from "@/lib/firebase";
import { notificationHandler } from "@/lib/notification-handler";

export function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}): React.JSX.Element {
  const { setUser } = useAuthStore();
  const { mutateAsync: addFcmToken } = useAddFcmTokenMutation();
  const { data, refetch } = useGetUserQuery();

  const setupNotifications = async () => {
    try {
      const permission = await notificationHandler.checkPermission();

      if (permission === "denied") {
        notificationHandler.showBlockedPermissionDialog();
        return;
      }

      let currentToken = getFcmToken();
      if (!currentToken) {
        currentToken = (await initializeFirebaseMessaging()) as string;
      }

      if (currentToken && !data?.data?.notification_enable) {
        await addFcmToken({ fcm_token: currentToken });
        await refetch();
      }
    } catch (err) {
      console.error(err);
    }
  };

  // Handle initial user data
  useEffect(() => {
    if (data?.data) {
      setUser(data.data);
    }
  }, [data, setUser]);

  // Handle notification setup
  useEffect(() => {
    const initNotifications = async () => {
      if (data?.data && !data.data.notification_enable) {
        await setupNotifications();
      }
    };

    initNotifications();
  }, [data?.data?.notification_enable]);

  // Register service worker
  useEffect(() => {
    if (typeof window !== "undefined" && "serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("/firebase-messaging-sw.js")
        .catch((err) => {
          console.error(err);
        });
    }
  }, []);

  return <>{children}</>;
}
