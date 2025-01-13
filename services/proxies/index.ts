import { apiClient } from "@/lib/api";
import { ENDPOINTS } from "@/config/constants";

export const getProxies = async ({
  state = "active",
}: {
  state: "active" | "inactive";
}): Promise<RootResponse<Proxies>> => {
  try {
    const res = await apiClient.get(`${ENDPOINTS.GET_PROXIES}/${state}`);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const getProxiesCount = async (): Promise<
  RootResponse<ProxiesCount>
> => {
  try {
    const res = await apiClient.get(`${ENDPOINTS.GET_PROXIES}/counts`);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const editAuthProxy = async (
  values: EditAuthProxyCredentials
): Promise<RootResponse<Proxies>> => {
  try {
    const res = await apiClient.post(ENDPOINTS.EDIT_PASSWORD_PROXY, values);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const editInfoProxy = async (
  values: EditInfoProxyCredentials
): Promise<RootResponse<Proxies>> => {
  try {
    const res = await apiClient.post(ENDPOINTS.EDIT_PARENT_PROXY, values);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const fixProxy = async (
  values: FixProxyCredentials
): Promise<RootResponse<Proxies>> => {
  try {
    const res = await apiClient.post(ENDPOINTS.FIX_PROXY, values);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const manageProxy = async (
  values: ManageProxyCredentials
): Promise<RootResponse<Proxies>> => {
  try {
    const response = await apiClient.post(ENDPOINTS.MANAGE_PROXY, values);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const renewProxy = async (
  values: RenewProxyCredentials
): Promise<RootResponse<Proxies>> => {
  try {
    const response = await apiClient.post(ENDPOINTS.RENEW_PROXY, values);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const addProxy = async (
  values: AddProxyCredentials
): Promise<RootResponse<Proxies>> => {
  try {
    const response = await apiClient.post(ENDPOINTS.CREATE_PROXY, values);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getProxyById = async (
  id: string
): Promise<RootResponse<Proxy>> => {
  try {
    const res = await apiClient.get(`${ENDPOINTS.GET_PROXY_BY_ID}/${id}`);
    return res.data;
  } catch (error) {
    throw error;
  }
};
