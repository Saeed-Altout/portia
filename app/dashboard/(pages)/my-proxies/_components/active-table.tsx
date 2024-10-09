"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/dashboard/data-table";

interface ActiveTableProps {
  title: string;
  columns: any;
}

export const ActiveTable = ({ title, columns }: ActiveTableProps) => {
  const [page, setPage] = useState<number>(1);

  const totalItems = 50;
  const countItems = 10;
  const countPages = Math.ceil(totalItems / countItems);
  const data: any = [];

  return (
    <div className="border rounded-md">
      <div className="w-full flex justify-between items-center rounded-t-md py-6 px-4">
        <h1 className="font-medium text-lg">{title}</h1>
      </div>
      <DataTable columns={columns} data={data} />
      <div className="w-full flex justify-between items-center rounded-b-md py-6 px-4">
        <Button
          variant="outline"
          disabled={page === 1}
          onClick={() => setPage((prev) => prev - 1)}
        >
          <ChevronLeft className="h-4 w-4" />
          <span>Previous</span>
        </Button>
        <div className="flex justify-center items-center gap-x-2">
          {page >= 2 && (
            <Button
              size="icon"
              variant="ghost"
              onClick={() => setPage(page - 1)}
            >
              {page - 1}
            </Button>
          )}
          <Button
            size="icon"
            variant="ghost"
            className="bg-secondary"
            onClick={() => setPage(page)}
          >
            {page}
          </Button>
          {page >= countPages / 2 && page - 1 != countPages && (
            <Button size="icon" variant="ghost">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          )}
          {page <= countPages && (
            <Button
              size="icon"
              variant="ghost"
              onClick={() => setPage(page + 1)}
            >
              {page + 1}
            </Button>
          )}
        </div>
        <Button
          variant="outline"
          disabled={page - 1 === countPages}
          onClick={() => setPage((prev) => prev + 1)}
        >
          <span>Next</span>
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};
