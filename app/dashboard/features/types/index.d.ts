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
