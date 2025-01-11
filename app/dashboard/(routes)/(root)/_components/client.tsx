"use client";
import Link from "next/link";

import { columns } from "@/components/dashboard/table/columns";
import { DataTable } from "@/components/dashboard/table/data-table";
import { ErrorApi } from "@/components/pages/error-api";
import { LoadingApi } from "@/components/pages/loading-api";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Heading } from "@/components/dashboard/ui/heading";
import { ManageSheet } from "@/components/dashboard/sheets/manage-sheet";
import { CircleIcon } from "@/components/dashboard/table/circle-icon";

import {
  useGetProxiesCountQuery,
  useGetProxiesQuery,
} from "@/services/proxies/hooks";
import { useGetUserBalanceQuery } from "@/services/user/hooks";
import { useAuthStore } from "@/stores/use-auth-store";
import { formatProxiesData, formatStatistics } from "@/helpers/formatter";

export const RootClient = () => {
  const { user } = useAuthStore();

  const userBalance = useGetUserBalanceQuery();
  const ProxiesCount = useGetProxiesCountQuery();
  const proxies = useGetProxiesQuery({ state: "active" });

  const isLoading =
    userBalance.isLoading || ProxiesCount.isLoading || proxies.isLoading;
  const isError =
    userBalance.isError || ProxiesCount.isError || proxies.isError;
  const isSuccess =
    userBalance.isSuccess || ProxiesCount.isSuccess || proxies.isSuccess;

  if (isLoading) {
    return <LoadingApi />;
  }

  if (isError || !isSuccess) {
    return <ErrorApi />;
  }

  const formattedProxies = formatProxiesData(proxies.data?.data ?? []);
  const formattedStatistics = formatStatistics(
    ProxiesCount.data?.data,
    userBalance.data?.data
  );

  return (
    <>
      <ManageSheet />
      <Heading title={`Welcome back ${user.first_name}`} newProxy addFunds />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {formattedStatistics.map((item, key) => (
          <div key={key} className="rounded-lg border">
            <div className="space-y-5 p-6">
              <div className="flex items-center gap-x-2">
                <CircleIcon icon={item.icon} theme={item.theme} />
                <p className="font-medium">{item.title}</p>
              </div>
              <h4 className="text-4xl font-semibold">{item.value}</h4>
            </div>
            <Separator />
            <div className="flex items-center justify-end px-6 py-2">
              <Button variant="ghost" asChild>
                <Link href={item.href} className="capitalize text-primary">
                  {item.label}
                </Link>
              </Button>
            </div>
          </div>
        ))}
      </div>
      <DataTable
        columns={columns}
        data={formattedProxies ?? []}
        title="My Active Proxies"
        isLoading={isLoading}
      />
    </>
  );
};
