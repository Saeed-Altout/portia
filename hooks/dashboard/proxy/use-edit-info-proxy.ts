import { useMutation, useQueryClient } from "@tanstack/react-query";

import { editInfoProxy } from "@/api";
import { useResponse } from "@/hooks";

export const useEditInfoProxy = () => {
  const { Success, Error } = useResponse();
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["edit-info-proxy"],
    mutationFn: (values: IEditInfoProxyRequest) => editInfoProxy(values),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["get-active-proxies"] });
      Success({ message: data.message || "Edit info proxy Success." });
    },
    onError: (error) => {
      Error({
        error,
        message: "Edit auth proxy failed.",
      });
    },
  });
};
