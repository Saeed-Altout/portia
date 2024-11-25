"use client";

import { useMutation } from "@tanstack/react-query";

import { useResponse } from "@/hooks/dashboard";
import { fixProxy } from "@/api/dashboard/fix-proxy";
import { useModalStore, useProxyStore } from "@/stores";

export const useFixProxy = () => {
  const { Success, Error } = useResponse();
  const { fixProxyModalOnClose } = useModalStore();
  const { setProxy } = useProxyStore();

  return useMutation({
    mutationKey: ["fix-proxy"],
    mutationFn: (values: FixProxyRequestType) => fixProxy(values),
    onSuccess: () => {
      fixProxyModalOnClose();
      setProxy({} as ProxyState);
      Success({ message: "Fix proxy completed" });
    },
    onError: (error) => {
      Error({ error });
    },
  });
};
