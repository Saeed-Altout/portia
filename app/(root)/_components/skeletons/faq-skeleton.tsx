import { Skeleton } from "@/components/ui/skeleton";

export const FaqSkeleton = () => {
  return (
    <div className="flex items-center justify-between gap-x-5 py-8">
      <Skeleton className="h-6 w-full" />
      <Skeleton className="h-6 w-6 rounded-full" />
    </div>
  );
};
