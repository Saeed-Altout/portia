import { useMutation } from "@tanstack/react-query";

import { useResponse } from "@/hooks/dashboard";
import { fixProxy } from "@/api/dashboard/fix-proxy";

export const useFixProxy = () => {
  const { Success, Error } = useResponse();
  return useMutation({
    mutationKey: ["fix-proxy"],
    mutationFn: (values: FixProxyRequestType) => fixProxy(values),
    onSuccess: () => {
      Success({ message: "Fix proxy completed" });
    },
    onError: (error) => {
      Error({ error });
    },
  });
};
