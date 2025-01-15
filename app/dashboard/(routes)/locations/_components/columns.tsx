"use client";

import { ColumnDef } from "@tanstack/react-table";
import { CellActions } from "./cell-actions";

export const columns: ColumnDef<any>[] = [
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
  },
  {
    accessorKey: "id",
    header: "",
    cell: ({ row }) => <CellActions data={row.original} />,
  },
];
