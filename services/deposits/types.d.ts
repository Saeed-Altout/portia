declare type Root<T> = {
  status: boolean;
  data: T;
};
declare type RootResponse<T> = {
  status: boolean;
  message: string;
  data: T;
};

declare type IDeposit = {
  id: number;
  payment_method: string;
  amount: string;
  created_at: Date | string;
};

declare type IDepositHistories = IDeposit[];

declare type IDepositStatistics = {
  monthly_deposits: number;
  yearly_deposits: number;
  all_time_deposits: number;
};
