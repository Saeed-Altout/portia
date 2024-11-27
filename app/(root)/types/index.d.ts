declare type SendContactMessageBody = {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  message: string;
};

declare type SendContactMessageResponse = {
  success: boolean;
  message: string | string[];
};

declare type RootObj<T = any> = {
  success: boolean;
  data: T;
};

declare type Faq = {
  id: number;
  question: string;
  answer: string;
  created_at: Date | string;
  updated_at: Date | string;
};

declare type Review = {
  id: number;
  user_name: string;
  specialization: string;
  message: string;
  rating: number;
  user_image: string;
};

declare type Plan = {
  id: number;
  name: string;
};

declare type FeatureGroup = {
  id: number;
  name: string;
  package_id: number;
  features: {
    id: number;
    feature_group_id: number;
    name: string;
    description: string | null;
    value: string | boolean | null;
    created_at: Date | string;
    updated_at: Date | string;
  }[];
  created_at: Date | string;
  updated_at: Date | string;
};

declare type FeaturesOffers = {
  success: boolean;
  message: string;
  data: {
    id: number;
    name: string;
    name: string;
    packages: {
      id: number;
      package_id: number;
      value: string;
    }[];
  }[];
};

declare type Offer = {
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

declare type ProxyRootObj<T = any> = {
  count: number;
  list: T;
  has_more: boolean;
};

declare type ListProxy = {
  id: number;
  http_port: number;
  socks_port: number;
  service_provider_name: string;
  country_name: string;
  city_name: string;
  rotation_time: number;
  is_available: boolean;
};

declare type proxy = {
  count: number;
  list: ListProxy[];
  has_more: boolean;
};

declare type Package = {
  id: number;
  name: string;
};

declare type Country = {
  id: number;
  country_name: string;
};
declare type IDepositsStatistics = {
  monthly_deposits: number;
  yearly_deposits: number;
  all_time_deposits: number;
};
declare type IDepositsHistory = {
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

declare type City = {
  id: number;
  city_name: string;
  country_id: number;
};

declare type ServiceProvider = {
  id: number;
  city_name: string;
  service_provider_name: string;
};
declare type IpRotation = string;
