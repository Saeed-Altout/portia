/**
 * Generic API response type.
 * Represents the structure of a response returned by the API.
 *
 * @template T - The type of the `data` field in the response.
 */
declare type ApiResponse<T> = {
  success: boolean; // Indicates whether the API call was successful.
  data: T; // Contains the data returned by the API.
};

interface AxiosErrorResponse {
  message?: string | string[];
}
/**
 * Response structure for the "Update User Profile" API.
 * Used when the response includes a success flag and a message.
 */
declare type IUpdateUserProfileResponse = {
  success: boolean; // Indicates whether the update operation was successful.
  message: string | string[]; // A success or error message, can be a single string or an array of strings.
};

/**
 * Request payload for the "Update User Profile" API.
 * Includes all fields required to update a user's profile.
 */
declare type IUpdateUserProfileRequest = {
  first_name: string; // The user's first name.
  last_name: string; // The user's last name.
  email: string; // The user's email address.
  current_password: string; // The user's current password.
  new_password: string; // The new password the user wants to set.
  new_password_confirmation: string; // Confirmation for the new password.
};

declare type IPackage = {
  id: number;
  name: string;
};

declare type IGetAllPackagesResponse = ApiResponse<IPackage[]>;
declare type ICountry = {
  id: number;
  country_name: string;
};

declare type IGetProxyCountriesResponse = ApiResponse<ICountry[]>;
declare type ICity = {
  id: number;
  city_name: string;
  country_id: number;
};

declare type IGetProxyCitiesResponse = ApiResponse<ICity[]>;

declare type ILocation = {
  id: number;
  http_port: number;
  socks_port: number;
  service_provider_name: string;
  country_name: string;
  city_name: string;
  rotation_time: number;
  is_available: boolean;
};

declare type IProxyLocation = {
  count: number;
  list: ILocation[];
  has_more: boolean;
};

declare type IGetProxyLocationsResponse = ApiResponse<IProxyLocation>;
declare type IProxyIpRotation = string;

declare type IGetProxyIpRotationsResponse = ApiResponse<IProxyIpRotation[]>;

declare type IProxyServiceProvider = {
  id: number;
  city_name: string;
  service_provider_name: string;
};

declare type IGetProxyServiceProvidersResponse = ApiResponse<IProxyServiceProvider[]>;
declare type IAddProxyRequest = {
  parent_proxy_id: any;
  pkg_id: any;
  re_new: any;
  protocol: string;
  protocol_value: any;
  duration: string;
  username: string;
  password: string;
};
declare type IProxy = {
  id: number;
  proxy_id: string;
  parent_proxy_id: string;
  package_id: string;
  package_name: string;
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
  duration: number;
  price: string;
  expire_at: Date | string;
  created_at: Date | string;
  updated_at: Date | string;
  user_id: number;
};

declare type IAddProxyResponse = ApiResponse<IProxy[]>;

declare type IEditInfoProxyRequest = {
  parent_proxy_id: string;
  proxy_id: string;
  protocol: string;
};
declare type IEditAuthProxyRequest = {
  proxy_id: string;
  password: string;
};
declare type IFixProxyRequest = {
  pkg_id: string;
  proxy_id: string;
};

declare type IEditInfoProxyResponse = ApiResponse<IProxy[]>;
declare type IEditAuthProxyResponse = ApiResponse<IProxy[]>;
declare type IFixProxyResponse = ApiResponse<IProxy[]>;
declare type IGetProxiesActiveResponse = ApiResponse<{
  current_page: number;
  data: IProxy[];
  first_page_url: string;
  from: number;
  last_page: number;
  last_page_url: string;
  links: {
    url: string;
    label: string;
    active: boolean;
  }[];
  next_page_url: string;
  path: string;
  per_page: number;
  prev_page_url: string;
  to: number;
  total: number;
}>;
declare type IGetProxiesInactiveResponse = ApiResponse<{
  current_page: number;
  data: IProxy[];
  first_page_url: string;
  from: number;
  last_page: number;
  last_page_url: string;
  links: {
    url: string;
    label: string;
    active: boolean;
  }[];
  next_page_url: string;
  path: string;
  per_page: number;
  prev_page_url: string;
  to: number;
  total: number;
}>;
declare type IProxiesCounts = {
  total: number;
  active: number;
  inactive: number;
};
declare type IGetProxiesCountsResponse = ApiResponse<IProxiesCounts>;

