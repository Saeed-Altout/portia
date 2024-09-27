import { AxiosResponse } from "axios";

import { _axios } from "@/lib/axios";

const loginEndpoint = "/auth/login";
const logoutEndpoint = "/auth/logout";
const registerEndpoint = "/auth/register";
const loginWithGoogleEndpoint = "/auth/google/redirect";
const confirmVerificationCodeEndpoint = "/auth/confirm-verification-code";
const sendEmailToResetPasswordEndpoint = "/auth/send-email-to-reset-password";
const setNewPasswordEndpoint = "/auth/set-new-password";

export const authService = {
  async register(data: RegisterBody): Promise<RegisterResponse> {
    try {
      const response: AxiosResponse<RegisterResponse> =
        await _axios.post<RegisterResponse>(registerEndpoint, data);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  async login(data: LoginBody): Promise<LoginResponse> {
    try {
      const response: AxiosResponse<LoginResponse> =
        await _axios.post<LoginResponse>(loginEndpoint, data);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  async loginWithGoogle(): Promise<void> {
    try {
      await _axios.get(loginWithGoogleEndpoint);
    } catch (error) {
      throw error;
    }
  },

  async logout(): Promise<void> {
    try {
      await _axios.get(logoutEndpoint);
    } catch (error) {
      throw error;
    }
  },

  async confirmVerificationCode(
    data: ConfirmVerificationCodeBody
  ): Promise<ConfirmVerificationCodeResponse> {
    try {
      const response: AxiosResponse<ConfirmVerificationCodeResponse> =
        await _axios.post<ConfirmVerificationCodeResponse>(
          confirmVerificationCodeEndpoint,
          data
        );
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  async resendVerificationCode(
    email: ResendVerificationCodeBody
  ): Promise<ResendVerificationCodeResponse> {
    try {
      const response: AxiosResponse<ResendVerificationCodeResponse> =
        await _axios.post<ResendVerificationCodeResponse>(
          confirmVerificationCodeEndpoint,
          email
        );
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  async sendEmailToResetPassword(
    email: SendEmailToResetPasswordBody
  ): Promise<SendEmailToResetPasswordResponse> {
    try {
      const response: AxiosResponse<SendEmailToResetPasswordResponse> =
        await _axios.post<SendEmailToResetPasswordResponse>(
          sendEmailToResetPasswordEndpoint,
          email
        );
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  async setNewPassword(
    data: SetNewPasswordBody
  ): Promise<SetNewPasswordResponse> {
    try {
      const response: AxiosResponse<SetNewPasswordResponse> =
        await _axios.post<SetNewPasswordResponse>(setNewPasswordEndpoint, data);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};
