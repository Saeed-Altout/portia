"use client";

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
  getPaginationRowModel,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  title?: string;
  onPageChange?: (page: number) => void;
  currentPage: number;
  totalPages: number;
}

export function DataTable<TData, TValue>({
  columns,
  data,
  title,
  onPageChange,
  currentPage,
  totalPages,
}: DataTableProps<TData, TValue>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  const getPageNumbers = () => {
    const range = [];
    const delta = 2;

    if (totalPages <= 5) {
      for (let i = 0; i < totalPages; i++) {
        range.push(i);
      }
    } else {
      range.push(0);

      if (currentPage - delta > 1) {
        range.push("...");
      }

      for (
        let i = Math.max(currentPage - delta, 1);
        i <= Math.min(currentPage + delta, totalPages - 2);
        i++
      ) {
        range.push(i);
      }

      if (currentPage + delta < totalPages - 2) {
        range.push("...");
      }

      range.push(totalPages - 1);
    }

    return range;
  };

  const handlePageChange = (page: number) => {
    if (onPageChange) {
      onPageChange(page);
    }
  };

  return (
    <div className="flex-1 overflow-hidden border rounded-md">
      {title && (
        <div className="w-full flex flex-col py-6 px-4">
          <h3 className="font-medium text-lg">{title}</h3>
        </div>
      )}
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <TableHead key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>

      <div className="flex items-center justify-between py-6 px-4">
        <Button
          variant="outline"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <ChevronLeft className="h-4 w-4" />
          <span>Previous</span>
        </Button>

        <div className="flex items-center justify-center gap-2">
          {getPageNumbers().map((page, index) =>
            typeof page === "number" ? (
              <Button
                key={index}
                variant={page === currentPage ? "default" : "outline"}
                className={cn(
                  page === currentPage &&
                    "bg-[#D4D4FF] hover:bg-[#D4D4FF]/90 text-primary"
                )}
                onClick={() => handlePageChange(page)}
              >
                {page + 1}
              </Button>
            ) : (
              <Button variant="ghost" key={index}>
                ...
              </Button>
            )
          )}
        </div>

        <Button
          variant="outline"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          <span>Next</span>
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
