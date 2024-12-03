import { useMutation, useQueryClient } from "@tanstack/react-query";

import { editAuthProxy } from "@/api";
import { useResponse } from "@/hooks";

export const useEditAuthProxy = () => {
  const { Success, Error } = useResponse();
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["edit-auth-proxy"],
    mutationFn: (values: IEditAuthProxyRequest) => editAuthProxy(values),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["get-active-proxies"] });
      Success({ message: data.message || "Edit auth proxy Success." });
    },
    onError: (error) => {
      Error({
        error,
        message: "Edit auth proxy failed.",
      });
    },
  });
};
