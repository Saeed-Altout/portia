import { AxiosResponse } from "axios";

import { apiClient } from "@/api/config";
import { API_GET_PROXIES_INACTIVE } from "@/config/constants";

interface Proxy {
  id: number;
  proxy_id: string;
  parent_proxy_id: string;
  package_id: string;
  rotation_time: string;
  is_active: number;
  re_new: number;
  protocol: string;
  protocol_port: number;
  country_name: string;
  city_name: string;
  service_provider: string;
  username: string;
  password: string;
  ip_addr: string;
  duration: number;
  price: string;
  expire_at: string;
  created_at: string;
  updated_at: string;
  user_id: number;
}

interface Proxies {
  success: boolean;
  data: {
    current_page: number;
    data: Proxy[];
    first_page_url: string;
    from: number;
    last_page: number;
    last_page_url: string;
    links: {
      url: string;
      label: string;
      active: boolean;
    }[];
    next_page_url: string;
    path: string;
    per_page: number;
    prev_page_url: string;
    to: number;
    total: number;
  };
}

export const getInActiveProxies = async (
  params: Record<string, any>
): Promise<Proxies> => {
  const filteredParams = Object.fromEntries(
    Object.entries(params).filter(
      ([, value]) => value !== undefined && value !== null
    )
  );

  try {
    const response: AxiosResponse<Proxies> = await apiClient.get<Proxies>(
      API_GET_PROXIES_INACTIVE,
      { params: { ...filteredParams } }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
