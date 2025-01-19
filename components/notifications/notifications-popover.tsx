"use client";

import { useState, useRef } from "react";
import {
  Bell,
  XCircle,
  ChevronDown,
  Eye,
  EyeOff,
  Check,
  Loader2,
  CheckCheck,
  Circle,
} from "lucide-react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { formatDistanceToNow } from "date-fns";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import { NotificationDialog } from "./notification-dialog";
import {
  useGetNotificationsQuery,
  useMarkAllNotificationsMutation,
  useMarkNotificationByIdMutation,
} from "@/services/notifications/hooks";
import { cn } from "@/lib/utils";

export const NotificationsPopover = () => {
  const [selectedNotification, setSelectedNotification] =
    useState<INotification | null>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [showMore, setShowMore] = useState<boolean>(false);
  const notificationsRef = useRef<HTMLDivElement>(null);

  const {
    data: notifications,
    isSuccess,
    isLoading,
  } = useGetNotificationsQuery();

  const { mutate: markAsRead } = useMarkNotificationByIdMutation();
  const { mutate: markAllAsRead } = useMarkAllNotificationsMutation();

  const displayedNotifications =
    isSuccess && showMore
      ? notifications?.data
      : notifications?.data?.slice(0, 5);

  // Check if there are unread notifications
  const hasUnreadNotifications = notifications?.data?.some(
    (notification) => !notification.read_at
  );

  const handleMarkAsRead = (id: string) => {
    markAsRead(id);
  };

  const handleMarkAllAsRead = () => {
    markAllAsRead();
  };

  const handleShowMore = () => {
    setShowMore((prev) => !prev);
    notificationsRef.current?.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const renderLabel = (type: INotification["type"]) => {
    const badges = {
      success: "bg-emerald-50 text-emerald-700",
      warning: "bg-amber-50/50 text-amber-700 rounded-full",
      new: "bg-blue-50 text-blue-700",
      error: "bg-rose-50 text-rose-700",
    };

    return (
      <Badge
        variant="outline"
        className={cn(
          "text-[10px] font-medium px-2.5 py-0.5",
          badges[type as keyof typeof badges]
        )}
      >
        {type}
      </Badge>
    );
  };

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <Button size="icon" variant="ghost" className="relative">
          <Bell className="h-4 w-4 text-gray-500" />
          {/* Unread Notification Indicator */}
          {hasUnreadNotifications && (
            <div className="absolute top-2 right-2">
              <div className="h-2 w-2 bg-red-500 rounded-full" />
            </div>
          )}
          <span className="sr-only">Notifications</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent align="end" className="w-80 p-0">
        <div className="flex justify-between items-center py-2 px-4">
          <h3 className="text-lg font-semibold">Notifications</h3>
          <div className="flex items-center gap-2">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    onClick={handleMarkAllAsRead}
                    variant="ghost"
                    size="icon"
                    className="hover:text-[#03055B]"
                  >
                    <CheckCheck className="h-4 w-4" />
                    <span className="sr-only">Mark all as read</span>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Mark all as read</TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <Button
              onClick={() => setIsOpen(false)}
              variant="ghost"
              size="icon"
            >
              <XCircle className="h-5 w-5" />
              <span className="sr-only">Close</span>
            </Button>
          </div>
        </div>
        <Separator />
        <div
          ref={notificationsRef}
          className="max-h-[375px] overflow-y-auto p-4"
        >
          {isLoading ? (
            <div className="flex items-center justify-center h-[30px]">
              <Loader2 className="h-5 w-5 animate-spin" />
            </div>
          ) : (
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
                  {displayedNotifications?.map((notification) => (
                    <motion.div
                      key={notification.id}
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{
                        opacity: 0,
                        y: -20,
                        transition: { duration: 0.3 },
                      }}
                      className={cn(
                        "group relative p-3 rounded-lg cursor-pointer transition-all duration-200",
                        !notification.read_at
                          ? "bg-white shadow-sm"
                          : "hover:bg-slate-50"
                      )}
                      onClick={() => setSelectedNotification(notification)}
                    >
                      <div className="flex gap-3">
                        {!notification.read_at && (
                          <motion.div layoutId={`unread-${notification.id}`}>
                            <Circle className="h-2 w-2 mt-1 fill-[#03055B]" />
                          </motion.div>
                        )}
                        <div className="flex-1 space-y-1">
                          <motion.h2
                            layout="position"
                            className="text-sm font-medium text-slate-900"
                          >
                            {notification.title}
                          </motion.h2>
                          <motion.p
                            layout="position"
                            className="text-xs text-slate-500 line-clamp-2"
                          >
                            {notification.message}
                          </motion.p>
                          <motion.div
                            layout="position"
                            className="flex items-center justify-between pt-2"
                          >
                            <div className="flex items-center gap-2">
                              {renderLabel(notification.type)}
                              <span className="text-[10px] text-slate-400">
                                {formatDistanceToNow(
                                  new Date(notification.date),
                                  { addSuffix: true }
                                )}
                              </span>
                            </div>
                            <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                              {!notification.read_at && (
                                <TooltipProvider>
                                  <Tooltip>
                                    <TooltipTrigger asChild>
                                      <Button
                                        size="icon"
                                        variant="ghost"
                                        className="h-6 w-6 hover:text-[#03055B]"
                                        onClick={(e) => {
                                          e.stopPropagation();
                                          handleMarkAsRead(notification.id);
                                        }}
                                      >
                                        <Check className="h-3.5 w-3.5" />
                                        <span className="sr-only">
                                          Mark as read
                                        </span>
                                      </Button>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                      Mark as read
                                    </TooltipContent>
                                  </Tooltip>
                                </TooltipProvider>
                              )}
                            </div>
                          </motion.div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </motion.div>
              <NotificationDialog
                notification={selectedNotification}
                isOpen={!!selectedNotification}
                onClose={() => setSelectedNotification(null)}
              />
            </LayoutGroup>
          )}
        </div>
        <Button
          onClick={handleShowMore}
          className="sticky bottom-0 rounded-none w-full py-3 text-[#03055E] bg-gradient-to-t from-[#D4D4FF] to-[#E8E8FF] hover:from-[#C0C0FF] hover:to-[#D4D4FF] transition-all duration-300 overflow-hidden"
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
                className="flex items-center gap-2 text-sm"
              >
                <EyeOff className="h-4 w-4" />
                <span>Show Less</span>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="flex items-center gap-2 text-sm"
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
