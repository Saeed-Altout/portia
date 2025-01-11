import { ROUTES } from "@/config/constants";
import { Zap } from "lucide-react";

export const formatProxiesData = (data: any[]): ProxyColumn[] => {
  return data.map((proxy, index) => ({
    sequence: `${index + 1}`,
    id: proxy.id,
    re_new: proxy.re_new,
    is_active: proxy.is_active,
    package_name: proxy.package_name,
    protocol: proxy.protocol,
    service_provider: proxy.service_provider,
    protocol_port: proxy.protocol_port,
    expire_at: proxy.expire_at,
    username: proxy.username,
    password: proxy.password,
    plan_name: proxy.plan_name,
    proxy_id: proxy.proxy_id,
    parent_proxy_id: proxy.parent_proxy_id,
    package_id: proxy.package_id,
    duration: proxy.duration,
    amount: proxy.amount,
    rotation_time: proxy.rotation_time,
    country_name: proxy.country_name,
    ip_addr: proxy.ip_addr,
  }));
};

export const formatStatistics = (
  proxiesCount: IProxiesCount | undefined,
  balance: IUserBalance | undefined
) => {
  return [
    {
      icon: Zap,
      title: "Paid Proxies",
      theme: "primary",
      value: `${proxiesCount?.total ?? 0} Proxies`,
      href: ROUTES.DASHBOARD_PROXIES,
      label: "View All Proxies",
    },
    {
      icon: Zap,
      title: "Your Balance",
      theme: "success",
      value: `${balance?.user_balance ?? 0}$`,
      href: ROUTES.DASHBOARD_DEPOSITS,
      label: "View All Deposits",
    },
  ];
};
