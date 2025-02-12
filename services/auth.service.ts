import { apiClient } from "@/lib/api";
import { AxiosError } from "axios";

class AuthService {
  static async login(values: ILoginCredentials): Promise<ILoginResponse> {
    try {
      const { data } = await apiClient.post(
        process.env.NEXT_PUBLIC_LOGIN as string,
        values
      );
      return data;
    } catch (error) {
      if (error instanceof AxiosError) {
        throw new Error(error.response?.data?.message || "Login failed");
      }
      throw error;
    }
  }

  static async register(
    values: IRegisterCredentials
  ): Promise<RootResponse<null>> {
    try {
      const { data } = await apiClient.post(
        process.env.NEXT_PUBLIC_REGISTER as string,
        values
      );
      return data;
    } catch (error) {
      if (error instanceof AxiosError) {
        throw new Error(error.response?.data?.message || "Registration failed");
      }
      throw error;
    }
  }

  static async logout(): Promise<ILogoutResponse> {
    try {
      const { data } = await apiClient.get(
        process.env.NEXT_PUBLIC_LOGOUT as string
      );
      return data;
    } catch (error) {
      if (error instanceof AxiosError) {
        throw new Error(error.response?.data?.message || "Logout failed");
      }
      throw error;
    }
  }

  static async loginWithGoogle(referred_by?: string): Promise<void> {
    try {
      const baseUrl = process.env.NEXT_PUBLIC_API_URL;
      const loginWithGooglePath = process.env.NEXT_PUBLIC_LOGIN_WITH_GOOGLE;

      if (!baseUrl || !loginWithGooglePath) {
        throw new Error("API configuration missing");
      }

      const redirectUrl = referred_by
        ? `${baseUrl}${loginWithGooglePath}?referred_by=${referred_by}`
        : `${baseUrl}${loginWithGooglePath}`;

      window.location.href = redirectUrl;
    } catch (error) {
      throw new Error("Google login redirect failed");
    }
  }

  static async resendVerificationCode(
    values: IResendVerificationCodeCredentials
  ): Promise<RootResponse<null>> {
    try {
      const { data } = await apiClient.post(
        process.env.NEXT_PUBLIC_RESEND_VERIFICATION_CODE as string,
        values
      );
      return data;
    } catch (error) {
      if (error instanceof AxiosError) {
        throw new Error(
          error.response?.data?.message || "Failed to resend verification code"
        );
      }
      throw error;
    }
  }

  static async sendResetEmail(
    values: ISendResetEmailCredentials
  ): Promise<RootResponse<null>> {
    try {
      const { data } = await apiClient.post(
        process.env.NEXT_PUBLIC_SEND_RESET_EMAIL as string,
        values
      );
      return data;
    } catch (error) {
      if (error instanceof AxiosError) {
        throw new Error(
          error.response?.data?.message || "Failed to send reset email"
        );
      }
      throw error;
    }
  }

  static async setNewPassword(
    values: ISetNewPasswordCredentials
  ): Promise<ISetNewPasswordResponse> {
    try {
      const { data } = await apiClient.post(
        process.env.NEXT_PUBLIC_SET_NEW_PASSWORD as string,
        {
          password: values.password,
          password_confirmation: values.password_confirmation,
        },
        {
          headers: { Authorization: `Bearer ${values.token}` },
        }
      );
      return data;
    } catch (error) {
      if (error instanceof AxiosError) {
        throw new Error(
          error.response?.data?.message || "Failed to set new password"
        );
      }
      throw error;
    }
  }

  static async verificationCode(
    values: IVerificationCodeCredentials
  ): Promise<IVerificationCodeResponse> {
    try {
      const { data } = await apiClient.post(
        process.env.NEXT_PUBLIC_VERIFY_CODE as string,
        values
      );
      return data;
    } catch (error) {
      if (error instanceof AxiosError) {
        throw new Error(
          error.response?.data?.message || "Code verification failed"
        );
      }
      throw error;
    }
  }
}

export const authService = new AuthService();
