import { useMutation, useQueryClient } from "@tanstack/react-query";

import { useResponse } from "@/hooks";
import { useModalStore, useProxyStore } from "@/stores";
import { ModalType } from "@/config/enums";
import { renewProxy } from "@/api";
export const useRenewProxy = () => {
  const { Success, Error } = useResponse();
  const { onClose } = useModalStore();
  const { setProxy } = useProxyStore();
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["renew-proxy"],
    mutationFn: (values: IRenewProxyRequest) => renewProxy(values),
    onSuccess: (data) => {
      onClose(ModalType.RENEW_PROXY);
      queryClient.invalidateQueries({ queryKey: ["get-inactive-proxies"] });
      setProxy({} as IProxy);
      Success({ message: data.message || "Renew proxy Success." });
    },
    onError: (error) => {
      Error({
        error,
        message: "Renew proxy failed.",
      });
    },
  });
};
