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
    accessorKey: "id",
    header: "",
    cell: ({ row }) => <CellActions data={row.original} />,
  },
];
