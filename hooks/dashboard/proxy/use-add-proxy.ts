import { useMutation, useQueryClient } from "@tanstack/react-query";

import { addProxy } from "@/api";
import { useResponse } from "@/hooks";

export const useAddProxy = () => {
  const { Success, Error } = useResponse();
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["add-proxy"],
    mutationFn: (values: IAddProxyRequest) => addProxy(values),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["get-active-proxies"] });
      queryClient.invalidateQueries({ queryKey: ["get-user-balance"] });
      queryClient.invalidateQueries({ queryKey: ["get-proxies-counts"] });
      Success({ message: data.message || "Add proxy Success." });
    },
    onError: (error) => {
      Error({
        error,
        message: "Add proxy failed.",
      });
    },
  });
};
