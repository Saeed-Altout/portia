import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";
import { setFcmToken } from "./local-storage";

const firebaseConfig = {
  apiKey: "AIzaSyD6ViOS3uD-XwyOGT1z_ssPdOqV0MN-6Rg",
  authDomain: "portia-57398.firebaseapp.com",
  projectId: "portia-57398",
  storageBucket: "portia-57398.firebasestorage.app",
  messagingSenderId: "513569291218",
  appId: "1:513569291218:web:8c98cdccff4f97b3fd660b",
  measurementId: "G-FQD36DDW6Q",
};

// Initialize Firebase App
const firebaseApp = initializeApp(firebaseConfig);

// Check for `window` before initializing messaging to prevent SSR issues
export const messaging =
  typeof window !== "undefined" && "serviceWorker" in navigator
    ? getMessaging(firebaseApp)
    : null;

// Request permissions and generate FCM token
export const requestPermissions = async () => {
  if (!messaging) {
    console.error("Firebase Messaging is not supported in this environment.");
    return;
  }

  try {
    const permission = await Notification.requestPermission();

    if (permission === "granted") {
      const token = await getToken(messaging, {
        vapidKey: process.env.NEXT_PUBLIC_FIREBASE_VAPID_KEY,
      });

      if (token) setFcmToken(token);
    } else {
      console.error(
        "Permission for notifications was denied. Please enable it from browser settings."
      );
    }
  } catch (error) {
    console.error("FCM Token generation failed:", error);
  }
};

// Listener for incoming messages
export const onMessageListener = () => {
  return new Promise((resolve, reject) => {
    if (!messaging) {
      console.error("Firebase Messaging is not initialized.");
      reject(new Error("Firebase Messaging is not initialized."));
      return;
    }

    onMessage(messaging, (payload) => {
      console.log("Message received:", payload);
      resolve(payload);
    });
  });
};
