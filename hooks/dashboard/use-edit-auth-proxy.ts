"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";

import { useResponse } from "@/hooks/dashboard";
import { editAuthProxy } from "@/api/dashboard/edit-auth-proxy";

export const useEditAuthProxy = () => {
  const { Success, Error } = useResponse();
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["edit-auth-proxy"],
    mutationFn: (values: EditAuthProxyRequestType) => editAuthProxy(values),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["get-active-proxies"],
      });
      Success({ message: "Edit password proxy completed" });
    },
    onError: (error) => {
      Error({ error });
    },
  });
};
