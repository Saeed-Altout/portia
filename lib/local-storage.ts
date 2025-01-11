import { FCM_TOKEN_KEY } from "@/config/constants";

export const getFcmToken = () => {
  const fcmToken = localStorage.getItem(FCM_TOKEN_KEY);

  if (!fcmToken) {
    return null;
  }

  return fcmToken;
};
