import { Skeleton } from "@/components/ui/skeleton";

export const PageSkelton = () => {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between flex-col md:flex-row gap-5">
        <div className="w-full space-y-2">
          <Skeleton className="h-8 max-w-52" />
          <Skeleton className="h-6 max-w-sm" />
        </div>

        <div className="w-full flex items-center justify-end gap-5">
          <Skeleton className="h-12 w-full md:max-w-40" />
          <Skeleton className="h-12 w-full md:max-w-40" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Skeleton className="h-48" />
        <Skeleton className="h-48" />
        <Skeleton className="h-48" />
      </div>
      <Skeleton className="h-72" />
    </div>
  );
};
