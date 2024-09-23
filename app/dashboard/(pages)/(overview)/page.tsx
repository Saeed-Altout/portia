"use client";
import * as React from "react";

import { Plus } from "lucide-react";

import { columns } from "./_components/columns";

import { Heading } from "@dashboard/_components/ui/heading";
import { DataTable } from "@dashboard/_components/ui/data-table";
import { OverviewCard } from "@dashboard/_components/cards/overview-card";

import { Button } from "@/components/ui/button";

import { useAddFundsModal } from "@dashboard/hooks/use-add-funds";
import { useActivateNewProxyModal } from "@dashboard/hooks/use-activate-new-proxy-modal";

import { overviewData, overviewTableData } from "@dashboard/constants";

export default function OverviewPage() {
  const addFundsModal = useAddFundsModal();
  const activateNewProxyModal = useActivateNewProxyModal();
  return (
    <>
      {/* Heading Section */}
      <Heading title="Welcome back, Jafar">
        <div className="flex items-center justify-center gap-3">
          <Button
            variant="outline"
            onClick={() => activateNewProxyModal.onOpen()}
          >
            <Plus className="h-4 w-4 mr-2" /> Activate Proxies
          </Button>

          <Button variant="outline" onClick={() => addFundsModal.onOpen()}>
            <Plus className="h-4 w-4 mr-2" /> Add Fund
          </Button>
        </div>
      </Heading>
      {/* Statistic Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {overviewData.map((item, index) => (
          <OverviewCard key={index} initialData={item} />
        ))}
      </div>
      {/* Table Section */}
      <DataTable data={overviewTableData} columns={columns} />
    </>
  );
}