declare type IAffiliateStatistics = {
  this_month_earnings: number;
  this_year_earnings: number;
  total_earnings: number;
};
declare type IGetAffiliateStatisticsResponse = ApiResponse<IAffiliateStatistics>;
declare type IAffiliateHistories = {
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
    url: string;
    label: string;
    active: boolean;
  }[];
  next_page_url: string;
  path: string;
  per_page: number;
  prev_page_url: string;
  to: number;
  total: number;
};
declare type IGetAffiliateHistoriesResponse = ApiResponse<IAffiliateHistories>;

declare type IDepositStatistics = {
  monthly_deposits: number;
  yearly_deposits: number;
  all_time_deposits: number;
};
declare type IGetDepositStatisticsResponse = ApiResponse<IDepositStatistics>;

declare type IDepositHistories = {
  current_page: number;
  data: {
    id: number;
    payment_method: string;
    amount: string;
    created_at: Date | string;
  }[];
  first_page_url: string;
  from: number;
  last_page: number;
  last_page_url: string;
  links: {
    url: string;
    label: string;
    active: boolean;
  }[];
  next_page_url: string;
  path: string;
  per_page: number;
  prev_page_url: string;
  to: number;
  total: number;
};

declare type IGetDepositHistoriesResponse = ApiResponse<IDepositHistories>;

declare type IGetCostPlansResponse = ApiResponse<{
  plan: {
    value: number;
    price: number;
    duration: number;
  }[];
}>;
declare type IPort = string;
declare type IGetPortsResponse = ApiResponse<IPort[]>;

declare type IOffer = {
  id: number;
  amount: number;
  cost: string;
  is_top: boolean;
  description: string;
};
declare type IPlan = {
  plan_name: string;
  offers: IOffer[];
};
declare type IPricingPlan = {
  name: string;
  plans: IPlan[];
};

declare type IGetPricingPlansResponse = ApiResponse<IPricingPlan[]>;

declare type IUserBalance = {
  id: number;
  user_balance: string;
};

declare type IGetUserBalanceResponse = ApiResponse<IUserBalance>;

declare type IUser = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  referred_code: string;
};

declare type IGetUserDetailsResponse = ApiResponse<IUser>;

declare type ILoginRequest = {
  email: string;
  password: string;
};
declare type ILoginResponse = {
  status: boolean;
  data: {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    referred_code: string;
  };
  message: string;
  access_token: string;
  token_type: string;
  expires_in: string;
};

declare type IRegisterRequest = {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  referred_by?: string;
};

declare type IRegisterResponse = {
  success: boolean;
  message: string | string[];
};
declare type IVerificationCodeRequest = {
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

declare type ISendResetEmailRequest = {
  email: string;
};

declare type ISendResetEmailResponse = {
  success: boolean;
  message: string | string[];
};

declare type ISetNewPasswordRequest = {
  password: string;
  password_confirmation: string;
  token: string;
};
declare type ISetNewPasswordResponse = {
  success: boolean;
  message: string;
  access_token: string;
  token_type: string;
  expires_in: Date | string;
};

declare type IResendVerificationCodeRequest = {
  email: string;
};

declare type IResendVerificationCodeResponse = {
  success: boolean;
  message: string | string[];
};

declare type ILogoutRequestResponse = {
  success: boolean;
  message: string;
};
declare type IFaq = {
  id: number;
  question: string;
  answer: string;
  created_at: Date | string;
  updated_at: Date | string;
};

declare type IGetFaqs = ApiResponse<IFaq[]>;
declare type IReview = {
  id: number;
  user_name: string;
  specialization: string;
  message: string;
  rating: number;
  user_image: string;
};

declare type IGetReviews = ApiResponse<IReview[]>;

declare type ISendContactMessageRequest = {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  message: string;
};

declare type ISendContactMessageResponse = {
  success: boolean;
  message: string | string[];
};

declare type IOffer = {
  id: number;
  amount: number;
  cost: string;
  is_popular: boolean;
  plan: string;
  package: {
    id: number;
    name: string;
    description: string;
    feature_groups: {
      id: number;
      name: string;
      package_id: number;
      features: {
        id: number;
        feature_group_id: number;
        name: string;
        description: string;
        value: string | null;
      }[];
    }[];
  };
};

declare type IGetOffers = ApiResponse<IOffer[]>;
declare type IFeaturesOffer = {
  id: number;
  name: string;
  name: string;
  packages: {
    id: number;
    package_id: number;
    value: string;
  }[];
};

declare type IGetFeaturesOffer = ApiResponse<IFeaturesOffer[]>;

declare type IHistory = {
  id: number;
  payment_method: string;
  amount: string;
  date: Date | string;
};
declare type IAffiliateHistory = {
  id: number;
  amount: string;
  email: string;
  date: Date | string;
};
