"use client";

import * as React from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
  ColumnFiltersState,
  getFilteredRowModel,
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination";
import { Button } from "@/components/ui/button";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    state: {
      columnFilters,
    },
  });

  const totalPages = table.getPageCount();
  const currentPage = table.getState().pagination.pageIndex;
  const pageRange = 2;

  const generatePageNumbers = () => {
    const pages: number[] = [];
    for (let i = 1; i <= totalPages; i++) {
      if (
        i === 1 ||
        i === totalPages ||
        (i >= currentPage - pageRange && i <= currentPage + pageRange)
      ) {
        pages.push(i);
      }
    }
    return pages;
  };

  const pageNumbers = generatePageNumbers();

  return (
    <div className="w-full space-y-2">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-8">
        <Select
          onValueChange={(event) =>
            event == "None"
              ? table.resetColumnFilters()
              : table.getColumn("country")?.setFilterValue(event)
          }
          defaultValue={
            (table.getColumn("country")?.getFilterValue() as string) ?? ""
          }
        >
          <SelectTrigger>
            <SelectValue placeholder="Country" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="None" className="text-gray-primary">
              None
            </SelectItem>
            {["USA", "Germany", "France", "Canada"].map((item, index) => (
              <SelectItem key={index} value={item}>
                {item}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select
          onValueChange={(event) =>
            event == "None"
              ? table.resetColumnFilters()
              : table.getColumn("state")?.setFilterValue(event)
          }
          defaultValue={
            (table.getColumn("state")?.getFilterValue() as string) ?? ""
          }
        >
          <SelectTrigger>
            <SelectValue placeholder="State" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="None" className="text-gray-primary">
              None
            </SelectItem>
            {["NY", "California", "Berlin", "Paris", "Arizona"].map(
              (item, index) => (
                <SelectItem key={index} value={item}>
                  {item}
                </SelectItem>
              )
            )}
          </SelectContent>
        </Select>
        <Select
          onValueChange={(event) =>
            event == "None"
              ? table.resetColumnFilters()
              : table.getColumn("isp")?.setFilterValue(event)
          }
          defaultValue={
            (table.getColumn("isp")?.getFilterValue() as string) ?? ""
          }
        >
          <SelectTrigger>
            <SelectValue placeholder="ISP" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="None" className="text-gray-primary">
              None
            </SelectItem>
            {["O2/READING", "VODAFONE/FARNBOROUGH", "THREE/SHEFFIELD"].map(
              (item, index) => (
                <SelectItem key={index} value={item}>
                  {item}
                </SelectItem>
              )
            )}
          </SelectContent>
        </Select>
        <Select
          onValueChange={(event) =>
            event == "None"
              ? table.resetColumnFilters()
              : table.getColumn("ipRotation")?.setFilterValue(event)
          }
          defaultValue={
            (table.getColumn("ipRotation")?.getFilterValue() as string) ?? ""
          }
        >
          <SelectTrigger>
            <SelectValue placeholder="IP Rotation" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="None" className="text-gray-primary">
              None
            </SelectItem>
            {["5 min", "15 min", "30 min", "1 hour"].map((item, index) => (
              <SelectItem key={index} value={item}>
                {item}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="rounded-md w-full">
        <div className="py-6 text-center md:text-left">
          <p className="font-medium text-lg">My Available Locations</p>
        </div>
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
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
                    <TableCell key={cell.id}>
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
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <Pagination className="p-4 w-full">
        <PaginationContent className="w-full flex items-center justify-between">
          <Button
            variant="outline"
            disabled={!table.getCanPreviousPage()}
            onClick={() => table.previousPage()}
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            <span className="hidden md:block">Previous</span>
            <span className="sr-only">Previous Page</span>
          </Button>

          <div className="items-center justify-center hidden md:flex">
            {pageNumbers.map((page, index) => (
              <React.Fragment key={index}>
                {index > 0 && page !== pageNumbers[index - 1] + 1 ? (
                  <PaginationEllipsis key={`ellipsis-${index}`} />
                ) : null}
                <PaginationItem key={page}>
                  <PaginationLink
                    onClick={() => table.setPageIndex(page - 1)}
                    className={
                      currentPage === page - 1 ? "font-bold bg-secondary" : ""
                    }
                  >
                    {page}
                  </PaginationLink>
                </PaginationItem>
              </React.Fragment>
            ))}
          </div>

          <div className="block md:hidden">
            <p className="text-sm text-gray-primary">
              Page {currentPage + 1} of {totalPages}
            </p>
          </div>
          <Button
            variant="outline"
            disabled={!table.getCanNextPage()}
            onClick={() => table.nextPage()}
          >
            <span className="hidden md:block">Next</span>
            <span className="sr-only">Next Page</span>
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </PaginationContent>
      </Pagination>
    </div>
  );
}
