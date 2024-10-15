declare type RootObj<T = any> = {
  success: boolean;
  data: T;
};

declare type User = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  referred_code: string;
};
declare type UserDetails = RootObj<User>;

declare type PricingPlan = {
  name: string;
  plans: {
    plan_name: string;
    offers: {
      id: number;
      amount: number;
      cost: string;
      is_top: boolean;
      description: string | null;
    }[];
  }[];
};

declare type PricingPlanResponseType = RootObj<PricingPlan[]>;

declare type UpdateUserProfileRequestType = {
  first_name: string;
  last_name: string;
  email: string;
  current_password: string;
  new_password: string;
  new_password_confirmation: string;
};

declare type UpdateUserProfileResponseType = {
  success: boolean;
  message: string | string[];
};

declare type EarningsHistories = {
  current_page: number;
  data: {
    id: number;
    user_id: number;
    amount: number;
    created_at: Date | string;
    updated_at: Date | string;
  }[];
  first_page_url: string;
  from: number;
  last_page: number;
  last_page_url: string;
  links: {
    url: string | null;
    label: string;
    active: boolean;
  }[];
  next_page_url: string | null;
  path: string;
  per_page: number;
  prev_page_url: string | null;
  to: number;
  total: number;
};

declare type EarningsStatistics = {
  this_month_earnings: number;
  this_year_earnings: number;
  total_earnings: number;
};

declare type EarningsHistoriesResponseType = RootObj<EarningsHistories>;
declare type EarningsStatisticsResponseType = RootObj<EarningsStatistics>;
