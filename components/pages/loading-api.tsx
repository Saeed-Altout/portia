import { Skeleton } from "@/components/ui/skeleton";

export const LoadingApi = () => {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between flex-col md:flex-row gap-5">
        <div className="w-full space-y-2">
          <Skeleton className="h-8 w-[180px] border" />
        </div>

        <div className="w-full flex items-center justify-end gap-4">
          <Skeleton className="h-10 w-full md:w-[120px] border" />
          <Skeleton className="h-10 w-full md:w-[120px] border" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Skeleton className="h-[150px] rounded-lg border" />
        <Skeleton className="h-[150px] rounded-lg border" />
        <Skeleton className="h-[150px] rounded-lg border" />
        <Skeleton className="h-[150px] rounded-lg border" />
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
export const LoadingApi2 = () => {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between flex-col md:flex-row gap-5">
        <div className="w-full space-y-2">
          <Skeleton className="h-8 w-[180px] border" />
        </div>
        <div className="w-full flex items-center justify-end gap-4">
          <Skeleton className="h-10 w-full md:w-[120px] border" />
          <Skeleton className="h-10 w-full md:w-[120px] border" />
        </div>
      </div>
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
      <div className="flex md:hidden flex-col gap-4">
        <Skeleton className="h-12 w-full" />
        <Skeleton className="h-12 w-full" />
      </div>
      <div className="grid grid-cols-1 gap-8">
        {[...Array(3)].map((_, key) => (
          <div
            key={key}
            className="p-4 w-full flex flex-col md:flex-row items-center justify-between gap-4 border rounded-md"
          >
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
        ))}
      </div>
    </div>
  );
};

export const LoadingApi3 = () => {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between flex-col md:flex-row gap-5">
        <div className="w-full space-y-2">
          <Skeleton className="h-8 w-[180px] border" />
          <Skeleton className="h-4 w-[280px] border" />
          <Skeleton className="h-4 w-[220px] border" />
        </div>

        <div className="w-full flex items-center justify-end gap-4">
          <Skeleton className="h-10 w-full md:w-[120px] border" />
          <Skeleton className="h-10 w-full md:w-[120px] border" />
        </div>
      </div>

      <div className="rounded-lg border overflow-x-auto">
        <div className="p-4 space-y-4 min-w-[600px]">
          <div className="flex items-center justify-between">
            <Skeleton className="h-6 w-[140px]" />
            <Skeleton className="h-8 w-[100px]" />
          </div>

          <div className="space-y-3">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <Skeleton className="h-4 w-4 rounded-full" />
                  <Skeleton className="h-4 w-[100px]" />
                  <Skeleton className="h-4 w-[80px]" />
                  <Skeleton className="h-4 w-[60px]" />
                  <Skeleton className="h-4 w-[80px]" />
                  <Skeleton className="h-4 w-[60px]" />
                  <Skeleton className="h-4 w-[80px]" />
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
