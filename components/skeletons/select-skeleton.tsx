import { Skeleton } from "@/components/ui/skeleton";

export const SelectSkeleton = () => {
  return (
    <div className="flex md:hidden flex-col gap-4">
      <Skeleton className="h-12 w-full" />
      <Skeleton className="h-12 w-full" />
    </div>
  );
};
