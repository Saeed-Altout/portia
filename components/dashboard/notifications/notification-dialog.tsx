import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { INotification } from "@/stores/use-notifications-store";
import { formatDistanceToNow } from "date-fns";
import { Badge } from "@/components/ui/badge";

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
  if (!notification) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            {notification.title}
            <Badge
              variant={
                notification.type === "error"
                  ? "destructive"
                  : notification.type === "success"
                  ? "secondary"
                  : "default"
              }
            >
              {notification.type}
            </Badge>
          </DialogTitle>
          <DialogDescription className="text-xs text-muted-foreground">
            {formatDistanceToNow(new Date(notification.timestamp), {
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
