"use client";

import * as React from "react";
import { useQueryClient } from "@tanstack/react-query";

import {
  useGetAffiliateHistoriesQuery,
  useGetAffiliateStatisticsQuery,
} from "@/services/affiliate/hooks";
import { formatAffiliateStatistics } from "@/utils/formatters";
import { getDepositsHistories } from "@/services/deposits";

interface FormattedType {
  color: string;
  amount: string;
  label: string;
}

interface AffiliateContextType {
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
  affiliateHistories: IAffiliateHistory[];
  affiliateStatistics: FormattedType[];
  currentPage: number;
  perPage: number;
  totalPages: number;
  moveNext: () => void;
  movePrev: () => void;
  setPage: (page: number) => void;
}

const initialStatistics: IAffiliateStatistics = {
  this_month_earnings: 0,
  this_year_earnings: 0,
  total_earnings: 0,
};

const AffiliateContext = React.createContext<AffiliateContextType | undefined>(
  undefined
);

export const AffiliateProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [currentPage, setCurrentPage] = React.useState<number>(1);
  const [totalPages, setTotalPages] = React.useState<number>(1);
  const [perPage, setPerPage] = React.useState<number>(10);
  const queryClient = useQueryClient();

  const affiliateHistories = useGetAffiliateHistoriesQuery({
    page: currentPage,
  });
  const affiliateStatistics = useGetAffiliateStatisticsQuery();

  React.useEffect(() => {
    if (affiliateHistories.isSuccess) {
      setPerPage(affiliateHistories.data.data.per_page);
      setTotalPages(
        Math.ceil(
          affiliateHistories.data.data.total /
            affiliateHistories.data.data.per_page
        )
      );

      if (currentPage < totalPages) {
        queryClient.prefetchQuery({
          queryKey: ["affiliate-histories", { page: currentPage + 1 }],
          queryFn: () => getDepositsHistories({ page: currentPage + 1 }),
        });
      }
      if (currentPage > 1) {
        queryClient.prefetchQuery({
          queryKey: ["affiliate-histories", { page: currentPage - 1 }],
          queryFn: () => getDepositsHistories({ page: currentPage - 1 }),
        });
      }
    }
  }, [
    currentPage,
    affiliateHistories.data?.data,
    affiliateHistories.isSuccess,
    queryClient,
    totalPages,
  ]);

  return (
    <AffiliateContext.Provider
      value={{
        perPage,
        totalPages,
        currentPage,
        isLoading: affiliateStatistics.isLoading,
        isError: affiliateHistories.isError || affiliateStatistics.isError,
        isSuccess:
          affiliateHistories.isSuccess && affiliateStatistics.isSuccess,
        affiliateHistories: affiliateHistories.data?.data?.data ?? [],
        setPage: (page) => setCurrentPage(page),
        moveNext: () =>
          setCurrentPage((prev) => Math.min(prev + 1, totalPages)),
        movePrev: () => setCurrentPage((prev) => Math.max(prev - 1, 1)),
        affiliateStatistics: formatAffiliateStatistics(
          affiliateStatistics.data?.data ?? initialStatistics
        ),
      }}
    >
      {children}
    </AffiliateContext.Provider>
  );
};

export const useData = () => {
  const context = React.useContext(AffiliateContext);
  if (!context) {
    throw new Error("useData must be used within a DepositsProvider");
  }
  return context;
};
