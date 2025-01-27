// COMMON TYPES
declare type Root<T> = {
  status: boolean;
  data: T;
};

declare type RootResponse<T> = {
  status: boolean;
  message: string | string[];
  data: T;
};

declare type User = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  referred_code: string;
};

// GET TYPES
declare type Affiliate = {
  id: number;
  user_id: number;
  amount: number;
  created_at: Date | string;
  updated_at: Date | string;
};
declare type Affiliates = Affiliate[];
declare type AffiliateStatistics = {
  this_month_earnings: number;
  this_year_earnings: number;
  total_earnings: number;
};

// POST TYPES
declare type LoginCredentials = {
  email: string;
  password: string;
};
declare type LoginResponse = {
  status: boolean;
  data: IUser;
  message: string;
  access_token: string;
  token_type: string;
  expires_in: string;
};
declare type LogoutResponse = {
  success: boolean;
  message: string;
};
declare type RegisterCredentials = {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  referred_by?: string;
  fcm_token: string;
};
declare type RegisterResponse = RootResponse<null>;
declare type ResendVerificationCodeCredentials = {
  email: string;
};
declare type ResendVerificationCodeResponse = RootResponse<null>;
declare type SendResetEmailCredentials = {
  email: string;
};
declare type SendResetEmailResponse = RootResponse<null>;

declare type SetNewPasswordCredentials = {
  password: string;
  password_confirmation: string;
  token: string;
};
declare type SetNewPasswordResponse = {
  success: boolean;
  message: string | string[];
  access_token: string;
  token_type: string;
  expires_in: Date | string;
};
declare type VerificationCodeCredentials = {
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

declare type DepositCredentials = {
  payment_method: string;
  amount: string;
};
declare type DepositResponse = RootResponse<{ url: string }>;
declare type GetWayPaymentResponse = RootResponse<string[]>;
declare type DepositHistory = {
  id: number;
  payment_method: string;
  amount: string;
  created_at: Date | string;
};
declare type DepositHistories = DepositHistory[];
declare type DepositStatistics = {
  monthly_deposits: number;
  yearly_deposits: number;
  all_time_deposits: number;
};

declare type Faq = {
  id: number;
  question: string;
  answer: string;
  created_at: Date | string;
  updated_at: Date | string;
};
declare type Faqs = Faq[];
declare type GetFaqsResponse = ApiResponse<Faqs>;
declare type Location = {
  id: number;
  http_port: number;
  socks_port: number;
  service_provider_name: string;
  country_name: string;
  city_name: string;
  rotation_time: any;
  is_available: boolean;
  service_provider_id: number;
  country_id: number;
  city_id: number;
  status: string;
  package_id: number;
  package_name: string;
};
declare type Locations = Location[];
declare type Country = {
  id: number;
  name: string;
  cities_count: number;
  parents_count: number;
  latitude: number;
  longitude: number;
  country_key: string;
  flag_url: string;
};
declare type Countries = Country[];
declare type GetDataMapResponse = {
  status: boolean;
  message: string | string[];
  countries: Countries;
};
declare type OfferFeature = {
  id: number;
  feature_group_id: number;
  name: string;
  description: string;
  value: string | null;
};
declare type OfferFeatureGroup = {
  id: number;
  name: string;
  package_id: number;
  features: OfferFeature[];
};
declare type OfferPackage = {
  id: number;
  name: string;
  description: string;
  feature_groups: OfferFeatureGroup[];
};
declare type Offer = {
  id: number;
  amount: number;
  cost: string;
  is_popular: boolean;
  plan: string;
  package: OfferPackage;
};
declare type Offers = Offer[];
declare type OfferFeatures = OfferFeature[];
declare type OfferFeatureGroups = OfferFeatureGroup[];
declare type OfferPackages = OfferPackage[];

declare type FeaturesOffer = {
  id: number;
  name: string;
  name: string;
  packages: {
    id: number;
    package_id: number;
    value: string;
  }[];
};
declare type FeaturesOffers = FeaturesOffer[];

declare type PlanOffer = {
  id: number;
  amount: number;
  cost: string;
  is_top: number;
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
        value: string;
      }[];
    }[];
  };
};
declare type PlansOffer = PlanOffer[];
declare type Offer = {
  id: number;
  amount: number;
  cost: string;
  is_top: number;
  plan: string;
  package: OfferPackage;
};
declare type Offers = Offer[];

