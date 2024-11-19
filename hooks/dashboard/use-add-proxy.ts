import { AxiosError } from "axios";
import { useMutation } from "@tanstack/react-query";

import { addProxy } from "@/api/dashboard";
import { useResponse } from "@/features/dashboard/hooks";

export const useAddProxy = () => {
  const { Success, Error } = useResponse();
  return useMutation<
    AddProxyResponseType,
    AxiosError<ErrorResponse>,
    AddProxyRequestType
  >({
    mutationKey: ["add-proxy"],
    mutationFn: (values: AddProxyRequestType) => addProxy(values),
    onSuccess: () => {
      Success({ message: "Added proxy completed" });
    },
    onError: (error) => {
      Error({ error });
    },
  });
};
