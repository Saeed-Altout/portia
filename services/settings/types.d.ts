declare type RootResponse<T> = {
  status: boolean;
  data: T;
  message: string | string[] | null;
};

declare type IPort = string;
declare type IPorts = IPort[];

declare type IUpdateUserProfileCredentials = {
  first_name: string;
  last_name: string;
  email: string;
  current_password: string;
  new_password: string;
  new_password_confirmation: string;
};
