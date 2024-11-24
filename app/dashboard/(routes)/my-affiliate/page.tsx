"use client";

import { format } from "date-fns";
import { useEffect, useState } from "react";

import { columns } from "./_components/columns";

import { Loader } from "@/components/ui/loader";
import { DataTable } from "@/components/ui/data-table";

import {
  Heading,
  Pagination,
  AffiliateCode,
  StatisticCard,
} from "@/components/dashboard";
import { useGetAffiliateEarnings, useGetUserDetails } from "@/hooks/dashboard";
import { getEmail } from "@/lib/auth";

export default function MyAffiliatePage() {
  const [email, setEmail] = useState<string>("un known");
  const [page, setPage] = useState<number>(1);

  const { data: user, isLoading: isLoadingUser } = useGetUserDetails();
  const affiliateEarnings = useGetAffiliateEarnings();

  const histories = affiliateEarnings[0].data?.data;
  const statistics = affiliateEarnings[1].data?.data;
  const isLoading =
    isLoadingUser ||
    affiliateEarnings[0].isLoading ||
    affiliateEarnings[1].isLoading;

  const historiesFormatted = histories?.data.map((item) => ({
    id: item.id,
    amount: item.amount,
    email: email,
    date: format(new Date(item.created_at), "MMM dd, yyyy"),
  }));

  useEffect(() => {
    const email = getEmail();
    if (email) {
      setEmail(email);
    }
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <Heading
        title={`Welcome back ${user?.data.first_name ?? ""}`}
        description="Total Earning is: 0,00$"
        drawEarning
      />
      <AffiliateCode code={user?.data.referred_code ?? ""} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <StatisticCard
          color="#26a6a4"
          amount={statistics?.this_month_earnings ?? 0}
          label="This Month"
        />
        <StatisticCard
          color="#f63d68"
          amount={statistics?.this_year_earnings ?? 0}
          label="This Year"
        />
        <StatisticCard
          color="#7a5af8"
          amount={statistics?.total_earnings ?? 0}
          label="All Time"
        />
      </div>
      <div className="border rounded-md">
        <div className="w-full flex flex-col rounded-t-md py-6 px-4">
          <h3 className="font-medium text-lg">Your earning calendar</h3>
          <p className="text-sm">Track your earnings by days</p>
        </div>
        <DataTable columns={columns} data={historiesFormatted || []} />
        <Pagination
          prevButton={page === 1}
          nextButton={page === histories?.last_page}
          setPage={setPage}
          currentPage={page}
          totalPages={
            histories?.total && histories?.per_page
              ? histories.total / histories.per_page
              : 0
          }
        />
      </div>
    </>
  );
}
