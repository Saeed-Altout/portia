"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ColumnDef } from "@tanstack/react-table";
import { Info } from "lucide-react";

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
    cell: ({ row }) => {
      return (
        <div className="w-fit ml-auto">
          <Button
            className={cn("bg-[#3F41BF]", !row.original.connect && "px-5")}
            size="sm"
            disabled={row.original.connect}
          >
            {row.original.connect && <Info className="h-3 w-3 mr-2 mb-0.5" />}
            Continue
          </Button>
        </div>
      );
    },
  },
];
