import { Skeleton } from "@/components/ui/skeleton";

export const TabSkeleton = () => {
  return (
    <div className="hidden md:flex items-center gap-10">
      <div className="flex items-center gap-2">
        <Skeleton className="h-12 w-32" />
        <Skeleton className="h-12 w-32" />
      </div>
      <div className="flex items-center gap-2">
        <Skeleton className="h-12 w-32" />
        <Skeleton className="h-12 w-32" />
        <Skeleton className="h-12 w-32" />
      </div>
    </div>
  );
};
