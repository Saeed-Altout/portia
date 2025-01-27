"use client";

import { ColumnDef } from "@tanstack/react-table";

import { CellProxiesInfoEdit } from "./cell-proxies-info-edit";
import { CellProxiesAuthEdit } from "./cell-proxies-auth-edit";
import { CellProxiesActions } from "./cell-proxies-actions";
import { cn } from "@/lib/utils";
import { CellProxiesRenew } from "./cell-proxies-renew";

// Active Proxies
export const columns: ColumnDef<ProxyColumn>[] = [
  {
    accessorKey: "sequence",
    header: "#",
  },
  {
    accessorKey: "is_active",
    header: "Status",
    cell: ({ row }) => (
      <span
        className={cn(
          !!row.original.is_active &&
            "text-[#035E5C] bg-[#D4FFFE] font-medium text-xs px-2 py-1 rounded-full leading-none"
        )}
      >
        Active
      </span>
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
      <CellProxiesInfoEdit data={row.original}>
        {row.original.protocol}
      </CellProxiesInfoEdit>
    ),
  },
  {
    accessorKey: "service_provider",
    header: "Network",
    cell: ({ row }) => (
      <CellProxiesInfoEdit data={row.original}>
        {row.original.service_provider}
      </CellProxiesInfoEdit>
    ),
  },
  {
    accessorKey: "country_name",
    header: "Country",
  },
  {
    accessorKey: "city_name",
    header: "City",
  },
  {
    accessorKey: "protocol_port",
    header: "IP:Port",
    cell: ({ row }) => (
      <p>{`${row.original.ip_addr}:${row.original.protocol_port}`}</p>
    ),
  },
  {
    accessorKey: "expire_at",
    header: () => <p className="whitespace-nowrap">Expired Date</p>,
    cell: ({ row }) => (
      <p className="text-[#801121]">{row.original.expire_at}</p>
    ),
  },
  {
    accessorKey: "username",
    header: "Username:Password",
    cell: ({ row }) => (
      <CellProxiesAuthEdit data={row.original}>
        {`${row.original.username}:${row.original.password}`}
      </CellProxiesAuthEdit>
    ),
  },
  {
    accessorKey: "id",
    header: "",
    cell: ({ row }) => <CellProxiesActions data={row.original} />,
  },
];

// Inactive Proxies
export const iColumns: ColumnDef<ProxyColumn>[] = [
  {
    accessorKey: "sequence",
    header: "#",
  },
  {
    accessorKey: "is_active",
    header: "Status",
    cell: ({ row }) => (
      <>
        {!!row.original.is_active && (
          <span className="text-[#801121] bg-[#F7B5BF] font-medium text-xs px-2 py-1 rounded-full leading-none">
            Expired
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
      <CellProxiesInfoEdit data={row.original}>
        {row.original.protocol}
      </CellProxiesInfoEdit>
    ),
  },
  {
    accessorKey: "service_provider",
    header: "Network",
    cell: ({ row }) => (
      <CellProxiesInfoEdit data={row.original}>
        {row.original.service_provider}
      </CellProxiesInfoEdit>
    ),
  },
  {
    accessorKey: "country_name",
    header: "Country",
  },
  {
    accessorKey: "city_name",
    header: "City",
  },
  {
    accessorKey: "protocol_port",
    header: "IP:Port",
    cell: ({ row }) => (
      <p>{`${row.original.ip_addr}:${row.original.protocol_port}`}</p>
    ),
  },
  {
    accessorKey: "expire_at",
    header: () => <p className="whitespace-nowrap">Expired Date</p>,
    cell: ({ row }) => (
      <p className="text-[#801121]">{row.original.expire_at}</p>
    ),
  },
  {
    accessorKey: "username",
    header: "Username:Password",
    cell: ({ row }) => (
      <CellProxiesAuthEdit data={row.original}>
        {`${row.original.username}:${row.original.password}`}
      </CellProxiesAuthEdit>
    ),
  },
  {
    accessorKey: "id",
    header: "",
    cell: ({ row }) => <CellProxiesRenew data={row.original} />,
  },
];
