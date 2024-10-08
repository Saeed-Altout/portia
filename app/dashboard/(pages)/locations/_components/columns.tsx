"use client";

import { ColumnDef } from "@tanstack/react-table";

import { CellActions } from "./cell-actions";

export const columns: ColumnDef<ListProxy>[] = [
  {
    accessorKey: "id",
    header: "#",
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
    cell: ({ row }) => <span>{row.original.rotation_time} min</span>,
  },
  {
    accessorKey: "id",
    header: "",
    cell: ({ row }) => <CellActions data={row.original} />,
  },
];
