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
