"use client";
import * as React from "react";
import { ColumnDef } from "@tanstack/react-table";

import { cn } from "@/lib/utils";

import { Checkbox } from "@/components/ui/checkbox";

import { CellActions } from "./cell-actions";

export type Proxy = {
  id: string;
  renew: boolean;
  status: boolean;
  package: string;
  plan: string;
  type: string;
  network: string;
  port: string;
  expiredData: string;
  isExpired: boolean;
  usernamePassword: string;
};

export const columns: ColumnDef<Proxy>[] = [
  {
    accessorKey: "id",
    header: "#",
  },
  {
    accessorKey: "renew",
    header: "Renew",
    cell: ({ row }) => <Checkbox disabled checked={row.original.renew} />,
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => (
      <React.Fragment>
        {row.original.status ? (
          <span className="text-[#035E5C] bg-[#D4FFFE] font-medium text-xs px-2 py-1 rounded-full leading-none">
            Active
          </span>
        ) : (
          <span className="text-[#801121] bg-[#F7B5BF] font-medium text-xs px-2 py-1 rounded-full leading-none">
            Disabled
          </span>
        )}
      </React.Fragment>
    ),
  },
  {
    accessorKey: "package",
    header: "Package",
  },
  {
    accessorKey: "plan",
    header: "Plan",
  },
  {
    accessorKey: "type",
    header: "Type",
    cell: ({ row }) => <p className="text-primary">{row.original.type}</p>,
  },
  {
    accessorKey: "network",
    header: "Network",
    cell: ({ row }) => <p className="text-primary">{row.original.network}</p>,
  },
  {
    accessorKey: "port",
    header: "Port",
  },
  {
    accessorKey: "expiredData",
    header: "Expired Data",
    cell: ({ row }) => (
      <p className={cn(row.original.isExpired && "text-[#801121]")}>
        {row.original.expiredData}
      </p>
    ),
  },
  {
    accessorKey: "usernamePassword",
    header: "Username/Pass",
    cell: ({ row }) => (
      <p className="text-primary">{row.original.usernamePassword}</p>
    ),
  },
  {
    accessorKey: "id",
    header: "",
    cell: ({ row }) => <CellActions data={row.original} />,
  },
];
