"use client";

import { ColumnDef } from "@tanstack/react-table";

export type Deposits = {
  id: number;
  amount: String;
  date: string;
  typeOfPayment: string;
};

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
