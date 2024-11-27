import { useMutation, useQueryClient } from "@tanstack/react-query";

import { addProxy } from "@/api";
import { useResponse } from "@/hooks";

export const useAddProxy = () => {
  const { Success, Error } = useResponse();
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["add-proxy"],
    mutationFn: (values: IAddProxyRequest) => addProxy(values),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["get-active-proxies"] });
      Success({ message: "Add proxy successful" });
    },
    onError: (error) => {
      Error({ error: error, message: "Something went wrong!" });
    },
  });
};
