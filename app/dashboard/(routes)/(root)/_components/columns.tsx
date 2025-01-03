"use client";

import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { ColumnDef } from "@tanstack/react-table";

import { CellProxiesInfoEdit } from "@/components/shared/cell-proxies-info-edit";
import { CellProxiesAuthEdit } from "@/components/shared/cell-proxies-auth-edit";
import { CellProxiesActions } from "@/components/shared/cell-proxies-actions";

export interface Proxy {
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
  proxy_id: string;
  parent_proxy_id: string;
  package_id: string;
  duration: number;
}

const STATUS_STYLES = {
  active:
    "text-[#035E5C] bg-[#D4FFFE] font-medium text-xs px-2 py-1 rounded-full leading-none",
};

const renderStatus = (isActive: number) => {
  if (isActive === 1) {
    return <span className={STATUS_STYLES.active}>Active</span>;
  }
  return null;
};

const renderInfoCell = (data: Proxy, content: string) => (
  <CellProxiesInfoEdit data={data}>{content}</CellProxiesInfoEdit>
);

const renderAuthCell = (data: Proxy) => (
  <CellProxiesAuthEdit
    data={data}
  >{`${data.username}:${data.password}`}</CellProxiesAuthEdit>
);

export const columns: ColumnDef<Proxy>[] = [
  {
    accessorKey: "sequence",
    header: "#",
  },
  {
    accessorKey: "is_active",
    header: "Status",
    cell: ({ row }) => renderStatus(row.original.is_active),
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
    cell: ({ row }) => renderInfoCell(row.original, row.original.protocol),
  },
  {
    accessorKey: "service_provider",
    header: "Network",
    cell: ({ row }) =>
      renderInfoCell(row.original, row.original.service_provider),
  },
  {
    accessorKey: "protocol_port",
    header: "Port",
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
    cell: ({ row }) => renderAuthCell(row.original),
  },
  {
    accessorKey: "id",
    header: "",
    cell: ({ row }) => <CellProxiesActions data={row.original} />,
  },
];
