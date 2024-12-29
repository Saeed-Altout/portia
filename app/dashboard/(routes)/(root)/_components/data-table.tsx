"use client";

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { ChevronLeft, ChevronRight, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  title: string;
  description?: string;
  isLoading?: boolean;
}

export function DataTable<TData, TValue>({
  columns,
  data,
  title,
  description,
  isLoading,
}: DataTableProps<TData, TValue>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    initialState: {
      pagination: {
        pageSize: 5,
      },
    },
  });

  const currentPage = table.getState().pagination.pageIndex + 1;
  const totalPages = table.getPageCount();

  const generatePageNumbers = () => {
    const pages = [];
    if (totalPages <= 3) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 2) {
        pages.push(1, 2, 3, "...", totalPages);
      } else if (currentPage >= totalPages - 1) {
        pages.push(1, "...", totalPages - 2, totalPages - 1, totalPages);
      } else {
        pages.push(1, "...", currentPage, "...", totalPages);
      }
    }
    return pages;
  };

  return (
    <div className="rounded-md border overflow-hidden">
      <div className="bg-white flex items-center justify-between p-4 rounded-t-md">
        <div className="space-y-1">
          <h3 className="text-lg font-medium">{title}</h3>
          {description && (
            <p className="text-sm text-muted-foreground">{description}</p>
          )}
        </div>
        {isLoading && (
          <Loader2 className="h-4 w-4 animate-spin text-muted-foreground" />
        )}
      </div>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id} className="whitespace-nowrap">
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
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
                    <TableCell key={cell.id} className="whitespace-nowrap">
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-[400px] text-center"
                >
                  <div className="flex flex-col items-center justify-center">
                    <svg
                      width="64"
                      height="64"
                      viewBox="0 0 64 64"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="mb-4"
                    >
                      <circle cx="32" cy="32" r="32" fill="#F5F5FA" />
                      <circle cx="32" cy="32" r="24" fill="#E9E9F2" />
                      <path
                        d="M32 44C38.6274 44 44 38.6274 44 32C44 25.3726 38.6274 20 32 20C25.3726 20 20 25.3726 20 32C20 38.6274 25.3726 44 32 44Z"
                        fill="#B5B6F7"
                      />
                      <path
                        d="M26 32C26 30.8954 26.8954 30 28 30C29.1046 30 30 30.8954 30 32C30 33.1046 29.1046 34 28 34C26.8954 34 26 33.1046 26 32Z"
                        fill="#4B4B57"
                      />
                      <path
                        d="M34 32C34 30.8954 34.8954 30 36 30C37.1046 30 38 30.8954 38 32C38 33.1046 37.1046 34 36 34C34.8954 34 34 33.1046 34 32Z"
                        fill="#4B4B57"
                      />
                      <path
                        d="M24 38C24 38 27 35 32 35C37 35 40 38 40 38"
                        stroke="#4B4B57"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                    <p className="text-lg text-muted-foreground">
                      No data available.
                    </p>
                  </div>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="bg-white flex items-center justify-center p-4 rounded-b-md">
        <div className="w-full flex items-center justify-between gap-8">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
            className="gap-2"
          >
            <ChevronLeft className="h-4 w-4" />
            <span className="hidden sm:inline">Previous</span>
          </Button>
          <div className="flex items-center gap-2">
            {generatePageNumbers().map((page, index) => (
              <Button
                key={index}
                size="sm"
                variant={page === currentPage ? "default" : "ghost"}
                onClick={() =>
                  typeof page === "number" && table.setPageIndex(page - 1)
                }
                disabled={typeof page !== "number"}
                className={cn(
                  "min-w-[32px]",
                  page === currentPage &&
                    "bg-[#D4D4FF] hover:bg-[#D4D4FF]/90 text-primary"
                )}
              >
                {page}
              </Button>
            ))}
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
            className="gap-2"
          >
            <span className="hidden sm:inline">Next</span>
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
