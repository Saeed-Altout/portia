"use client";

import { columns } from "@/components/dashboard/table/columns";
import { DataTable } from "@/components/dashboard/table/data-table";
import { ManageSheet } from "@/components/dashboard/sheets/manage-sheet";
import { Heading } from "@/components/dashboard/ui/heading";
import { ErrorApi } from "@/components/pages/error-api";
import { LoadingApi } from "@/components/pages/loading-api";
import { Cards } from "./cards";

import { useData } from "./root-context";
import { useAuthStore } from "@/stores/use-auth-store";

export const RootClient = () => {
  const { user } = useAuthStore();
  const { isLoading, isError, isSuccess, formattedProxies } = useData();

  if (isLoading) {
    return <LoadingApi />;
  }

  if (isError || !isSuccess) {
    return <ErrorApi />;
  }

  return (
    <>
      <ManageSheet />
      <Heading title={`Welcome back ${user.first_name}`} newProxy addFunds />
      <Cards />
      <DataTable
        columns={columns}
        data={formattedProxies ?? []}
        title="My Active Proxies"
        isLoading={isLoading}
      />
    </>
  );
};
