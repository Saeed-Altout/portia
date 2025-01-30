import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";
import { getFcmToken, setFcmToken } from "./local-storage";
import { notificationHandler } from "./notification-handler";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase App
const firebaseApp = initializeApp(firebaseConfig);

// Initialize messaging only on client-side
export const messaging =
  typeof window !== "undefined" ? getMessaging(firebaseApp) : null;

// Request permissions and generate FCM token
export const requestPermissions = async () => {
  try {
    const permission = await Notification.requestPermission();
    if (permission === "granted") {
      const messaging = getMessaging(firebaseApp);
      const token = await getToken(messaging, {
        vapidKey: process.env.NEXT_PUBLIC_FIREBASE_VAPID_KEY,
      });

      if (token) {
        setFcmToken(token);
        return token;
      }
    }
    return null;
  } catch (error) {
    console.error("Notification permission error:", error);
    return null;
  }
};

// Listener for incoming messages with proper type safety
export const onMessageListener = () => {
  return new Promise((resolve, reject) => {
    if (!messaging) {
      reject(new Error("Firebase Messaging is not initialized"));
      return;
    }

    try {
      return onMessage(messaging, (payload) => {
        resolve(payload);
      });
    } catch (error) {
      reject(error);
    }
  });
};

export const initializeFirebaseMessaging = async () => {
  try {
    const existingToken = getFcmToken();
    if (existingToken) return existingToken;

    const currentPermission = await notificationHandler.checkPermission();

    if (currentPermission === "denied") {
      notificationHandler.showBlockedPermissionDialog();
      return null;
    }

    if (currentPermission === "default") {
      return new Promise((resolve) => {
        notificationHandler.showPermissionPrompt({
          onAllow: async () => {
            const permission = await notificationHandler.requestPermission();
            if (permission === "granted") {
              const token = await requestPermissions();
              resolve(token);
            } else {
              resolve(null);
            }
          },
          onDeny: () => {
            resolve(null);
          },
          onDismiss: () => {
            resolve(null);
          },
        });
      });
    }

    if (currentPermission === "granted") {
      return await requestPermissions();
    }

    return null;
  } catch (error) {
    console.error("Firebase messaging initialization error:", error);
    return null;
  }
};
