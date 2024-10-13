"use client";

import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<Deposits>[] = [
  {
    accessorKey: "amount",
    header: "Amount",
  },
  {
    accessorKey: "date",
    header: "Date",
  },
  {
    accessorKey: "typeOfPayment",
    header: "Type Of Payment",
  },
];
