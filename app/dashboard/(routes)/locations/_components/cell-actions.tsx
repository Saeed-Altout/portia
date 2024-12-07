"use client";
import { Info } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useModalStore, useProxyStore } from "@/stores";
import { ModalType } from "@/config/enums";

export const CellActions = ({ data }: { data: ILocation }) => {
  const { onOpen, type } = useModalStore();
  const { setLocation } = useProxyStore();

  const router = useRouter();
  const callback = useSearchParams().get("callback");

  const onSelectProvider = () => {
    setLocation(data);
    console.log(type);

    if (type === ModalType.ADD_PROXY) {
      onOpen(ModalType.ADD_PROXY);
    } else if (type === ModalType.ACTIVE_PROXY) {
      onOpen(ModalType.ACTIVE_PROXY);
    } else if (type === ModalType.EDIT_AUTH_PROXY) {
      onOpen(ModalType.EDIT_AUTH_PROXY);
    } else if (type === ModalType.EDIT_INFO_PROXY) {
      onOpen(ModalType.EDIT_INFO_PROXY);
    }
    router.push(callback ?? "/dashboard");
  };

  return (
    <div className="w-fit ml-auto">
      <Button
        className={cn("bg-[#3F41BF]", data.is_available && "px-5")}
        size="sm"
        disabled={!data.is_available}
        onClick={onSelectProvider}
      >
        {!data.is_available && <Info className="h-3 w-3 mr-1 mb-0.5" />}
        Continue
      </Button>
    </div>
  );
};
