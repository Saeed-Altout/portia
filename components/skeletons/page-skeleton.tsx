import { Skeleton } from "@/components/ui/skeleton";

export const PageSkelton = () => {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between flex-col md:flex-row gap-5">
        <div className="w-full space-y-2">
          <Skeleton className="h-8 w-[180px]" />
        </div>

        <div className="w-full flex items-center justify-end gap-4">
          <Skeleton className="h-10 w-full md:w-[120px]" />
          <Skeleton className="h-10 w-full md:w-[120px]" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Skeleton className="h-[150px] rounded-lg" />
        <Skeleton className="h-[150px] rounded-lg" />
        <Skeleton className="h-[150px] rounded-lg" />
        <Skeleton className="h-[150px] rounded-lg" />
      </div>

      <div className="rounded-lg border overflow-x-auto">
        <div className="p-4 space-y-4 min-w-[600px]">
          <div className="flex items-center justify-between">
            <Skeleton className="h-6 w-[140px]" />
            <Skeleton className="h-8 w-[100px]" />
          </div>

          <div className="space-y-3">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <Skeleton className="h-4 w-4 rounded-full" />
                  <Skeleton className="h-4 w-[100px]" />
                  <Skeleton className="h-4 w-[80px]" />
                  <Skeleton className="h-4 w-[60px]" />
                </div>
                <Skeleton className="h-8 w-[80px]" />
              </div>
            ))}
          </div>
        </div>

        <div className="p-4 border-t min-w-[600px]">
          <div className="flex items-center justify-between">
            <Skeleton className="h-8 w-[100px]" />
            <div className="flex gap-2">
              <Skeleton className="h-8 w-8" />
              <Skeleton className="h-8 w-8" />
              <Skeleton className="h-8 w-8" />
            </div>
            <Skeleton className="h-8 w-[100px]" />
          </div>
        </div>
      </div>
    </div>
  );
};
