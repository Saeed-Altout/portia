"use client";

import React, { createContext, useContext, ReactNode } from "react";
import {
  useGetDepositsQuery,
  useGetDepositsStatisticsQuery,
} from "@/services/deposits/hooks";
import { formatDepositsStatistics } from "@/helpers/formatter";

interface FormattedDeposit {
  color: string;
  amount: string;
  label: string;
}

interface DepositsContextType {
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
  deposits: IDeposits;
  formattedDeposits: FormattedDeposit[];
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
  const deposits = useGetDepositsQuery();
  const depositsStatistics = useGetDepositsStatisticsQuery();

  const isLoading = deposits.isLoading || depositsStatistics.isLoading;
  const isError = deposits.isError || depositsStatistics.isError;
  const isSuccess = deposits.isSuccess && depositsStatistics.isSuccess;

  const formattedDeposits = formatDepositsStatistics(
    depositsStatistics.data?.data ?? initialStatistics
  );

  return (
    <DepositsContext.Provider
      value={{
        isLoading,
        isError,
        isSuccess,
        deposits: deposits.data?.data?.data ?? [],
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
    throw new Error("useDeposits must be used within a DepositsProvider");
  }
  return context;
};
