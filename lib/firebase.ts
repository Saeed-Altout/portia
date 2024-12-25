import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyD6ViOS3uD-XwyOGT1z_ssPdOqV0MN-6Rg",
  authDomain: "portia-57398.firebaseapp.com",
  projectId: "portia-57398",
  storageBucket: "portia-57398.firebasestorage.app",
  messagingSenderId: "513569291218",
  appId: "1:513569291218:web:8c98cdccff4f97b3fd660b",
  measurementId: "G-FQD36DDW6Q",
};

const firebaseApp = initializeApp(firebaseConfig);
export const messaging = getMessaging(firebaseApp);

export const requestPermissions = async () => {
  try {
    const permission = await Notification.requestPermission();

    if (permission === "granted") {
      const token = await getToken(messaging, {
        vapidKey: process.env.NEXT_PUBLIC_FIREBASE_VAPID_KEY,
      });
      localStorage.setItem("fcm_token", token);
    } else if (permission === "denied") {
      console.error(
        "Permission for notifications was denied. Please enable it from browser settings."
      );
    }
  } catch (error) {
    console.error("FCM Token generation failed:", error);
  }
};

export const onMessageListener = () => {
  return new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      console.log(payload);
      resolve(payload);
    });
  });
};
