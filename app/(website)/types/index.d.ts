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
  user_id: number;
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
  is_top: boolean;
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

declare type proxy = {
  id: number;
  http_port: number;
  socks_port: number;
  service_provider_city_id: number;
  service_provider_id: number;
  service_provider_name: string;
  country_id: number;
  country_name: string;
  city_id: number;
  city_name: string;
  rotation_time: number;
  is_available: true;
  technology: string;
  status: string;
  usage: number;
};

declare type Package = {
  id: number;
  package_name: string;
}[];

declare type Country = {
  id: number;
  country_name: string;
}[];

declare type City = {
  id: number;
  city_name: string;
  country_id: number;
}[];
declare type ServiceProvider = {
  id: number;
  city_name: string;
  service_provider_name: number;
}[];
