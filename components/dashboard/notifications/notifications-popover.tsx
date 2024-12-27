"use client";
import { useState, useRef } from "react";
import { Bell, XCircle, ChevronDown, Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";
import { NotificationList } from "./notification-list";
import {
  INotification,
  useNotificationsStore,
} from "@/stores/use-notifications-store";
import { useModalStore } from "@/stores/use-modal-store";
import { ModalType } from "@/config/enums";
import { motion } from "framer-motion";

export const NotificationsPopover = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const notificationsRef = useRef<HTMLDivElement>(null);

  const {
    notifications,
    setSelectedNotification,
    markAsRead,
    deleteNotification,
  } = useNotificationsStore();
  const { onOpen } = useModalStore();

  const handleNotificationClick = (notification: INotification) => {
    onOpen(ModalType.NOTIFICATION);
    setSelectedNotification(notification);
  };

  const handleShowMore = () => {
    setShowMore((prev) => !prev);
    notificationsRef.current?.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <Button size="icon" variant="ghost">
          <Bell className="h-4 w-4 text-gray-500" />
          <span className="sr-only">Notifications</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent align="end" className="w-80 p-0">
        <div className="flex justify-between items-center py-2 px-4">
          <h3 className="text-lg font-semibold">Notifications</h3>
          <Button onClick={() => setIsOpen(false)} variant="ghost" size="icon">
            <XCircle className="h-5 w-5" />
            <span className="sr-only">Close</span>
          </Button>
        </div>
        <Separator />
        <div
          ref={notificationsRef}
          className="max-h-[375px] overflow-y-auto p-4"
        >
          <NotificationList
            notifications={notifications}
            onDelete={deleteNotification}
            onMarkAsRead={markAsRead}
            showMore={showMore}
          />
        </div>
        <Button
          onClick={handleShowMore}
          className="sticky bottom-0 w-full py-3 text-[#03055E] bg-gradient-to-t from-[#D4D4FF] to-[#E8E8FF] hover:from-[#C0C0FF] hover:to-[#D4D4FF] transition-all duration-300 overflow-hidden"
        >
          <motion.div
            className="flex items-center justify-center gap-2"
            initial={false}
            animate={{
              scale: showMore ? 0.95 : 1,
            }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 25,
            }}
          >
            {showMore ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="flex items-center gap-2"
              >
                <EyeOff className="h-4 w-4" />
                <span>Show Less</span>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="flex items-center gap-2"
              >
                <Eye className="h-4 w-4" />
                <span>View All Notifications</span>
              </motion.div>
            )}
            <motion.div
              animate={{
                rotate: showMore ? 180 : 0,
                scale: showMore ? 0.8 : 1,
              }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 25,
              }}
            >
              <ChevronDown className="h-4 w-4" />
            </motion.div>
          </motion.div>
          <motion.div
            className="absolute inset-0 bg-white/10"
            initial={false}
            animate={{
              opacity: showMore ? 0.1 : 0,
            }}
            transition={{ duration: 0.2 }}
          />
        </Button>
      </PopoverContent>
    </Popover>
  );
};
