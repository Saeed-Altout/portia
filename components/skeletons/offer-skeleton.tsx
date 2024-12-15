import { Skeleton } from "@/components/ui/skeleton";

export const OfferSkeleton = () => {
  return (
    <div className="p-4 w-full flex flex-col md:flex-row items-center justify-between gap-4 border rounded-md">
      <div className="w-full flex items-center gap-4 md:max-w-md">
        <Skeleton className="h-[50px] w-[50px] rounded-full flex-shrink-0" />
        <div className="space-y-2 w-full">
          <Skeleton className="h-5 w-full" />
          <Skeleton className="h-5 w-full" />
        </div>
      </div>
      <div className="w-full flex flex-row md:flex-col gap-4 items-center md:items-start md:max-w-xs">
        <Skeleton className="h-5 w-1/2" />
        <Skeleton className="h-12 w-full" />
      </div>
    </div>
  );
};
