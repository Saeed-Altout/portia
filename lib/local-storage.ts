const FCM_TOKEN_KEY = "fcm_token";

export const getFcmToken = (): string | null => {
  if (typeof window === "undefined") return null;
  return localStorage.getItem(FCM_TOKEN_KEY);
};

export const setFcmToken = (token: string): void => {
  if (typeof window === "undefined") return;
  localStorage.setItem(FCM_TOKEN_KEY, token);
};

export const removeFcmToken = (): void => {
  if (typeof window === "undefined") return;
  localStorage.removeItem(FCM_TOKEN_KEY);
};
