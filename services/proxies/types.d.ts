declare type Root<T> = {
  status: boolean;
  data: T;
};

declare type IProxy = {
  id: number;
  proxy_id: string;
  plan_id: number;
  plan_name: string;
  package_id: string;
  package_name: string;
  parent_proxy_id: string;
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
  ip_addr: string | null;
  amount: number;
  duration: number;
  price: string;
  expire_at: string;
  created_at: string | null;
  updated_at: string | null;
};

declare type IProxies = IProxy[];

declare type IProxiesCount = {
  total: number;
  active: number;
  inactive: number;
};

declare type IEditAuthProxyCredentials = {
  proxy_id: string;
  password: string;
};

declare type IEditInfoProxyCredentials = {
  parent_proxy_id: string;
  proxy_id: string;
  protocol: string;
};
