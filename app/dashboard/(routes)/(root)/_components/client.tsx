"use client";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { CircleIcon } from "@/components/dashboard/table/circle-icon";
import { columns } from "@/components/dashboard/table/columns";
import { DataTable } from "@/components/dashboard/table/data-table";
import { ManageSheet } from "@/components/dashboard/sheets/manage-sheet";
import { Heading } from "@/components/dashboard/ui/heading";
import { ErrorApi } from "@/components/pages/error-api";
import { LoadingApi } from "@/components/pages/loading-api";

import { useData } from "./root-context";
import { useAuthStore } from "@/stores/use-auth-store";

export const RootClient = () => {
  const { user } = useAuthStore();
  const {
    isLoading,
    isError,
    isSuccess,
    formattedActiveProxies,
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
        data={formattedActiveProxies ?? []}
        title="My Active Proxies"
        isLoading={isLoading}
      />
    </>
  );
};
