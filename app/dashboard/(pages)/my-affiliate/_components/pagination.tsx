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
  return (
    <div className="w-full flex justify-between items-center rounded-b-md py-6 px-4">
      <Button
        variant="outline"
        disabled={prevButton}
        onClick={() => setPage(currentPage - 1)}
      >
        <ChevronLeft className="h-4 w-4" />
        <span>Previous</span>
      </Button>
      <div className="flex justify-center items-center gap-x-2">
        {currentPage >= 2 && (
          <Button
            size="icon"
            variant="ghost"
            onClick={() => setPage(currentPage - 1)}
          >
            {currentPage - 1}
          </Button>
        )}
        <Button
          size="icon"
          variant="ghost"
          className="bg-secondary"
          onClick={() => setPage(currentPage)}
        >
          {currentPage}
        </Button>
        {totalPages >= 4 && currentPage >= 4 && (
          <Button size="icon" variant="ghost">
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        )}
        {currentPage <= totalPages && totalPages > 1 && (
          <Button
            size="icon"
            variant="ghost"
            onClick={() => setPage(currentPage + 1)}
          >
            {currentPage + 1}
          </Button>
        )}
      </div>
      <Button
        variant="outline"
        disabled={nextButton}
        onClick={() => setPage(currentPage + 1)}
      >
        <span>Next</span>
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  );
};
