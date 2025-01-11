import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  editAuthProxy,
  editInfoProxy,
  fixProxy,
  getProxies,
  getProxiesCount,
  manageProxy,
} from "./apis";
import { useResponse } from "@/hooks/use-response";

export const useGetProxiesQuery = ({
  state,
}: {
  state: "active" | "inactive";
}) => {
  return useQuery({
    queryKey: ["proxies", state],
    queryFn: () => getProxies({ state }),
  });
};

export const useGetProxiesCountQuery = () => {
  return useQuery({
    queryKey: ["proxies-count"],
    queryFn: () => getProxiesCount(),
  });
};

export const useEditAuthProxyMutation = () => {
  const queryClient = useQueryClient();
  const { Success, Error } = useResponse();
  return useMutation({
    mutationKey: ["edit-auth-proxy"],
    mutationFn: (values: IEditAuthProxyCredentials) => editAuthProxy(values),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["proxies"] });
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

export const useEditInfoProxyMutation = () => {
  const queryClient = useQueryClient();
  const { Success, Error } = useResponse();
  return useMutation({
    mutationKey: ["edit-info-proxy"],
    mutationFn: (values: IEditInfoProxyCredentials) => editInfoProxy(values),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["proxies"] });
      Success({ message: data.message || "Edit info proxy Success." });
    },
    onError: (error) => {
      Error({
        error,
        message: "Edit info proxy failed.",
      });
    },
  });
};

export const useFixProxyMutation = () => {
  const queryClient = useQueryClient();
  const { Success, Error } = useResponse();
  return useMutation({
    mutationKey: ["fix-proxy"],
    mutationFn: (values: IFixProxyCredentials) => fixProxy(values),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["proxies"] });
      Success({ message: data.message || "Fix proxy Success." });
    },
    onError: (error) => {
      Error({
        error,
        message: "Fix proxy failed.",
      });
    },
  });
};

export const useManageProxyMutation = () => {
  const queryClient = useQueryClient();
  const { Success, Error } = useResponse();

  return useMutation({
    mutationKey: ["manage-proxy"],
    mutationFn: (values: IManageProxyCredentials) => manageProxy(values),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["proxies"] });
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
