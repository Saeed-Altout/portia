"use client";

import React, { createContext, useContext, ReactNode } from "react";
import {
  useGetDepositsHistoriesQuery,
  useGetDepositsStatisticsQuery,
} from "@/services/deposits/hooks";
import { formatDepositsStatistics } from "@/helpers/formatter";

interface FormattedType {
  color: string;
  amount: string;
  label: string;
}

interface DepositsContextType {
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
  deposits: any[];
  formattedDeposits: FormattedType[];
}

const initialStatistics = {
  monthly_deposits: 0,
  yearly_deposits: 0,
  all_time_deposits: 0,
};

const DepositsContext = createContext<DepositsContextType | undefined>(
  undefined
);

export const DepositsProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const depositsHistories = useGetDepositsHistoriesQuery();
  const depositsStatistics = useGetDepositsStatisticsQuery();

  const isLoading = depositsHistories.isLoading || depositsStatistics.isLoading;
  const isError = depositsHistories.isError || depositsStatistics.isError;
  const isSuccess = depositsHistories.isSuccess && depositsStatistics.isSuccess;

  const formattedDeposits = formatDepositsStatistics(
    depositsStatistics.data?.data ?? initialStatistics
  );

  return (
    <DepositsContext.Provider
      value={{
        isLoading,
        isError,
        isSuccess,
        deposits: depositsHistories.data?.data?.data ?? [],
        formattedDeposits,
      }}
    >
      {children}
    </DepositsContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DepositsContext);
  if (!context) {
    throw new Error("useData must be used within a DepositsProvider");
  }
  return context;
};
