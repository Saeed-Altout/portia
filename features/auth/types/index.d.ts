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

declare type VerificationCodeRequestType = {
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

declare type SetNewPasswordRequestType = {
  password: string;
  password_confirmation: string;
  token: string;
};
declare type SetNewPasswordResponseType = {
  success: boolean;
  message: string;
  access_token: string;
  token_type: string;
  expires_in: Date | string;
};

declare type SendResetEmailRequestType = {
  email: string;
};
declare type SendResetEmailResponseType = ErrorResponse;

declare type ResendVerificationCodeRequestType = {
  email: string;
};
declare type ResendVerificationCodeResponseType = ErrorResponse;
