import { useState } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { cn } from "@/lib/utils";
import { INotification } from "@/stores/use-notifications-store";
import { NotificationListItem } from "./notification-list-item";
import { NotificationDialog } from "./notification-dialog";

interface NotificationListProps {
  notifications: INotification[];
  onDelete: (id: number) => void;
  onMarkAsRead: (id: number) => void;
  showMore: boolean;
}

export const NotificationList = ({
  notifications,
  onDelete,
  onMarkAsRead,
  showMore,
}: NotificationListProps) => {
  const [selectedNotification, setSelectedNotification] =
    useState<INotification | null>(null);
  const displayedNotifications = showMore
    ? notifications
    : notifications.slice(0, 5);

  return (
    <LayoutGroup>
      <motion.div
        layout
        initial={false}
        className={cn(
          "space-y-4 transition-all",
          showMore ? "max-h-[800px]" : "max-h-[375px]"
        )}
        animate={{
          height: showMore ? "auto" : "375px",
          transition: {
            duration: 0.4,
            ease: [0.4, 0, 0.2, 1],
          },
        }}
      >
        <AnimatePresence mode="wait">
          {displayedNotifications.map((notification) => (
            <NotificationListItem
              key={notification.id}
              notification={notification}
              onDelete={onDelete}
              onMarkAsRead={onMarkAsRead}
              onClick={(notification) => {
                onMarkAsRead(notification.id);
                setSelectedNotification(notification);
              }}
            />
          ))}
        </AnimatePresence>
      </motion.div>
      <NotificationDialog
        notification={selectedNotification}
        isOpen={!!selectedNotification}
        onClose={() => setSelectedNotification(null)}
      />
    </LayoutGroup>
  );
};
