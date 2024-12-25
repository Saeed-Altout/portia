"use client";
import { requestPermissions } from "@/lib/firebase";
import { useEffect } from "react";

export const NotificationProviders = () => {
  useEffect(() => {
    requestPermissions();
  }, []);

  return null;
};
