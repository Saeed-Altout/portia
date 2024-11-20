"use client";

import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";

interface TableProps {
  title: string;
  columns: any;
  data: any;
  totalPages: number;
  currentPage: number;
  prevButton?: boolean;
  nextButton?: boolean;
  setPage: (page: number) => void;
}

export const Table = ({
  title,
  columns,
  data,
  totalPages,
  currentPage,
  prevButton,
  nextButton,
  setPage,
}: TableProps) => {
  /**
   * Navigate to the next page, ensuring we don't exceed total pages.
   */
  const handleNextPage = () => {
    if (currentPage < totalPages) setPage(currentPage + 1);
  };

  /**
   * Navigate to the previous page, ensuring we don't go below page 1.
   */
  const handlePreviousPage = () => {
    if (currentPage > 1) setPage(currentPage - 1);
  };

  /**
   * Generate pagination buttons with dynamic ranges and ellipses for better UX.
   */
  const generatePagination = () => {
    const visiblePages = 3; // Number of visible pages on each side of the current page.
    const pages: JSX.Element[] = [];

    const startPage = Math.max(1, currentPage - visiblePages);
    const endPage = Math.min(totalPages, currentPage + visiblePages);

    // Add first page and ellipsis if current page is far from start.
    if (startPage > 1) {
      pages.push(
        <Button
          key={1}
          variant={currentPage === 1 ? "outline" : "ghost"}
          onClick={() => setPage(1)}
        >
          1
        </Button>
      );
      if (startPage > 2) {
        pages.push(<MoreHorizontal key="start-ellipsis" className="h-4 w-4" />);
      }
    }

    // Add middle pages dynamically.
    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <Button
          key={i}
          variant={currentPage === i ? "outline" : "ghost"}
          onClick={() => setPage(i)}
        >
          {i}
        </Button>
      );
    }

    // Add last page and ellipsis if current page is far from end.
    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        pages.push(<MoreHorizontal key="end-ellipsis" className="h-4 w-4" />);
      }
      pages.push(
        <Button
          key={totalPages}
          variant={currentPage === totalPages ? "outline" : "ghost"}
          onClick={() => setPage(totalPages)}
        >
          {totalPages}
        </Button>
      );
    }

    return pages;
  };

  return (
    <div className="flex-1 overflow-hidden">
      {/* Header */}
      <div className="w-full flex flex-col rounded-t-md py-6 px-4">
        <h3 className="font-medium text-lg">{title}</h3>
      </div>

      {/* Data Table */}
      <DataTable columns={columns} data={data} />

      {/* Pagination */}
      <div className="w-full flex justify-between items-center bg-white rounded-b-md py-5 px-6">
        <Button
          variant="outline"
          onClick={handlePreviousPage}
          disabled={currentPage === 1 || prevButton}
        >
          <ChevronLeft className="h-4 w-4" />
          <span>Previous</span>
        </Button>
        <div className="flex items-center gap-2">{generatePagination()}</div>
        <Button
          variant="outline"
          onClick={handleNextPage}
          disabled={currentPage === totalPages || nextButton}
        >
          <span>Next</span>
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};
