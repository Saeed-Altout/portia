"use client";

import { DataTable } from "@/components/dashboard/table/data-table";
import { CircleIcon } from "@/components/dashboard/table/circle-icon";
import { columns, iColumns } from "@/components/dashboard/table/columns";
import { Heading } from "@/components/dashboard/ui/heading";
import { ManageSheet } from "@/components/dashboard/sheets/manage-sheet";
import { RenewSheet } from "@/components/dashboard/sheets/renew-sheet";
import { LoadingApi } from "@/components/pages/loading-api";
import { ErrorApi } from "@/components/pages/error-api";

import { useData } from "./proxies-context";
import { useAuthStore } from "@/stores/use-auth-store";

export const ProxiesClient = () => {
  const { user } = useAuthStore();
  const {
    isLoading,
    isError,
    isSuccess,
    formattedActiveProxies,
    formattedInactiveProxies,
    formattedStatistics,
  } = useData();

  if (isLoading || !isSuccess) {
    return <LoadingApi />;
  }

  if (isError) {
    return <ErrorApi />;
  }

  return (
    <>
      <RenewSheet />
      <ManageSheet />
      <Heading title={`Welcome back ${user.first_name}`} newProxy addFunds />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {formattedStatistics.map((item, key) => (
          <div key={key} className="border rounded-[8px] p-6 space-y-6">
            <div className="flex items-center gap-x-2">
              <CircleIcon icon={item.icon} theme={item.theme} />
              <p className="font-medium">{item.title}</p>
            </div>
            <h4 className="text-4xl font-semibold">{item.value}</h4>
          </div>
        ))}
      </div>
      <DataTable
        columns={columns}
        data={formattedActiveProxies ?? []}
        title="My Active Proxies"
        isLoading={isLoading}
      />
      <DataTable
        columns={iColumns}
        data={formattedInactiveProxies ?? []}
        title="My Inactive Proxies"
        isLoading={isLoading}
      />
    </>
  );
};
