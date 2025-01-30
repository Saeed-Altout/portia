/**
 * Base response type for API responses
 * @template T The type of data contained in the response
 */
declare type RootResponse<T> = {
  status: boolean;
  message: string | string[];
  data: T;
};

/**
 * Generic API response type
 * @template T The type of data contained in the response
 */
declare type ApiResponse<T> = {
  status: boolean;
  data: T;
};

/**
 * Response type specifically for map data
 * @template T The type of countries data
 */
declare type ApiMapResponse<T> = {
  status: string;
  countries: T;
};

// Authentication Types
/**
 * Credentials required for user login
 */
declare type ILoginCredentials = {
  email: string;
  password: string;
};

/**
 * Response structure for successful login
 */
declare type ILoginResponse = {
  status: boolean;
  data: IUser;
  message: string;
  access_token: string;
  token_type: string;
  expires_in: string;
};

/**
 * Response structure for logout
 */
declare type ILogoutResponse = {
  success: boolean;
  message: string;
};

/**
 * Registration credentials structure
 */
declare type IRegisterCredentials = {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  referred_by?: string;
  fcm_token: string;
};

declare type IRegisterResponse = null;

/**
 * Credentials for verification code resend
 */
declare type IResendVerificationCodeCredentials = {
  email: string;
};

declare type IResendVerificationCodeResponse = null;

/**
 * Credentials for password reset email
 */
declare type ISendResetEmailCredentials = {
  email: string;
};

declare type ISendResetEmailResponse = null;

/**
 * Credentials for setting new password
 */
declare type ISetNewPasswordCredentials = {
  password: string;
  password_confirmation: string;
  token: string;
};

declare type ISetNewPasswordResponse = {
  success: boolean;
  message: string | string[];
  access_token: string;
  token_type: string;
  expires_in: Date | string;
};

/**
 * Verification code submission structure
 */
declare type IVerificationCodeCredentials = {
  email: string;
  code: string;
};

declare type IVerificationCodeResponse = {
  success: boolean;
  message: string | string[];
  access_token: string;
  token_type: string;
  expires_in: string;
};

// User Related Types
/**
 * User profile information
 */
declare type IUser = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  referred_code: string;
  user_balance: string;
  edit_profile: boolean;
  notification_enable: boolean;
};

declare type IGetUserResponse = RootApi<IUser>;

/**
 * User profile update credentials
 */
declare type IUpdateUserProfileCredentials = {
  first_name: string;
  last_name: string;
  email: string;
  current_password: string;
  new_password: string;
  new_password_confirmation: string;
};

// Proxy Related Types
/**
 * Basic proxy information
 */
declare type IProxy = {
  id: number;
  proxy_id: string;
  plan_id: number;
  plan_name: string;
  package_id: string;
  package_name: string;
  parent_proxy_id: string;
  rotation_time: string;
  is_active: number;
  re_new: number;
  protocol: string;
  protocol_port: number;
  country_name: string;
  city_name: string;
  service_provider: string;
  username: string;
  password: string;
  ip_addr: string;
  amount: number;
  duration: number;
  price: string;
  expire_at: string;
  created_at: Date;
  updated_at: Date;
};

/**
 * Simplified proxy information
 */
declare type IShortProxy = {
  parent_proxy_id: string;
  package_id: number;
  package_name: string;
  plan_id: number;
  plan: string;
  duration: number;
  port: string;
  service_provider_name: string;
  country_name: string;
  city_name: string;
  amount: number;
  rotation_time: number;
};

/**
 * Proxy activation details
 */
declare type IActivateProxy = {
  parent_proxy_id: string;
  package_id: number;
  package_name: string;
  plan_id: number;
  plan: string;
  duration: number;
  port: string;
  service_provider_name: string;
  country_name: string;
  city_name: string;
  amount: number;
  rotation_time: number;
};

declare type IGetProxyByIdResponse = RootApi<IActivateProxy>;

/**
 * Proxy counts statistics
 */
declare type IProxiesCount = {
  total: number;
  active: number;
  inactive: number;
};

// Proxy Management Credentials
declare type IEditAuthProxyCredentials = {
  proxy_id: string;
  password: string;
};

declare type IEditInfoProxyCredentials = {
  parent_proxy_id: string;
  proxy_id: string;
  protocol: string;
};

declare type IFixProxyCredentials = {
  pkg_id: string;
  proxy_id: string;
};

declare type IManageProxyCredentials = {
  proxy_id: string;
  parent_proxy_id: string;
  protocol: string;
  password: string;
};

declare type IAddProxyCredentials = {
  parent_proxy_id: any;
  pkg_id: any;
  protocol: string;
  duration: string;
  username: string;
  password: string;
};

declare type IActivateProxyCredentials = {
  parent_proxy_id: any;
  pkg_id: any;
  protocol: string;
  duration: string;
  username: string;
  password: string;
};

declare type IRenewProxyCredentials = {
  proxy_id: string;
  duration: string;
  parent_proxy_id: string;
  protocol?: string;
  password?: string;
};

