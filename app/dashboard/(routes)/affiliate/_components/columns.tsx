"use client";

import { ColumnDef } from "@tanstack/react-table";
import { format } from "date-fns";

export const columns: ColumnDef<IAffiliateHistory>[] = [
  {
    accessorKey: "amount",
    header: "Amount",
    cell: ({ row }) => <p>{row.original.amount} usd</p>,
  },
  {
    accessorKey: "created_at",
    header: "Date",
    cell: ({ row }) => (
      <p>{format(new Date(row.original.created_at), "MMM dd, yyyy")}</p>
    ),
  },
];