declare type OfferPlan = {
  id: number;
  cost: string;
  description: string;
  plan_id: number;
  package_id: number;
  title: string;
  is_available: boolean;
  color: string;
};
declare type OffersPlan = OfferPlan[];
declare type OfferPackage = {
  package_id: number;
  package_name: string;
  plans: {
    id: number;
    name: string;
  }[];
};

declare type OfferPackages = OfferPackage[];
declare type Proxy = {
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
  ip_addr: string | null;
  amount: number;
  duration: number;
  price: string;
  expire_at: string;
  created_at: string | null;
  updated_at: string | null;
};

declare type Proxies = Proxy[];
declare type ProxiesCount = {
  total: number;
  active: number;
  inactive: number;
};

declare type EditAuthProxyCredentials = {
  proxy_id: string;
  password: string;
};

declare type EditInfoProxyCredentials = {
  parent_proxy_id: string;
  proxy_id: string;
  protocol: string;
};

declare type FixProxyCredentials = {
  pkg_id: string;
  proxy_id: string;
};

declare type ManageProxyCredentials = {
  proxy_id: string;
  parent_proxy_id: string;
  protocol: string;
  password: string;
};
declare type AddProxyCredentials = {
  parent_proxy_id: any;
  pkg_id: any;
  protocol: string;
  duration: string;
  username: string;
  password: string;
};
declare type ActivateProxyCredentials = {
  parent_proxy_id: any;
  pkg_id: any;
  protocol: string;
  duration: string;
  username: string;
  password: string;
};

declare type RenewProxyCredentials = {
  proxy_id: string;
  duration: string;
  parent_proxy_id: string;
  protocol?: string;
  password?: string;
};

declare type Review = {
  id: number;
  user_name: string;
  specialization: string;
  message: string;
  rating: number;
  user_image: string;
};
declare type UpdateUserProfileCredentials = {
  first_name: string;
  last_name: string;
  email: string;
  current_password: string;
  new_password: string;
  new_password_confirmation: string;
};
declare type SendContactMessageCredentials = {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  message: string;
};
declare type SocialMediaAccount = {
  id: number;
  name: string;
  icon_url: string;
  url: string;
};
declare type Notification = {
  id: string;
  title: string;
  message: string;
  type: string;
  date: Date | string;
  read_at: string | null;
};

declare type Notifications = Notification[];

// //////////////////////////////////////////////

declare type ApiResponse<T> = {
  status: boolean;
  data: T;
};
declare type RootApi<T> = {
  status: boolean;
  data: T;
};

declare type IDepositHistory = {
  id: number;
  payment_method: string;
  amount: string;
  created_at: string | Date;
  status: string;
};

declare type IGetDepositsHistoriesResponse = RootApi<{
  current_page: number;
  data: IDepositHistory[];
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

declare type IDepositStatistics = {
  monthly_deposits: number;
  yearly_deposits: number;
  all_time_deposits: number;
};

declare type IGetDepositStatisticsResponse = RootApi<IDepositStatistics>;

declare type IAffiliateHistory = {
  id: number;
  user_id: number;
  amount: number;
  created_at: Date | string;
  updated_at: Date | string;
};

declare type IGetAffiliatesHistoriesResponse = RootApi<{
  current_page: number;
  data: IAffiliateHistory[];
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

declare type IAffiliateStatistics = {
  this_month_earnings: number;
  this_year_earnings: number;
  total_earnings: number;
};

declare type IGetAffiliateStatisticsResponse = RootApi<IAffiliateStatistics>;

declare type IProxy = {};
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

declare type IGetOffersPlansResponse = RootApi<IOfferPlan[]>;

declare type IPackagePlan = {
  package_id: number;
  package_name: string;
  plans: {
    id: number;
    name: string;
  }[];
};

declare type IGetPackagesPlansResponse = RootApi<IPackagePlan[]>;

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
declare type IGetCostPlansResponse = RootApi<ICostPlans>;

declare type IFaq = {
  id: number;
  question: string;
  answer: string;
  created_at: string | Date;
  updated_at: string | Date;
};

declare type IGetFaqsResponse = RootApi<IFaq[]>;

declare type ISocialMediaLink = {
  id: number;
  name: string;
  icon_url: string;
  url: string;
};
declare type IGetSocialMediaLinksResponse = RootApi<ISocialMediaLink[]>;

declare type IUser = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  referred_code: string;
  user_balance: string;
  edit_profile: boolean;
};

declare type IGetUserResponse = RootApi<IUser>;

declare type INotification = {
  id: string;
  title: string;
  message: string;
  type: string;
  date: string | Data;
  read_at: string | Data;
};

declare type ILink = {
  id: number;
  name: string;
  icon_url: string;
  url: string;
};
