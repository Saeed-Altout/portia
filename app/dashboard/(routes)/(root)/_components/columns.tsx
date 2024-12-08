"use client";

import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { ColumnDef } from "@tanstack/react-table";

import { CellEdit } from "./cell-edit";
import { CellRenew } from "./cell-renew";
import { CellActions } from "./cell-actions";
import { CellAuthEdit } from "./cell-auth-edit";

export const activeColumns: ColumnDef<IProxy>[] = [
  {
    accessorKey: "id",
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
    accessorKey: "package_name",
    header: "Package",
  },
  {
    accessorKey: "protocol",
    header: "Type",
    cell: ({ row }) => <CellEdit data={row.original}>{row.original.protocol}</CellEdit>,
  },
  {
    accessorKey: "service_provider",
    header: "Network",
    cell: ({ row }) => <CellEdit data={row.original}>{row.original.service_provider}</CellEdit>,
  },
  {
    accessorKey: "protocol_port",
    header: "Port",
  },
  {
    accessorKey: "expire_at",
    header: () => <p className="whitespace-nowrap">Expired Date</p>,
    cell: ({ row }) => (
      <p className={cn(row.original.expire_at && "text-[#801121]")}>{format(row.original.expire_at, "MMM dd, yyyy")}</p>
    ),
  },
  {
    accessorKey: "username",
    header: "Username/Pass",
    cell: ({ row }) => (
      <CellAuthEdit data={row.original}>
        {row.original.username}/{row.original.password}
      </CellAuthEdit>
    ),
  },
  {
    accessorKey: "id",
    header: "",
    cell: ({ row }) => <CellActions data={row.original} />,
  },
];
