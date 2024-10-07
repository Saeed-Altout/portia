"use client";

import { useState } from "react";
import { format } from "date-fns";
import {
  ChevronLeft,
  ChevronRight,
  DollarSign,
  MoreHorizontal,
} from "lucide-react";

import { columns } from "./columns";
import { DataTable } from "./data-table";

import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

import { useGetAffiliateEarningsHistoryQuery } from "@dashboard/hooks/affiliate-system/get-affiliate-earnings-history-query";

export const History = () => {
  const [page, setPage] = useState(1);
  const {
    data: history,
    isSuccess,
    isError,
    isLoading,
  } = useGetAffiliateEarningsHistoryQuery(page);

  const dataHistoryFormatted = isSuccess
    ? history?.data.data.map((item) => ({
        id: item.id,
        amount: item.amount,
        email: "saeedaltout@gmail.com",
        date: format(new Date(item.created_at), "MMM dd, yyyy"),
      }))
    : [];

  const totalPages = isSuccess
    ? Math.ceil(history?.data.total / history?.data.per_page)
    : 1;

  const handleNextPage = () =>
    setPage((prev) => Math.min(prev + 1, totalPages));
  const handlePreviousPage = () => setPage((prev) => Math.max(prev - 1, 1));

  const generatePagination = () => {
    const maxVisiblePages = 5;
    const pages = [];

    const startPage = Math.max(1, page - Math.floor(maxVisiblePages / 2));
    const endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <Button
          key={i}
          variant={page === i ? "outline" : "ghost"}
          onClick={() => setPage(i)}
        >
          {i}
        </Button>
      );
    }

    if (endPage < totalPages) {
      pages.push(
        <MoreHorizontal key="more" className="h-4 w-4 mx-1 text-gray-500" />
      );
    }

    return pages;
  };

  return (
    <div className="border rounded-md bg-[#F5F5FA]">
      <div className="bg-white rounded-t-md py-5 px-6 space-y-1">
        <h3 className="font-medium text-lg">Your earning calendar</h3>
        <p className="text-sm">Track your earnings by days</p>
      </div>

      {isLoading && (
        <>
          <div className="flex flex-col justify-start items-start h-full min-h-[500px]">
            {[...Array(10)].map((_, index) => (
              <div
                key={index}
                className="bg-white w-full py-6 px-4 flex justify-between items-center border-t"
              >
                <Skeleton className="h-5 w-32" />
                <Skeleton className="h-5 w-32" />
                <Skeleton className="h-5 w-32" />
              </div>
            ))}
          </div>
          <div className="flex justify-between items-center bg-white rounded-b-md border-t py-5 px-6">
            <Skeleton className="h-10 w-28" />
            <div className="flex items-center gap-x-2">
              <Skeleton className="h-10 w-10" />
              <Skeleton className="h-10 w-10" />
            </div>
            <Skeleton className="h-10 w-28" />
          </div>
        </>
      )}

      {isError && (
        <div className="flex flex-col justify-center items-center h-full min-h-[500px]">
          <div className="flex flex-col justify-center items-center space-y-3">
            <DollarSign className="text-gray-600 h-32 w-32" />
            <h3 className="text-gray-600 font-semibold">
              There isn&apos;t any earnings yet
            </h3>
            <p>Share your affiliate link and start making earnings</p>
          </div>
        </div>
      )}

      {isSuccess && (
        <>
          <DataTable columns={columns} data={dataHistoryFormatted} />
          <div className="flex justify-between items-center bg-white rounded-b-md py-5 px-6">
            <Button
              variant="outline"
              onClick={handlePreviousPage}
              disabled={page === 1}
            >
              <ChevronLeft className="h-4 w-4" />
              <span>Previous</span>
            </Button>
            <div className="flex items-center gap-2">
              {generatePagination()}
            </div>
            <Button
              variant="outline"
              onClick={handleNextPage}
              disabled={page === totalPages}
            >
              <span>Next</span>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </>
      )}
    </div>
  );
};
