"use client";
import { Info } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useModalStore, useProxyStore } from "@/stores";

export const CellActions = ({ data }: { data: LocationState }) => {
  const { activeProxyModalOnOpen, editProxyModalOnOpen, action } =
    useModalStore();
  const { setLocation } = useProxyStore();

  const router = useRouter();
  const callback = useSearchParams().get("callback");

  const onSelectProvider = () => {
    setLocation(data);
    if (action === "add") {
      activeProxyModalOnOpen();
    } else if (action === "edit") {
      editProxyModalOnOpen();
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
