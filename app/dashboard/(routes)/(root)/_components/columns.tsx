"use client";

import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { ColumnDef } from "@tanstack/react-table";

import { CellInfoEdit } from "./cell-info-edit";
import { CellRenew } from "./cell-renew";
import { CellActions } from "./cell-actions";
import { CellAuthEdit } from "./cell-auth-edit";

export type Proxy = {
  sequence: string;
  id: number;
  re_new: number;
  is_active: number;
  package_name: string;
  protocol: string;
  service_provider: string;
  protocol_port: number;
  expire_at: string;
  username: string;
  password: string;
  plan_name: string;

  // Additional for state
  proxy_id: string;
  parent_proxy_id: string;
  package_id: string;
  duration: number;
};

export const columns: ColumnDef<Proxy>[] = [
  {
    accessorKey: "sequence",
    header: "#",
  },
  {
    accessorKey: "re_new",
    header: "Renew",
    cell: ({ row }) => <CellRenew data={row.original} />,
  },
  {
    accessorKey: "is_active",
    header: "Status",
    cell: ({ row }) => (
      <>
        {row.original.is_active === 1 && (
          <span className="text-[#035E5C] bg-[#D4FFFE] font-medium text-xs px-2 py-1 rounded-full leading-none">
            Active
          </span>
        )}
      </>
    ),
  },
  {
    accessorKey: "plan_name",
    header: "Plan",
  },
  {
    accessorKey: "package_name",
    header: "Package",
  },
  {
    accessorKey: "protocol",
    header: "Type",
    cell: ({ row }) => (
      <CellInfoEdit data={row.original}>{row.original.protocol}</CellInfoEdit>
    ),
  },
  {
    accessorKey: "service_provider",
    header: "Network",
    cell: ({ row }) => (
      <CellInfoEdit data={row.original}>
        {row.original.service_provider}
      </CellInfoEdit>
    ),
  },
  {
    accessorKey: "protocol_port",
    header: "Port",
  },
  {
    accessorKey: "expire_at",
    header: () => <p className="whitespace-nowrap">Expired Date</p>,
    cell: ({ row }) => (
      <p className={cn(row.original.expire_at && "text-[#801121]")}>
        {format(row.original.expire_at, "MMM dd, yyyy")}
      </p>
    ),
  },
  {
    accessorKey: "username",
    header: "Username:Password",
    cell: ({ row }) => (
      <CellAuthEdit data={row.original}>
        {row.original.username}:{row.original.password}
      </CellAuthEdit>
    ),
  },
  {
    accessorKey: "id",
    header: "",
    cell: ({ row }) => <CellActions data={row.original} />,
  },
];
