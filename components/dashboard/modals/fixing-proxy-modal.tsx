"use client";

import * as React from "react";
import { BeatLoader } from "react-spinners";
import { toast } from "sonner";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

import { useFixingProxy } from "@/components/dashboard/hooks/modals/use-fixing-proxy";

export const FixingProxyModal = () => {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const fixingProxy = useFixingProxy();

  const onSubmit = () => {
    setIsLoading(true);
    try {
      setTimeout(() => {
        fixingProxy.onClose();
        setIsLoading(false);
        toast.success("Fixing my proxy successfully");
      }, 2000);
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  const onChange = (open: boolean) => {
    if (!open && !isLoading) {
      fixingProxy.onClose();
    }
  };

  return (
    <Dialog open={fixingProxy.isOpen} onOpenChange={onChange}>
      <DialogContent className="max-w-sm sm:max-w-[480px]">
        <DialogHeader>
          <DialogTitle className="text-lg font-medium">
            Fixing proxy (id:24) troublesShoot
          </DialogTitle>
          <DialogDescription className="text-sm font-normal">
            if the proxy doesn&apos;t work for any reason click this button
            below to diagnostics
          </DialogDescription>
        </DialogHeader>
        <div className="flex justify-between items-center gap-5">
          <Button
            type="button"
            variant="outline"
            className="basis-1/2"
            disabled={isLoading}
            onClick={() => fixingProxy.onClose()}
          >
            Cancel
          </Button>
          <Button
            type="button"
            variant="default"
            className="basis-1/2"
            disabled={isLoading}
            onClick={onSubmit}
          >
            {isLoading ? <BeatLoader color="#fff" /> : "Fix my proxy"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
