import {
  useGetProxiesCountQuery,
  useGetProxiesQuery,
} from "@/services/proxies/hooks";
import { useGetUserBalanceQuery } from "@/services/user/hooks";

export const useData = () => {
  const {
    data: balance,
    isLoading: isBalanceLoading,
    isError: isBalanceError,
  } = useGetUserBalanceQuery();

  const {
    data: proxiesCount,
    isLoading: isCountLoading,
    isError: isCountError,
  } = useGetProxiesCountQuery();

  const {
    data: proxiesActive,
    isLoading: isProxiesLoading,
    isError: isProxiesError,
  } = useGetProxiesQuery({ state: "active" });

  return {
    balance: balance?.data,
    proxiesCount: proxiesCount?.data,
    proxiesActive: proxiesActive?.data,
    isLoading: isBalanceLoading || isCountLoading || isProxiesLoading,
    isError: isBalanceError || isCountError || isProxiesError,
  };
};
