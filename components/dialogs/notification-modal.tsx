"use client";

import { Badge } from "@/components/ui/badge";
import { Modal } from "@/components/ui/modal";
import { ModalType } from "@/config/constants";
import { useModalStore } from "@/stores/use-modal-store";
import { useNotificationsStore } from "@/stores/use-notifications-store";
import { formatDistanceToNow, format } from "date-fns";

export const NotificationModal = () => {
  const { isOpen, type, onClose } = useModalStore();
  const isOpenModal = isOpen && type === ModalType.NOTIFICATION;

  const { selectedNotification } = useNotificationsStore();

  const renderLabel = (label: string) => {
    switch (label) {
      case "success":
        return (
          <Badge className="text-lg bg-[#EDFFFF] hover:bg-[#EDFFFF]/90 text-[#035E5C]">
            success
          </Badge>
        );
      case "warning":
        return (
          <Badge className="text-lg bg-[#FFEED4] hover:bg-[#FFEED4]/90 text-[#5E3B03]">
            warning
          </Badge>
        );
      case "new":
        return (
          <Badge className="text-lg bg-[#EDEDFF] hover:bg-[#EDEDFF]/90 text-[#03055E]">
            new
          </Badge>
        );
      case "error":
        return (
          <Badge className="text-lg bg-[#FFEDF0] hover:bg-[#FFEDF0]/90 text-[#5E0311]">
            error
          </Badge>
        );
      default:
        return null;
    }
  };

  if (!selectedNotification) return null;

  return (
    <Modal
      title={selectedNotification.title}
      isOpen={isOpenModal}
      onClose={() => onClose()}
    >
      <p>{selectedNotification.message}</p>
      <div className="flex items-center justify-between gap-4 pt-2">
        {renderLabel(selectedNotification.type)}
        <div className="flex items-center flex-wrap gap-2">
          <span className="text-xs md:text-sm text-[#24242B]">
            {format("2024-12-15T10:30:00Z", "dd/MM/yyy")}
          </span>
          <span className="text-xs md:text-sm text-[#24242B]">
            {formatDistanceToNow("2024-12-15T10:30:00Z", {
              addSuffix: true,
            })}
          </span>
        </div>
      </div>
    </Modal>
  );
};
