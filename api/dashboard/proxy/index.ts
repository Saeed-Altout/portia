import { apiClient } from "@/api/config";

export const addProxy = async (
  values: IAddProxyRequest
): Promise<IAddProxyResponse> => {
  try {
    const response = await apiClient.post(
      process.env.NEXT_PUBLIC_ADD_PROXY!,
      values
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const editInfoProxy = async (
  values: IEditInfoProxyRequest
): Promise<IEditInfoProxyResponse> => {
  try {
    const response = await apiClient.post(
      process.env.NEXT_PUBLIC_EDIT_INFO_PROXY!,
      values
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const editAuthProxy = async (
  values: IEditAuthProxyRequest
): Promise<IEditAuthProxyResponse> => {
  try {
    const response = await apiClient.post(
      process.env.NEXT_PUBLIC_EDIT_AUTH_PROXY!,
      values
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const fixProxy = async (
  values: IFixProxyRequest
): Promise<IFixProxyResponse> => {
  try {
    const response = await apiClient.post(
      process.env.NEXT_PUBLIC_FIX_PROXY!,
      values
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const getActiveProxies = async (
  params: Record<string, any>
): Promise<IGetProxiesActiveResponse> => {
  const filteredParams = Object.fromEntries(
    Object.entries(params).filter(
      ([, value]) => value !== undefined && value !== null
    )
  );

  try {
    const response = await apiClient.get(
      process.env.NEXT_PUBLIC_GET_ACTIVE_PROXIES!,
      {
        params: { ...filteredParams },
      }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const getInactiveProxies = async (
  params: Record<string, any>
): Promise<IGetProxiesInactiveResponse> => {
  const filteredParams = Object.fromEntries(
    Object.entries(params).filter(
      ([, value]) => value !== undefined && value !== null
    )
  );

  try {
    const response = await apiClient.get(
      process.env.NEXT_PUBLIC_GET_INACTIVE_PROXIES!,
      {
        params: { ...filteredParams },
      }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const getProxiesCounts =
  async (): Promise<IGetProxiesCountsResponse> => {
    try {
      const response = await apiClient.get(
        process.env.NEXT_PUBLIC_GET_COUNTS_PROXIES!
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  };
export const getProxyById = async (id: number): Promise<IGetProxyResponse> => {
  try {
    const response = await apiClient.get(
      `${process.env.NEXT_PUBLIC_GET_PROXY!}/${id}`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const renewProxy = async (
  values: IRenewProxyRequest
): Promise<IRenewProxyResponse> => {
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
