"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";

import { useResponse } from "@/hooks/dashboard";
import { editProxy } from "@/api/dashboard/edit-proxy";

export const useEditProxy = () => {
  const { Success, Error } = useResponse();
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["edit-proxy"],
    mutationFn: (values: EditProxyRequestType) => editProxy(values),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["get-active-proxies"],
      });
      Success({ message: "Edit proxy completed" });
    },
    onError: (error) => {
      Error({ error });
    },
  });
};
