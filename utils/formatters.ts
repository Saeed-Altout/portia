import { ROUTES } from "@/config/constants";
import { Zap } from "lucide-react";

export const formatProxiesData = (data: any[]): ProxyColumn[] => {
  return data.map((proxy, index) => ({
    sequence: `${index + 1}`,
    id: proxy.id,
    re_new: proxy.re_new,
    is_active: proxy.is_active,
    package_name: proxy.package_name,
    city_name: proxy.city_name,
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

export const formatStatistics = (proxiesCount: any, balance: any) => {
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
export const formatDepositsStatistics = (statistics: IDepositStatistics) => {
  return [
    {
      color: "#26a6a4",
      amount: `${statistics.monthly_deposits ?? 0}$`,
      label: "This Month",
    },
    {
      color: "#f63d68",
      amount: `${statistics.yearly_deposits ?? 0}$`,
      label: "This Year",
    },
    {
      color: "#7a5af8",
      amount: `${statistics.all_time_deposits ?? 0}$`,
      label: "All Time",
    },
  ];
};
export const formatAffiliateStatistics = (statistics: IAffiliateStatistics) => {
  return [
    {
      color: "#26a6a4",
      amount: `${statistics.this_month_earnings ?? 0}$`,
      label: "This Month",
    },
    {
      color: "#f63d68",
      amount: `${statistics.this_year_earnings ?? 0}$`,
      label: "This Year",
    },
    {
      color: "#7a5af8",
      amount: `${statistics.total_earnings ?? 0}$`,
      label: "All Time",
    },
  ];
};

interface FormattedItem {
  value: string;
  label: string;
}

/**
 * Function to format an array of strings into value-label pairs.
 * @param data - Array of strings to be formatted
 * @returns Array of formatted objects with value and label
 */
export const formatStringArray = (data: string[] = []): FormattedItem[] => {
  return data.map((item) => ({
    value: item,
    label: item,
  }));
};

/**
 * Function to format an array of objects into value-label pairs.
 * @param data - Array of objects to be formatted
 * @param valueKey - Key to extract the value (converted to string)
 * @param labelKey - Key to extract the label
 * @returns Array of formatted objects with value and label
 */
export const formatObjectArray = <T>(
  data: T[] = [],
  valueKey: keyof T,
  labelKey: keyof T
): FormattedItem[] => {
  return data.map((item) => ({
    value: item[valueKey]?.toString() || "",
    label: item[labelKey] as string,
  }));
};

/**
 * Function to format a time value in minutes into hours and minutes.
 * - If the time is 60 minutes or more, it returns hours and minutes.
 * - If the time is less than 60 minutes, it returns only minutes.
 *
 * @param minutes - Time in minutes to be formatted.
 * @returns Formatted time string.
 */
export const formatTime = (minutes: number): string => {
  if (minutes >= 60) {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;

    return remainingMinutes > 0
      ? `${hours} hour ${remainingMinutes} min`
      : `${hours} hour${hours > 1 ? "s" : ""}`;
  }

  return `${minutes} min`;
};
