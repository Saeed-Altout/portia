import { createRoot, Root } from "react-dom/client";
import * as React from "react";
import {
  NotificationPrompt,
  NotificationType,
} from "@/components/notification-prompt";

export type NotificationPermissionState = "default" | "granted" | "denied";

interface NotificationPromptOptions {
  onAllow: () => void;
  onDeny: () => void;
  onDismiss?: () => void;
}

class NotificationHandler {
  private static instance: NotificationHandler;
  private permissionState: NotificationPermissionState = "default";
  private container: HTMLDivElement | null = null;
  private root: Root | null = null;

  private constructor() {
    if (typeof window !== "undefined") {
      this.permissionState = Notification.permission;
    }
  }

  private createContainer(): void {
    if (this.container) {
      document.body.removeChild(this.container);
      this.root?.unmount();
    }

    this.container = document.createElement("div");
    document.body.appendChild(this.container);
    this.root = createRoot(this.container);
  }

  private cleanup(): void {
    if (this.container) {
      document.body.removeChild(this.container);
      this.root?.unmount();
      this.container = null;
      this.root = null;
    }
  }

  static getInstance(): NotificationHandler {
    if (!NotificationHandler.instance) {
      NotificationHandler.instance = new NotificationHandler();
    }
    return NotificationHandler.instance;
  }

  async checkPermission(): Promise<NotificationPermissionState> {
    if (typeof window === "undefined") return "default";
    return Notification.permission;
  }

  async requestPermission(): Promise<NotificationPermissionState> {
    try {
      const permission = await Notification.requestPermission();
      this.permissionState = permission;
      return permission;
    } catch (error) {
      console.error("Error requesting notification permission:", error);
      return "default";
    }
  }

  private createPromptElement(
    type: NotificationType,
    options: NotificationPromptOptions
  ): React.ReactElement {
    return React.createElement(NotificationPrompt, {
      open: true,
      onOpenChange: (open: boolean) => {
        if (!open) {
          this.cleanup();
          options.onDismiss?.();
        }
      },
      onAllow: () => {
        this.cleanup();
        options.onAllow();
      },
      onDeny: () => {
        this.cleanup();
        options.onDeny();
      },
      onDismiss: () => {
        this.cleanup();
        options.onDismiss?.();
      },
      type,
    });
  }

  showPermissionPrompt(options: NotificationPromptOptions): void {
    this.createContainer();
    const element = this.createPromptElement("request", options);
    this.root?.render(element);
  }

  showBlockedPermissionDialog(): void {
    this.createContainer();
    const element = this.createPromptElement("blocked", {
      onAllow: () => this.cleanup(),
      onDeny: () => this.cleanup(),
      onDismiss: () => this.cleanup(),
    });
    this.root?.render(element);
  }
}

export const notificationHandler = NotificationHandler.getInstance();
