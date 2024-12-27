import { motion } from "framer-motion";
import { formatDistanceToNow } from "date-fns";
import { Trash2, Check, Circle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { INotification } from "@/stores/use-notifications-store";
import { cn } from "@/lib/utils";

interface NotificationListItemProps {
  notification: INotification;
  onDelete: (id: number) => void;
  onMarkAsRead: (id: number) => void;
  onClick: (notification: INotification) => void;
}

export const NotificationListItem = ({
  notification,
  onDelete,
  onMarkAsRead,
  onClick,
}: NotificationListItemProps) => {
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
        className={cn("text-[10px] font-medium px-2.5 py-0.5", badges[type])}
      >
        {type}
      </Badge>
    );
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20, transition: { duration: 0.3 } }}
      className={cn(
        "group relative p-3 rounded-lg cursor-pointer transition-all duration-200",
        !notification.read ? "bg-white shadow-sm" : "hover:bg-slate-50"
      )}
      onClick={() => onClick(notification)}
    >
      <div className="flex gap-3">
        {!notification.read && (
          <motion.div layoutId={`unread-${notification.id}`}>
            <Circle className="h-2 w-2 mt-1.5 fill-[#03055B] text-[#03055B]" />
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
                {formatDistanceToNow(new Date(notification.timestamp), {
                  addSuffix: true,
                })}
              </span>
            </div>
            <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
              {!notification.read && (
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        size="icon"
                        variant="ghost"
                        className="h-6 w-6 hover:text-[#03055B]"
                        onClick={(e) => {
                          e.stopPropagation();
                          onMarkAsRead(notification.id);
                        }}
                      >
                        <Check className="h-3.5 w-3.5" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>Mark as read</TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              )}
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      size="icon"
                      variant="ghost"
                      className="h-6 w-6 hover:text-rose-600 transition-colors"
                      onClick={(e) => {
                        e.stopPropagation();
                        onDelete(notification.id);
                      }}
                    >
                      <Trash2 className="h-3.5 w-3.5" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>Delete notification</TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};
