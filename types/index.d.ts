// Types for user authentication flows including registration, login, verification, and password reset.
declare type RegisterBody = {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  referred_by?: string;
};
declare type RegisterResponse = {
  success: boolean;
  message: string | string[];
};
declare type LoginBody = {
  email: string;
  password: string;
};
declare type LoginResponse = {
  success: boolean;
  message: string;
  access_token: string;
  token_type: string;
  expires_in: string;
};
declare type ConfirmVerificationCodeBody = {
  email: string;
  code: string;
};
declare type ConfirmVerificationCodeResponse = {
  success: boolean;
  message: string | string[];
};
declare type ResendVerificationCodeBody = {
  email: string;
};
declare type ResendVerificationCodeResponse = {
  success: boolean;
  message: string | string[];
};
declare type SendEmailToResetPasswordBody = {
  email: string;
};
declare type SendEmailToResetPasswordResponse = {
  success: boolean;
  message: string | string[];
};
declare type SetNewPasswordBody = {
  password: string;
  password_confirmation: string;
};
declare type SetNewPasswordResponse = {
  success: boolean;
  message: string | string[];
};

// Handling Error
declare type ErrorResponse = {
  success: boolean;
  message: string | string[];
};

// FAQS
declare type FaqsRootObj<T = any> = {
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