// Financial Types
/**
 * Deposit transaction information
 */
declare type IDepositCredentials = {
  payment_method: string;
  amount: string;
};

declare type IDepositResponse = {
  url: string;
};

declare type IDepositHistory = {
  id: number;
  payment_method: string;
  amount: string;
  created_at: Date;
  status: string;
};

declare type IDepositHistories = {
  current_page: number;
  data: IDepositHistory[];
  first_page_url: string;
  from: number;
  last_page: number;
  last_page_url: string;
  links: PaginationLinks[];
  next_page_url: string | null;
  path: string;
  per_page: number;
  prev_page_url: string | null;
  to: number;
  total: number;
};

declare type IDepositStatistics = {
  monthly_deposits: number;
  yearly_deposits: number;
  all_time_deposits: number;
};

// Affiliate Related Types
/**
 * Affiliate transaction history
 */
declare type IAffiliateHistory = {
  id: number;
  user_id: number;
  amount: number;
  created_at: Date;
};

declare type IAffiliateHistories = {
  current_page: number;
  data: IAffiliateHistory[];
  first_page_url: string;
  from: number;
  last_page: number;
  last_page_url: string;
  links: PaginationLinks[];
  next_page_url: string | null;
  path: string;
  per_page: number;
  prev_page_url: string | null;
  to: number;
  total: number;
};

declare type IAffiliateStatistics = {
  this_month_earnings: number;
  this_year_earnings: number;
  total_earnings: number;
};

// Other Types
/**
 * FAQ entry structure
 */
declare type IFaq = {
  id: number;
  question: string;
  answer: string;
  created_at: Date;
  updated_at: Date;
};

declare type IGetFaqsResponse = RootApi<IFaq[]>;

/**
 * Social media link structure
 */
declare type ISocialMediaLink = {
  id: number;
  name: string;
  icon_url: string;
  url: string;
};

declare type IGetSocialMediaLinksResponse = RootApi<ISocialMediaLink[]>;

/**
 * Generic link structure
 */
declare type ILink = {
  id: number;
  name: string;
  icon_url: string;
  url: string;
};

/**
 * Notification structure
 */
declare type INotification = {
  id: string;
  title: string;
  message: string;
  type: string;
  date: string | Data;
  read_at: string | Data;
};

/**
 * Pagination link structure
 */
declare type PaginationLinks = {
  url: string | null;
  label: string;
  active: boolean;
};

/**
 * Map data structure
 */
declare type IMapData = {
  id: number;
  name: string;
  cities_count: number;
  parents_count: number;
  latitude: number;
  longitude: number;
  country_key: string;
  flag_url: string;
};

/**
 * Location information structure
 */
declare type ILocation = {
  id: number;
  service_provider_id: number;
  service_provider_name: string;
  country_id: number;
  country_name: string;
  city_id: number;
  city_name: string;
  rotation_time: number;
  is_available: boolean;
  status: string;
  package_id: number;
  package_name: string;
};

/**
 * Offer plan structure
 */

declare type IOfferPlan = {
  id: number;
  cost: string;
  description: string;
  title: string;
  plan_id: number;
  package_id: number;
  is_available: boolean;
  color: string;
};

/**
 * Package plan structure
 */
declare type IPackagePlan = {
  package_id: number;
  package_name: string;
  plans: {
    id: number;
    name: string;
  }[];
};

/**
 * Cost plans structure
 */
declare type ICostPlans = {
  day: {
    value: number;
    price: number;
    duration: number;
  }[];
  week: {
    value: number;
    price: number;
    duration: number;
  }[];
  month: {
    value: number;
    price: number;
    duration: number;
  }[];
  hour: {
    value: number;
    price: number;
    duration: number;
  }[];
};

/**
 * Offer data structure
 */
declare type IOfferData = {
  id: number;
  amount: any;
  cost: string;
  is_popular: any;
  plan: string;
  package: {
    id: number;
    name: string;
    description: string;
    feature_groups: {
      id: number;
      name: string;
      features: {
        id: number;
        name: string;
        description: string;
        value: string;
      }[];
    }[];
  };
};

/**
 * Feature data structure
 */
declare type IFeatureData = {
  id: number;
  name: string;
  description: string;
  packages: {
    id: number;
    package_id: number;
    value: string;
  }[];
};

/**
 * Review data structure
 */
declare type IReview = {
  id: number;
  user_name: string;
  specialization: string;
  message: string;
  rating: number;
  user_image: string;
};

/**
 * Package plan structure
 */
declare type IPackagePlan = {
  package_id: number;
  package_name: string;
  plans: {
    id: number;
    name: string;
  }[];
};

/**
 * Offer plan structure
 */
declare type IOfferPlan = {
  id: number;
  cost: string;
  description: string;
  title: string;
  plan_id: number;
  package_id: number;
  is_available: boolean;
  color: string;
};

declare type ISendContactMessageCredentials = {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  message: string;
};
