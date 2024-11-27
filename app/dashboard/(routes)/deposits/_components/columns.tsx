"use client";

import { ColumnDef } from "@tanstack/react-table";

export type IHistory = {
  id: number;
  payment_method: string;
  amount: string;
  date: Date | string;
};

export const columns: ColumnDef<IHistory>[] = [
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
    accessorKey: "payment_method",
    header: "Payment Method",
  },
];
