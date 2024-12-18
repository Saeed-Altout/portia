"use client";

import { ColumnDef } from "@tanstack/react-table";
import { formatTime } from "@/utils/formatters";

import { CellActions } from "./cell-actions";

export const columns: ColumnDef<ILocation>[] = [
  {
    accessorKey: "package_name",
    header: "Package",
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
