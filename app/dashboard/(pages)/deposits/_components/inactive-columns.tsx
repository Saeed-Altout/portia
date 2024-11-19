import { ColumnDef } from "@tanstack/react-table";
import { CellActions } from "./cell-actions";
import { cn } from "@/lib/utils";

type Proxy = {
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

export const inactiveColumns: ColumnDef<Proxy>[] = [
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
