import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  editAuthProxy,
  editInfoProxy,
  getProxies,
  getProxiesCount,
} from "./apis";

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
  return useMutation({
    mutationKey: ["edit-auth-proxy"],
    mutationFn: (values: IEditAuthProxyCredentials) => editAuthProxy(values),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["proxies"] });
    },
  });
};

export const useEditInfoProxyMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["edit-info-proxy"],
    mutationFn: (values: IEditInfoProxyCredentials) => editInfoProxy(values),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["proxies"] });
    },
  });
};
