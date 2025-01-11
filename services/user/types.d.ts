declare type Root<T> = {
  status: boolean;
  data: T;
};

declare type IUserBalance = {
  id: number;
  user_balance: string;
};

declare type IUser = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  referred_code: string;
};
