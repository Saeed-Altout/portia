"use client";

import { Info } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

import { ModalType, ROUTES } from "@/config/constants";
import { useProxyStore, useModalStore } from "@/stores";

export const CellActions = ({ data }: { data: ILocation }) => {
  const router = useRouter();
  const callback = useSearchParams().get("redirect");

  const { onOpen, type } = useModalStore();
  const { setProxy, proxy } = useProxyStore();

  const handleSelectLocation = () => {
    setProxy({
      ...proxy,
      service_provider: data.service_provider_name,
      country_name: data.country_name,
      parent_proxy_id: data.id.toString(),
      rotation_time: data.rotation_time.toString(),
    });

    if (type === ModalType.ADD_PROXY) {
      onOpen(ModalType.ADD_PROXY);
    } else if (type === ModalType.RENEW_PROXY) {
      onOpen(ModalType.RENEW_PROXY);
    } else if (type === ModalType.EDIT_INFO_PROXY) {
      onOpen(ModalType.EDIT_INFO_PROXY);
    } else if (type === ModalType.MANAGE_PROXY) {
      onOpen(ModalType.MANAGE_PROXY);
    }
    router.push(callback ?? ROUTES.DASHBOARD_HOME);
  };

  return (
    <div className="w-fit ml-auto">
      <Button
        className={cn("bg-[#3F41BF]", data.is_available && "px-5")}
        size="sm"
        disabled={!data.is_available}
        onClick={handleSelectLocation}
      >
        {!data.is_available && <Info className="h-3 w-3 mr-1 mb-0.5" />}
        Continue
      </Button>
    </div>
  );
};
