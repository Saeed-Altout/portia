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
