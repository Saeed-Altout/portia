"use client";
import * as React from "react";
import {
  ColumnDef,
  flexRender,
  ColumnFiltersState,
  getCoreRowModel,
  getPaginationRowModel,
  getFilteredRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useProxyStore } from "@/stores/use-proxy-store";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export function DataTable<TData extends { package_name: string }, TValue>({
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
    getPaginationRowModel: getPaginationRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      columnFilters,
    },
  });

  const { proxy } = useProxyStore();

  const currentPage = table.getState().pagination.pageIndex + 1;
  const totalPages = table.getPageCount();

  const generatePageNumbers = () => {
    const pages = [];
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        pages.push(1, 2, 3, 4, "...", totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(
          1,
          "...",
          totalPages - 3,
          totalPages - 2,
          totalPages - 1,
          totalPages
        );
      } else {
        pages.push(
          1,
          "...",
          currentPage - 1,
          currentPage,
          currentPage + 1,
          "...",
          totalPages
        );
      }
    }
    return pages;
  };

  const extractUniqueColumnValues = (columnId: string): string[] => {
    const filteredRows = table.getFilteredRowModel().rows;
    const uniqueValues = new Set<string>();

    filteredRows.forEach((row) => {
      const value = row.getValue<string>(columnId);
      if (value) uniqueValues.add(value);
    });

    return Array.from(uniqueValues);
  };

  const uniquePackageNames = Array.from(
    new Set(data.map((item) => item.package_name))
  );

  // const packages = extractUniqueColumnValues("package_name");
  const countries = extractUniqueColumnValues("country_name");
  const cities = extractUniqueColumnValues("city_name");
  const servicesProvider = extractUniqueColumnValues("service_provider_name");
  const rotationsTime = extractUniqueColumnValues("rotation_time");

  React.useEffect(() => {
    if (proxy.package_name) {
      table.getColumn("package_name")?.setFilterValue(proxy.package_name);
    }
  }, [proxy.package_name, table]);

  return (
    <div className="rounded-md border overflow-hidden">
      <div className="bg-white rounded-t-md p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
        <Select
          onValueChange={(event) => {
            table
              .getColumn("package_name")
              ?.setFilterValue(event === "clear" ? undefined : event);

            if (event === "clear") {
              table.getColumn("country_name")?.setFilterValue(undefined);
              table.getColumn("city_name")?.setFilterValue(undefined);
              table.getColumn("rotation_time")?.setFilterValue(undefined);
              table
                .getColumn("service_provider_name")
                ?.setFilterValue(undefined);
            }
          }}
          defaultValue={
            proxy.package_name ||
            (table.getColumn("package_name")?.getFilterValue() as string) ||
            ""
          }
          disabled={uniquePackageNames.length === 0}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select a package" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value={"clear"}>Clear selection</SelectItem>
            {uniquePackageNames.map((item, index) => (
              <SelectItem key={index} value={item}>
                {item}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select
          onValueChange={(event) => {
            table
              .getColumn("country_name")
              ?.setFilterValue(event === "clear" ? undefined : event);

            if (event === "clear") {
              table.getColumn("city_name")?.setFilterValue(undefined);
              table.getColumn("rotation_time")?.setFilterValue(undefined);
              table
                .getColumn("service_provider_name")
                ?.setFilterValue(undefined);
            }
          }}
          defaultValue={
            (table.getColumn("country_name")?.getFilterValue() as string) || ""
          }
          disabled={countries.length === 0}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select a country" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value={"clear"}>Clear selection</SelectItem>
            {countries.map((item, index) => (
              <SelectItem key={index} value={item}>
                {item}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select
          onValueChange={(event) => {
            table
              .getColumn("city_name")
              ?.setFilterValue(event === "clear" ? undefined : event);
            if (event === "clear") {
              table.getColumn("rotation_time")?.setFilterValue(undefined);
              table
                .getColumn("service_provider_name")
                ?.setFilterValue(undefined);
            }
          }}
          defaultValue={
            (table.getColumn("city_name")?.getFilterValue() as string) || ""
          }
          disabled={cities.length === 0}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select a state" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value={"clear"}>Clear selection</SelectItem>
            {cities.map((item, index) => (
              <SelectItem key={index} value={item}>
                {item}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select
          onValueChange={(event) => {
            table
              .getColumn("service_provider_name")
              ?.setFilterValue(event === "clear" ? undefined : event);
            if (event === "clear") {
              table.getColumn("rotation_time")?.setFilterValue(undefined);
            }
          }}
          defaultValue={
            (table
              .getColumn("service_provider_name")
              ?.getFilterValue() as string) || ""
          }
          disabled={servicesProvider.length === 0}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select a provider" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value={"clear"}>Clear selection</SelectItem>
            {servicesProvider.map((item, index) => (
              <SelectItem key={index} value={item}>
                {item}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select
          onValueChange={(event) => {
            table
              .getColumn("rotation_time")
              ?.setFilterValue(event === "clear" ? undefined : event);
          }}
          defaultValue={
            table.getColumn("rotation_time")?.getFilterValue()?.toString() || ""
          }
          disabled={rotationsTime.length === 0}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select an IP Rotation" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value={"clear"}>Clear selection</SelectItem>
            {rotationsTime.map((item, index) => (
              <SelectItem key={index} value={item}>
                {item}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

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
              <TableRow key={row.id}>
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

      <div className="bg-white rounded-b-md flex items-center justify-between p-4">
        <Button
          variant="outline"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          <ChevronLeft className="h-5 w-5 mr-2" /> Previous
        </Button>
        <div className="flex items-center gap-2">
          {generatePageNumbers().map((page, index) => (
            <Button
              key={index}
              variant={page === currentPage ? "default" : "ghost"}
              onClick={() =>
                typeof page === "number" && table.setPageIndex(page - 1)
              }
              disabled={typeof page !== "number"}
              className={cn(
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
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          Next <ChevronRight className="h-5 w-5 ml-2" />
        </Button>
      </div>
    </div>
  );
}
