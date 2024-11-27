import { useMutation, useQueryClient } from "@tanstack/react-query";

import { fixProxy } from "@/api";
import { useResponse } from "@/hooks";
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
      queryClient.invalidateQueries({ queryKey: ["get-active-proxies"] });
      setProxy({} as ProxyState);
      Success({ message: "Fix proxy completed." });
    },
    onError: (error) => {
      Error({ error: error, message: "Something went wrong!" });
    },
  });
};
