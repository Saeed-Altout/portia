"use client";

import { ColumnDef } from "@tanstack/react-table";
import { format } from "date-fns";

export const columns: ColumnDef<IDepositsHistory>[] = [
  {
    accessorKey: "created_at",
    header: "Date",
    cell: ({ row }) => (
      <p>{format(new Date(row.original.created_at), "MMM dd, yyyy")}</p>
    ),
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
