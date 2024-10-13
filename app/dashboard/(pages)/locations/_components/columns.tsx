"use client";

import { CellActions } from "./cell-actions";
import { ColumnDef } from "@tanstack/react-table";
import { formatTime } from "@/app/dashboard/utils/formatters";

export const columns: ColumnDef<ListProxy>[] = [
  {
    accessorKey: "country_name",
    header: "Country",
  },
  {
    accessorKey: "city_name",
    header: "City",
  },
  {
    accessorKey: "service_provider_name",
    header: "ISP",
  },
  {
    accessorKey: "rotation_time",
    header: "Ip Rotation",
    cell: ({ row }) => <span>{formatTime(row.original.rotation_time)}</span>,
  },
  {
    accessorKey: "id",
    header: "",
    cell: ({ row }) => <CellActions data={row.original} />,
  },
];
