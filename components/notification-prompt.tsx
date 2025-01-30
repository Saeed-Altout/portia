"use client";

import * as React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export type NotificationType = "request" | "blocked";

interface NotificationPromptProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onAllow: () => void;
  onDeny: () => void;
  onDismiss: () => void;
  type: NotificationType;
}

export function NotificationPrompt({
  open,
  onOpenChange,
  onAllow,
  onDeny,
  onDismiss,
  type,
}: NotificationPromptProps): React.JSX.Element {
  if (type === "blocked") {
    return (
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-red-600">
              Notifications Blocked
            </DialogTitle>
            <DialogDescription className="space-y-4">
              <p>To receive important updates, please enable notifications:</p>
              <ol className="list-decimal ml-4 space-y-2">
                <li>
                  Click the lock/info icon in your browser&apos;s address bar
                </li>
                <li>Find &quot;Notifications&quot; in the site settings</li>
                <li>Change the setting to &quot;Allow&quot;</li>
                <li>Refresh this page</li>
              </ol>
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => onOpenChange(false)}>
              Got it
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Enable Notifications</DialogTitle>
          <DialogDescription>
            Get instant updates about your account and important announcements.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="flex-col sm:flex-row gap-2">
          <Button variant="outline" onClick={onDismiss}>
            Ask Later
          </Button>
          <Button variant="outline" onClick={onDeny}>
            Never
          </Button>
          <Button onClick={onAllow}>Enable</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
