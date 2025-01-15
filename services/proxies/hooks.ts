import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  activateProxy,
  addProxy,
  editAuthProxy,
  editInfoProxy,
  fixProxy,
  getProxies,
  getProxiesCount,
  getProxyById,
  manageProxy,
  renewProxy,
} from "@/services/proxies";
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
export const useGetProxyByIdQuery = (id: string) => {
  return useQuery({
    queryKey: ["proxy", id],
    queryFn: () => getProxyById(id),
    enabled: +id != 0,
  });
};
export const useEditAuthProxyMutation = () => {
  const queryClient = useQueryClient();
  const { Success, Error } = useResponse();
  return useMutation({
    mutationKey: ["edit-auth-proxy"],
    mutationFn: (values: EditAuthProxyCredentials) => editAuthProxy(values),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["proxies"] });
      Success({ message: data.message || "Edit auth proxy Success." });
    },
    onError: (error) => {
      Error({ error, message: "Edit auth proxy failed." });
    },
  });
};
export const useEditInfoProxyMutation = () => {
  const queryClient = useQueryClient();
  const { Success, Error } = useResponse();
  return useMutation({
    mutationKey: ["edit-info-proxy"],
    mutationFn: (values: EditInfoProxyCredentials) => editInfoProxy(values),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["proxies"] });
      Success({ message: data.message || "Edit info proxy Success." });
    },
    onError: (error) => {
      Error({ error, message: "Edit info proxy failed." });
    },
  });
};
export const useFixProxyMutation = () => {
  const queryClient = useQueryClient();
  const { Success, Error } = useResponse();
  return useMutation({
    mutationKey: ["fix-proxy"],
    mutationFn: (values: FixProxyCredentials) => fixProxy(values),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["proxies"] });
      Success({ message: data.message || "Fix proxy Success." });
    },
    onError: (error) => {
      Error({ error, message: "Fix proxy failed." });
    },
  });
};
export const useManageProxyMutation = () => {
  const queryClient = useQueryClient();
  const { Success, Error } = useResponse();
  return useMutation({
    mutationKey: ["manage-proxy"],
    mutationFn: (values: ManageProxyCredentials) => manageProxy(values),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["proxies"] });
      Success({ message: data.message || "Manage proxy Success." });
    },
    onError: (error) => {
      Error({ error, message: "Manage proxy failed." });
    },
  });
};
export const useRenewProxyMutation = () => {
  const queryClient = useQueryClient();
  const { Success, Error } = useResponse();
  return useMutation({
    mutationKey: ["renew-proxy"],
    mutationFn: (values: RenewProxyCredentials) => renewProxy(values),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["proxies"] });
      Success({ message: data.message || "Renew proxy Success." });
    },
    onError: (error) => {
      Error({ error, message: "Renew proxy failed." });
    },
  });
};
export const useAddProxyMutation = () => {
  const queryClient = useQueryClient();
  const { Success, Error } = useResponse();
  return useMutation({
    mutationKey: ["add-proxy"],
    mutationFn: (values: AddProxyCredentials) => addProxy(values),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["proxies"] });
      Success({ message: data.message || "Add proxy Success." });
    },
    onError: (error) => {
      Error({ error, message: "Add proxy failed." });
    },
  });
};

export const useActivateProxyMutation = () => {
  const queryClient = useQueryClient();
  const { Success, Error } = useResponse();
  return useMutation({
    mutationKey: ["activate-proxy"],
    mutationFn: (values: ActivateProxyCredentials) => activateProxy(values),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["offers"] });
      Success({ message: data.message || "Activate proxy Success." });
    },
    onError: (error) => {
      Error({ error, message: "Activate proxy failed." });
    },
  });
};
