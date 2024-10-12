"use client";

import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<Earning>[] = [
  {
    accessorKey: "date",
    header: "Date",
  },
  {
    accessorKey: "amount",
    header: "Amount",
    cell: ({ row }) => <p>{row.original.amount} usd</p>,
  },
  {
    accessorKey: "email",
    header: "User Email",
  },
];
