"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Activity } from "lucide-react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
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

export const activeColumns: ColumnDef<Proxy>[] = [
  {
    accessorKey: "renew",
    header: "Renew",
    cell: ({ row }) => <Checkbox disabled checked={row.original.renew} />,
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => (
      <div>
        {row.original.status ? (
          <span className="text-[#035E5C] bg-[#D4FFFE] font-medium text-xs px-2 py-1 rounded-full leading-none">
            Active
          </span>
        ) : (
          <span className="text-[#801121] bg-[#F7B5BF] font-medium text-xs px-2 py-1 rounded-full leading-none">
            Expired
          </span>
        )}
      </div>
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
    cell: ({ row }) => {
      return (
        <div className="flex justify-end items-center gap-4">
          <Button
            size="sm"
            className="bg-[#D4D4FF] hover:bg-[#D4D4FF]/90 text-primary"
          >
            <Activity className="h-4 w-4" />
            <span className="sr-only">Activity Icon</span>
          </Button>
          <Button size="sm">Manage</Button>
        </div>
      );
    },
  },
];

export const expiredColumns: ColumnDef<Proxy>[] = [
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => (
      <span className="text-[#801121] bg-[#F7B5BF] font-medium text-xs px-2 py-1 rounded-full leading-none">
        Expired
      </span>
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
    cell: ({ row }) => <CellActions row={row.original} />,
  },
];
