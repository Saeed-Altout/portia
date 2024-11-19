declare type UpdateUserProfileResponse = {
  success: boolean;
  message: string | string[];
};

declare type UpdateUserProfileBody = {
  first_name: string;
  last_name: string;
  email: string;
  current_password: string;
  new_password: string;
  new_password_confirmation: string;
};

declare type UserProfileResponse = {
  success: boolean;
  message: string | string[];
};

declare type UserProfile = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  referred_code: string;
};

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

declare type CategoryPlan = {
  id: number;
  name: string;
};
declare type CategoryPackage = {
  id: number;
  name: string;
};

declare type EarningsHistory = {
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

declare type Earning = {
  id: number;
  amount: number;
  email: string;
  date: Date | string;
};

declare type Proxy = {
  id: string;
  renew: boolean;
  status: boolean;
  package: string;
  plan: string;
  type: string;
  network: string;
  port: string;
  expiredData: string;
  isExpired: boolean;
  usernamePassword: string;
};

declare type Deposits = {
  id: number;
  amount: String;
  date: string;
  typeOfPayment: string;
};

declare type FiltersProps = {
  service_provider_id: number;
  pkg_id: number;
  city_id: number;
  country_id: number;
  rotation_time: number;
};


declare type ErrorResponse = {
  success: boolean;
  message: string | string[];
};

declare type LoginRequestType = {
  email: string;
  password: string | string[];
};

declare type LoginResponseType = {
  success: boolean;
  message: string | string[];
  access_token: string;
  token_type: string;
  expires_in: string;
};

declare type RegisterRequestType = {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  referred_by?: string;
};
declare type RegisterResponseType = ErrorResponse;

declare type LogoutRequestType = {
  success: boolean;
  message: string;
};
declare type LogoutResponseType = ErrorResponse;

declare type VerificationCodeRequestType = {
  email: string;
  code: string;
};
declare type VerificationCodeResponse = {
  success: boolean;
  message: string | string[];
  access_token: string;
  token_type: string;
  expires_in: string;
};

declare type SetNewPasswordRequestType = {
  password: string;
  password_confirmation: string;
  token: string;
};
declare type SetNewPasswordResponseType = {
  success: boolean;
  message: string;
  access_token: string;
  token_type: string;
  expires_in: Date | string;
};

declare type SendResetEmailRequestType = {
  email: string;
};
declare type SendResetEmailResponseType = ErrorResponse;

declare type ResendVerificationCodeRequestType = {
  email: string;
};
declare type ResendVerificationCodeResponseType = ErrorResponse;
