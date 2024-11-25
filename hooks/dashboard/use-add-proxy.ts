"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";

import { addProxy } from "@/api/dashboard";
import { useResponse } from "@/hooks/dashboard";
import { useModalStore, useProxyStore } from "@/stores";

export const useAddProxy = () => {
  const { Success, Error } = useResponse();
  const { activeProxyModalOnClose, setStep } = useModalStore();
  const queryClient = useQueryClient();
  const { setProxy } = useProxyStore();

  return useMutation({
    mutationKey: ["add-proxy"],
    mutationFn: (values: AddProxyRequestType) => addProxy(values),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["get-active-proxies"],
      });
      setStep(1);
      activeProxyModalOnClose();
      setProxy({} as ProxyState);
      Success({ message: "Added proxy completed" });
    },
    onError: (error) => {
      Error({ error });
    },
  });
};
