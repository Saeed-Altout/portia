"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";

import { addProxy } from "@/api/dashboard";
import { useResponse } from "@/hooks/dashboard";

export const useAddProxy = () => {
  const { Success, Error } = useResponse();
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["add-proxy"],
    mutationFn: (values: AddProxyRequestType) => addProxy(values),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["get-active-proxies"],
      });
      Success({ message: "Added proxy completed" });
    },
    onError: (error) => {
      Error({ error });
    },
  });
};
