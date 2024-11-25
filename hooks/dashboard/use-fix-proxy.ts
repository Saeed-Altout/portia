"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";

import { useResponse } from "@/hooks/dashboard";
import { fixProxy } from "@/api/dashboard/fix-proxy";
import { useModalStore, useProxyStore } from "@/stores";

export const useFixProxy = () => {
  const { Success, Error } = useResponse();
  const { fixProxyModalOnClose } = useModalStore();
  const { setProxy } = useProxyStore();
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["fix-proxy"],
    mutationFn: (values: FixProxyRequestType) => fixProxy(values),
    onSuccess: () => {
      fixProxyModalOnClose();
      queryClient.invalidateQueries({
        queryKey: ["get-active-proxies"],
      });
      setProxy({} as ProxyState);
      Success({ message: "Fix proxy completed" });
    },
    onError: (error) => {
      Error({ error });
    },
  });
};
