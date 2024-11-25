"use client";

import { AxiosError } from "axios";
import { useMutation } from "@tanstack/react-query";

import { addProxy } from "@/api/dashboard";
import { useResponse } from "@/hooks/dashboard";
import { useModalStore } from "@/stores";

export const useAddProxy = () => {
  const { Success, Error } = useResponse();
  const { activeProxyModalOnClose } = useModalStore();
  return useMutation<
    AddProxyResponseType,
    AxiosError<ErrorResponse>,
    AddProxyRequestType
  >({
    mutationKey: ["add-proxy"],
    mutationFn: (values: AddProxyRequestType) => addProxy(values),
    onSuccess: () => {
      activeProxyModalOnClose();
      Success({ message: "Added proxy completed" });
    },
    onError: (error) => {
      Error({ error });
    },
  });
};
