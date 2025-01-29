import { apiClient } from "@/lib/api";

export const getProxies = async ({
  state = "active",
}: {
  state: "active" | "inactive";
}): Promise<ApiResponse<IProxy[]>> => {
  try {
    const res = await apiClient.get(
      `${process.env.NEXT_PUBLIC_GET_PROXIES!}/${state}`
    );
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const getProxiesCount = async (): Promise<
  RootResponse<ProxiesCount>
> => {
  try {
    const res = await apiClient.get(
      `${process.env.NEXT_PUBLIC_GET_PROXIES!}/counts`
    );
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const editAuthProxy = async (
  values: EditAuthProxyCredentials
): Promise<RootResponse<IProxy[]>> => {
  try {
    const res = await apiClient.post(
      process.env.NEXT_PUBLIC_EDIT_PASSWORD_PROXY!,
      values
    );
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const editInfoProxy = async (
  values: EditInfoProxyCredentials
): Promise<RootResponse<IProxy[]>> => {
  try {
    const res = await apiClient.post(
      process.env.NEXT_PUBLIC_EDIT_PARENT_PROXY!,
      values
    );
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const fixProxy = async (
  values: FixProxyCredentials
): Promise<RootResponse<IProxy[]>> => {
  try {
    const res = await apiClient.post(
      process.env.NEXT_PUBLIC_FIX_PROXY!,
      values
    );
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const manageProxy = async (
  values: ManageProxyCredentials
): Promise<RootResponse<IProxy[]>> => {
  try {
    const response = await apiClient.post(
      process.env.NEXT_PUBLIC_MANAGE_PROXY!,
      values
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const renewProxy = async (
  values: RenewProxyCredentials
): Promise<RootResponse<IProxy[]>> => {
  try {
    const response = await apiClient.post(
      process.env.NEXT_PUBLIC_RENEW_PROXY!,
      values
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const addProxy = async (
  values: AddProxyCredentials
): Promise<RootResponse<IProxy[]>> => {
  try {
    const response = await apiClient.post(
      process.env.NEXT_PUBLIC_CREATE_PROXY!,
      values
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const activateProxy = async (
  values: ActivateProxyCredentials
): Promise<RootResponse<IProxy[]>> => {
  try {
    const response = await apiClient.post(
      process.env.NEXT_PUBLIC_CREATE_PROXY!,
      values
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getProxyById = async (
  id: string
): Promise<ApiResponse<IShortProxy>> => {
  try {
    const res = await apiClient.get(
      `${process.env.NEXT_PUBLIC_GET_PROXY_BY_ID!}/${id}`
    );
    return res.data;
  } catch (error) {
    throw error;
  }
};
