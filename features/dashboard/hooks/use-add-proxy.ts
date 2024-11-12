import { AxiosError } from "axios";
import { useMutation } from "@tanstack/react-query";

import { useResponse } from "@/features/dashboard/hooks";
import { addProxy, updateUserProfile } from "@/features/dashboard/api";

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
