"use client";

import { toast } from "sonner";
import { format } from "date-fns";
import { useEffect, useRef, useState } from "react";

import { ChevronLeft, ChevronRight, Copy, MoreHorizontal } from "lucide-react";

import { DataTable } from "@/components/dashboard/data-table";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { Loader } from "@/components/dashboard/loader";
import { Heading } from "@/components/dashboard/heading";

import { useOrigin } from "@/hooks/use-origin";

import { columns } from "./_components/columns";
import { StatisticsCard } from "./_components/statistics-card";

import { useSessionContext } from "@/providers/session-provider";

import { useGetAffiliateEarningsHistoryQuery } from "@dashboard/hooks/affiliate-system/get-affiliate-earnings-history-query";
import { useGetAffiliateEarningsStatisticsQuery } from "@dashboard/hooks/affiliate-system/get-affiliate-earnings-statistics-query";

import localStorage from "@/services/local-storage";

export default function MyAffiliatePage() {
  const { session, isLoading } = useSessionContext();
  const [http, host] = useOrigin().split("://");

  const inputRef = useRef(null);
  const [email, setEmail] = useState<string>("un known");
  const [page, setPage] = useState<number>(1);

  const {
    data: history,
    isSuccess: historyIsSuccess,
    isError: historyIsError,
    isLoading: historyIsLoading,
  } = useGetAffiliateEarningsHistoryQuery(page);

  const {
    data: statistics,
    isSuccess: statisticsIsSuccess,
    isError: statisticsIsError,
    isLoading: statisticsIsLoading,
  } = useGetAffiliateEarningsStatisticsQuery();

  const historyFormatted = historyIsSuccess
    ? history?.data.data.map((item) => ({
        id: item.id,
        amount: item.amount,
        email: email,
        date: format(new Date(item.created_at), "MMM dd, yyyy"),
      }))
    : [];

  const onCopy = () => {
    if (inputRef.current) {
      navigator.clipboard.writeText(
        `${http}://${(inputRef.current as HTMLInputElement).value}`
      );
      toast.success("Affiliate link copied to clipboard.");
    }
  };
  const totalPages = historyIsSuccess
    ? Math.ceil(history.data.total / history.data.per_page)
    : 1;

  useEffect(() => {
    const email = localStorage.getEmail();
    if (email) {
      setEmail(email);
    }
  }, []);

  if (
    isLoading ||
    statisticsIsLoading ||
    !statisticsIsSuccess ||
    statisticsIsError ||
    historyIsError ||
    historyIsLoading ||
    !historyIsSuccess
  ) {
    return <Loader />;
  }

  return (
    <>
      <Heading
        title={`Welcome back, ${session?.first_name}`}
        description="your total money is: 0.00$"
        drawEarning
      />
      <div className="max-w-2xl space-y-2">
        <div className="flex items-center justify-between gap-2 w-full">
          <div className="w-full">
            <Input
              ref={inputRef}
              prefix={`${http}://`}
              type="text"
              name="url"
              value={`${host}/auth/register?code=${session?.referred_code}`}
            />
          </div>
          <Button size="icon" variant="outline" onClick={onCopy}>
            <Copy className="h-4 w-4" />
            <span className="sr-only">Copy</span>
          </Button>
        </div>
        <p className="text-sm">
          10% of all paid payments. from referred users. Over 60 days are
          credited into your balance.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <StatisticsCard
          color="#26a6a4"
          amount={statistics.data.this_month_earnings || 0.0}
          label="This Month"
        />
        <StatisticsCard
          color="#f63d68"
          amount={statistics.data.this_year_earnings || 0.0}
          label="This Year"
        />
        <StatisticsCard
          color="#7a5af8"
          amount={statistics.data.total_earnings || 0.0}
          label="All Time"
        />
      </div>
      <div className="border rounded-md">
        <div className="w-full flex flex-col rounded-t-md py-6 px-4">
          <h3 className="font-medium text-lg">Your earning calendar</h3>
          <p className="text-sm">Track your earnings by days</p>
        </div>
        <DataTable columns={columns} data={historyFormatted} />
        <div className="w-full flex justify-between items-center rounded-b-md py-6 px-4">
          <Button
            variant="outline"
            disabled={page === 1}
            onClick={() => setPage((prev) => prev - 1)}
          >
            <ChevronLeft className="h-4 w-4" />
            <span>Previous</span>
          </Button>
          <div className="flex justify-center items-center gap-x-2">
            {page >= 2 && (
              <Button
                size="icon"
                variant="ghost"
                onClick={() => setPage(page - 1)}
              >
                {page - 1}
              </Button>
            )}
            <Button
              size="icon"
              variant="ghost"
              className="bg-secondary"
              onClick={() => setPage(page)}
            >
              {page}
            </Button>
            {totalPages >= 4 && page >= 4 && (
              <Button size="icon" variant="ghost">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            )}
            {page <= totalPages && totalPages > 1 && (
              <Button
                size="icon"
                variant="ghost"
                onClick={() => setPage(page + 1)}
              >
                {page + 1}
              </Button>
            )}
          </div>
          <Button
            variant="outline"
            disabled={page === history.data.last_page}
            onClick={() => setPage((prev) => prev + 1)}
          >
            <span>Next</span>
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </>
  );
}
