import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  prevButton?: boolean;
  nextButton?: boolean;
  setPage: (page: number) => void;
}

export const Pagination = ({
  totalPages,
  currentPage,
  prevButton = false,
  nextButton = false,
  setPage,
}: PaginationProps) => {
  const handleNextPage = () => setPage(Math.min(currentPage + 1, totalPages));
  const handlePreviousPage = () => setPage(Math.max(currentPage - 1, 1));

  const generatePagination = () => {
    const maxVisiblePages = 5;
    const pages = [];

    const startPage = Math.max(
      1,
      currentPage - Math.floor(maxVisiblePages / 2)
    );
    const endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

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

    if (endPage < totalPages) {
      pages.push(
        <MoreHorizontal key="more" className="h-4 w-4 mx-1 text-gray-500" />
      );
    }

    return pages;
  };
  return (
    <div className="w-full flex justify-between items-center bg-white rounded-b-md py-5 px-6">
      <Button
        variant="outline"
        onClick={handlePreviousPage}
        disabled={prevButton}
      >
        <ChevronLeft className="h-4 w-4" />
        <span>Previous</span>
      </Button>
      <div className="flex items-center gap-2">{generatePagination()}</div>
      <Button variant="outline" onClick={handleNextPage} disabled={nextButton}>
        <span>Next</span>
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  );
};
