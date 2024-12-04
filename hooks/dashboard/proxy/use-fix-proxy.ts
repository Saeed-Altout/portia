import { useMutation, useQueryClient } from "@tanstack/react-query";

import { fixProxy } from "@/api";
import { useResponse } from "@/hooks";
import { useModalStore, useProxyStore } from "@/stores";
import { ModalType } from "@/config/enums";
export const useFixProxy = () => {
  const { Success, Error } = useResponse();
  const { onClose } = useModalStore();
  const { setProxy } = useProxyStore();
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["fix-proxy"],
    mutationFn: (values: IFixProxyRequest) => fixProxy(values),
    onSuccess: (data) => {
      onClose(ModalType.FIX_PROXY);
      queryClient.invalidateQueries({ queryKey: ["get-active-proxies"] });
      setProxy({} as IProxy);
      Success({ message: data.message || "Fix proxy Success." });
    },
    onError: (error) => {
      Error({
        error,
        message: "Fix proxy failed.",
      });
    },
  });
};
