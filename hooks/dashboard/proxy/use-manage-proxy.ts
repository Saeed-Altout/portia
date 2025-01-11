import { useMutation, useQueryClient } from "@tanstack/react-query";

import { useResponse } from "@/hooks";
import { useModalStore } from "@/stores";
import { ModalType } from "@/config/constants";
import { manageProxy } from "@/api/dashboard/manage-proxy";

export const useManageProxy = () => {
  const { Success, Error } = useResponse();
  const { onClose } = useModalStore();
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["manage-proxy"],
    mutationFn: (values: IManageProxyRequest) => manageProxy(values),
    onSuccess: (data) => {
      onClose(ModalType.MANAGE_PROXY);
      queryClient.invalidateQueries({ queryKey: ["get-active-proxies"] });
      Success({ message: data.message || "Manage proxy Success." });
    },
    onError: (error) => {
      Error({
        error,
        message: "Manage proxy failed.",
      });
    },
  });
};
