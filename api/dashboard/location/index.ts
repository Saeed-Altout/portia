import { apiClient } from "@/api/config";

export const getProxyLocations = async (params: Record<string, any>): Promise<IGetProxyLocationsResponse> => {
  const filteredParams = Object.fromEntries(
    Object.entries(params).filter(([, value]) => value !== undefined && value !== null),
  );

  try {
    const response = await apiClient.get(process.env.NEXT_PUBLIC_GET_PROXY_LOCATIONS!, {
      params: { ...filteredParams },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getProxyCountries = async (params: Record<string, any>): Promise<IGetProxyCountriesResponse> => {
  const filteredParams = Object.fromEntries(
    Object.entries(params).filter(([, value]) => value !== undefined && value !== null && value !== 0),
  );

  try {
    const response = await apiClient.get(process.env.NEXT_PUBLIC_GET_PROXY_COUNTRIES!, {
      params: { ...filteredParams },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getProxyCities = async (params: Record<string, any>): Promise<IGetProxyCitiesResponse> => {
  const filteredParams = Object.fromEntries(
    Object.entries(params).filter(([, value]) => value !== undefined && value !== null && value !== 0),
  );

  try {
    const response = await apiClient.get(process.env.NEXT_PUBLIC_GET_PROXY_CITIES!, {
      params: { ...filteredParams },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getProxyIpRotations = async (params: Record<string, any>): Promise<IGetProxyIpRotationsResponse> => {
  const filteredParams = Object.fromEntries(
    Object.entries(params).filter(([, value]) => value !== undefined && value !== null && value !== 0),
  );

  try {
    const response = await apiClient.get(process.env.NEXT_PUBLIC_GET_PROXY_IP_ROTATIONS!, {
      params: { ...filteredParams },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getProxyServiceProviders = async (
  params: Record<string, any>,
): Promise<IGetProxyServiceProvidersResponse> => {
  const filteredParams = Object.fromEntries(
    Object.entries(params).filter(([, value]) => value !== undefined && value !== null && value !== 0),
  );

  try {
    const response = await apiClient.get(process.env.NEXT_PUBLIC_GET_PROXY_SERVICE_PROVIDERS!, {
      params: { ...filteredParams },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
