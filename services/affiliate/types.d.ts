declare type Root<T> = {
  status: boolean;
  data: T;
};
declare type RootResponse<T> = {
  status: boolean;
  message: string;
  data: T;
};

declare type IAffiliate = {
  id: number;
  user_id: number;
  amount: number;
  created_at: Date | string;
  updated_at: Date | string;
};

declare type IAffiliateHistories = IAffiliate[];

declare type IAffiliateStatistics = {
  this_month_earnings: number;
  this_year_earnings: number;
  total_earnings: number;
};
