"use client";

import * as React from "react";
import { useQueryClient } from "@tanstack/react-query";

import {
  useGetDepositsHistoriesQuery,
  useGetDepositsStatisticsQuery,
} from "@/services/deposits/hooks";
import { formatDepositsStatistics } from "@/utils/formatters";
import { getDepositsHistories } from "@/services/deposits";

interface FormattedType {
  color: string;
  amount: string;
  label: string;
}

interface DepositsContextType {
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
  depositHistories: IDepositHistory[];
  depositStatistics: FormattedType[];
  currentPage: number;
  perPage: number;
  totalPages: number;
  moveNext: () => void;
  movePrev: () => void;
  setPage: (page: number) => void;
}

const initialStatistics: IDepositStatistics = {
  monthly_deposits: 0,
  yearly_deposits: 0,
  all_time_deposits: 0,
};

const DepositsContext = React.createContext<DepositsContextType | undefined>(
  undefined
);

export const DepositsProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [currentPage, setCurrentPage] = React.useState<number>(1);
  const [totalPages, setTotalPages] = React.useState<number>(1);
  const [perPage, setPerPage] = React.useState<number>(10);
  const queryClient = useQueryClient();

  const depositsHistories = useGetDepositsHistoriesQuery({
    page: currentPage,
  });
  const depositsStatistics = useGetDepositsStatisticsQuery();

  React.useEffect(() => {
    if (depositsHistories.isSuccess) {
      setPerPage(depositsHistories.data.data.per_page);
      setTotalPages(
        Math.ceil(
          depositsHistories.data.data.total /
            depositsHistories.data.data.per_page
        )
      );

      if (currentPage < totalPages) {
        queryClient.prefetchQuery({
          queryKey: ["deposits-histories", { page: currentPage + 1 }],
          queryFn: () => getDepositsHistories({ page: currentPage + 1 }),
        });
      }
      if (currentPage > 1) {
        queryClient.prefetchQuery({
          queryKey: ["deposits-histories", { page: currentPage - 1 }],
          queryFn: () => getDepositsHistories({ page: currentPage - 1 }),
        });
      }
    }
  }, [
    currentPage,
    depositsHistories.data?.data,
    depositsHistories.isSuccess,
    queryClient,
    totalPages,
  ]);

  return (
    <DepositsContext.Provider
      value={{
        perPage,
        totalPages,
        currentPage,
        isLoading: depositsStatistics.isLoading,
        isError: depositsHistories.isError || depositsStatistics.isError,
        isSuccess: depositsHistories.isSuccess && depositsStatistics.isSuccess,
        depositHistories: depositsHistories.data?.data?.data ?? [],
        setPage: (page) => setCurrentPage(page),
        moveNext: () =>
          setCurrentPage((prev) => Math.min(prev + 1, totalPages)),
        movePrev: () => setCurrentPage((prev) => Math.max(prev - 1, 1)),
        depositStatistics: formatDepositsStatistics(
          depositsStatistics.data?.data ?? initialStatistics
        ),
      }}
    >
      {children}
    </DepositsContext.Provider>
  );
};

export const useData = () => {
  const context = React.useContext(DepositsContext);
  if (!context) {
    throw new Error("useData must be used within a DepositsProvider");
  }
  return context;
};
