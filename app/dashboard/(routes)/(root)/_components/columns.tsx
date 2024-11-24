"use client";

import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { ColumnDef } from "@tanstack/react-table";

import { CellActions } from "./cell-actions";
import { CellRenew } from "./cell-renew";

type Proxy = {
  id: number;
  proxy_id: string;
  parent_proxy_id: string;
  package_id: string;
  rotation_time: string;
  is_active: number;
  re_new: number;
  protocol: string;
  protocol_port: number;
  country_name: string;
  city_name: string;
  service_provider: string;
  username: string;
  password: string;
  ip_addr: string;
  duration: number;
  price: string;
  expire_at: Date | string;
  created_at: Date | string;
  updated_at: Date | string;
  user_id: number;
};

export const activeColumns: ColumnDef<Proxy>[] = [
  {
    accessorKey: "id",
    header: "#",
  },
  {
    accessorKey: "re_new",
    header: "Renew",
    cell: ({ row }) => <CellRenew data={row} />,
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
    accessorKey: "package_id",
    header: "Package",
  },
  {
    accessorKey: "protocol",
    header: "Type",
    cell: ({ row }) => (
      <p className="text-primary capitalize">{row.original.protocol}</p>
    ),
  },
  {
    accessorKey: "service_provider",
    header: "Network",
    cell: ({ row }) => (
      <p className="text-primary">{row.original.service_provider}</p>
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
    header: "Username/Pass",
    cell: ({ row }) => (
      <p className="text-primary whitespace-nowrap line-clamp-1">
        {row.original.username}/{row.original.password}
      </p>
    ),
  },
  {
    accessorKey: "id",
    header: "",
    cell: ({ row }) => <CellActions data={row} />,
  },
];
