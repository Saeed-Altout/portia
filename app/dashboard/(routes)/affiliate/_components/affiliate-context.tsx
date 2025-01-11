"use client";

import { formatAffiliateStatistics } from "@/helpers/formatter";
import {
  useGetAffiliateHistoriesQuery,
  useGetAffiliateStatisticsQuery,
} from "@/services/affiliate/hooks";
import React, { createContext, useContext, ReactNode } from "react";

interface FormattedType {
  color: string;
  amount: string;
  label: string;
}

interface AffiliateContextType {
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
  affiliateHistories: any[];
  affiliateStatistics: FormattedType[];
}

const initialStatistics = {
  this_month_earnings: 0,
  this_year_earnings: 0,
  total_earnings: 0,
};

const AffiliateContext = createContext<AffiliateContextType | undefined>(
  undefined
);

export const AffiliateProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const affiliateHistories = useGetAffiliateHistoriesQuery();
  const affiliateStatistics = useGetAffiliateStatisticsQuery();

  const isLoading =
    affiliateHistories.isLoading || affiliateStatistics.isLoading;
  const isError = affiliateHistories.isError || affiliateStatistics.isError;
  const isSuccess =
    affiliateHistories.isSuccess || affiliateStatistics.isSuccess;

  const formattedAffiliateStatistics = formatAffiliateStatistics(
    affiliateStatistics.data?.data ?? initialStatistics
  );

  return (
    <AffiliateContext.Provider
      value={{
        isLoading,
        isError,
        isSuccess,
        affiliateHistories: affiliateHistories.data?.data?.data ?? [],
        affiliateStatistics: formattedAffiliateStatistics,
      }}
    >
      {children}
    </AffiliateContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(AffiliateContext);
  if (!context) {
    throw new Error("useData must be used within a AffiliateProvider");
  }
  return context;
};
