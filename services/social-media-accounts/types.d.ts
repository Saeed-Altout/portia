declare type Root<T> = {
  status: boolean;
  data: T;
};

declare type ISocialMediaAccount = {
  name: string;
  tag: string;
  url: string;
  img_url: string;
};

declare type ISocialMediaAccounts = ISocialMediaAccount[];
