"use client";

import { ColumnDef } from "@tanstack/react-table";

import { CellActions } from "./cell-actions";

export type Location = {
  id: string;
  state: string;
  country: string;
  isp: string;
  connect: boolean;
  ipRotation: string;
};

export const columns: ColumnDef<Location>[] = [
  {
    accessorKey: "id",
    header: "#",
  },
  {
    accessorKey: "country",
    header: "Country",
  },
  {
    accessorKey: "state",
    header: "State",
  },
  {
    accessorKey: "isp",
    header: "ISP",
  },
  {
    accessorKey: "ipRotation",
    header: "IP Rotation",
  },
  {
    accessorKey: "id",
    header: "",
    cell: ({ row }) => <CellActions data={row.original} />,
  },
];
