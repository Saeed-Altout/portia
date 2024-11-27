import { useMutation, useQueryClient } from "@tanstack/react-query";

import { editInfoProxy } from "@/api";
import { useResponse } from "@/hooks";

export const useEditInfoProxy = () => {
  const { Success, Error } = useResponse();
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["edit-info-proxy"],
    mutationFn: (values: IEditInfoProxyRequest) => editInfoProxy(values),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["get-active-proxies"] });
      Success({ message: "Edit info proxy completed." });
    },
    onError: (error) => {
      Error({ error: error, message: "Something went wrong!" });
    },
  });
};
