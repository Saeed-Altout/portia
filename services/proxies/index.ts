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
  RootResponse<IProxiesCount>
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
  values: IEditAuthProxyCredentials
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
  values: IEditInfoProxyCredentials
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
  values: IFixProxyCredentials
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
  values: IManageProxyCredentials
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
  values: IRenewProxyCredentials
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
  values: IAddProxyCredentials
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
  values: IActivateProxyCredentials
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
