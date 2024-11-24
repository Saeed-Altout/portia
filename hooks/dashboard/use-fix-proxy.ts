"use client";

import { useMutation } from "@tanstack/react-query";

import { useResponse } from "@/hooks/dashboard";
import { fixProxy } from "@/api/dashboard/fix-proxy";
import { useModalStore } from "@/stores";

export const useFixProxy = () => {
  const { Success, Error } = useResponse();
  const { fixProxyModalOnClose } = useModalStore();

  return useMutation({
    mutationKey: ["fix-proxy"],
    mutationFn: (values: FixProxyRequestType) => fixProxy(values),
    onSuccess: () => {
      fixProxyModalOnClose();
      Success({ message: "Fix proxy completed" });
    },
    onError: (error) => {
      Error({ error });
    },
  });
};
