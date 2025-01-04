"use client";
import { requestPermissions } from "@/lib/firebase";
import { useEffect } from "react";

export const NotificationProviders = () => {
  useEffect(() => {
    const requestPermissionAsync = async () => {
      try {
        await requestPermissions(); // Await the result of permission request
      } catch (error) {
        console.error("Failed to request notification permissions:", error);
        // Handle errors gracefully, maybe show a message to the user
      }
    };

    requestPermissionAsync();
  }, []);

  return null;
};
