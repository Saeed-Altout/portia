import { useMutation, useQueryClient } from "@tanstack/react-query";

import { editAuthProxy } from "@/api";
import { useResponse } from "@/hooks";

export const useEditAuthProxy = () => {
  const { Success, Error } = useResponse();
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["edit-auth-proxy"],
    mutationFn: (values: EditAuthProxyRequestType) => editAuthProxy(values),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["get-active-proxies"] });
      Success({ message: "Edit auth proxy completed." });
    },
    onError: (error) => {
      Error({ error: error, message: "Something went wrong!" });
    },
  });
};
