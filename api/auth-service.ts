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
  async register(user: RegisterBody): Promise<RegisterResponse> {
    try {
      const response: AxiosResponse<RegisterResponse> =
        await _axios.post<RegisterResponse>(registerEndpoint, user);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  async login(user: LoginBody): Promise<LoginResponse> {
    try {
      const response: AxiosResponse<LoginResponse> =
        await _axios.post<LoginResponse>(loginEndpoint, user);
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
    user: ConfirmVerificationCodeBody
  ): Promise<ConfirmVerificationCodeResponse> {
    try {
      const response: AxiosResponse<ConfirmVerificationCodeResponse> =
        await _axios.post<ConfirmVerificationCodeResponse>(
          confirmVerificationCodeEndpoint,
          user
        );
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  async resendVerificationCode(
    user: ResendVerificationCodeBody
  ): Promise<ResendVerificationCodeResponse> {
    try {
      const response: AxiosResponse<ResendVerificationCodeResponse> =
        await _axios.post<ResendVerificationCodeResponse>(
          confirmVerificationCodeEndpoint,
          user
        );
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  async sendEmailToResetPassword(
    user: SendEmailToResetPasswordBody
  ): Promise<SendEmailToResetPasswordResponse> {
    try {
      const response: AxiosResponse<SendEmailToResetPasswordResponse> =
        await _axios.post<SendEmailToResetPasswordResponse>(
          sendEmailToResetPasswordEndpoint,
          user
        );
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  async setNewPassword(
    user: SetNewPasswordBody
  ): Promise<SetNewPasswordResponse> {
    try {
      const response: AxiosResponse<SetNewPasswordResponse> =
        await _axios.post<SetNewPasswordResponse>(setNewPasswordEndpoint, user);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};
