import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { formatDistanceToNow } from "date-fns";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface NotificationDialogProps {
  notification: INotification | null;
  isOpen: boolean;
  onClose: () => void;
}

export const NotificationDialog = ({
  notification,
  isOpen,
  onClose,
}: NotificationDialogProps) => {
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

  if (!notification) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            {notification.title}
            {renderLabel(notification.type)}
          </DialogTitle>
          <DialogDescription className="text-xs text-muted-foreground">
            {formatDistanceToNow(new Date(notification.date), {
              addSuffix: true,
            })}
          </DialogDescription>
        </DialogHeader>
        <div className="mt-4">
          <p className="text-sm text-foreground">{notification.message}</p>
        </div>
      </DialogContent>
    </Dialog>
  );
};
