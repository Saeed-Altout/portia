import { AxiosError } from "axios";
import { apiClient } from "@/lib/api";

class SettingsService {
  static async getSocialMediaAccounts(): Promise<
    ApiResponse<ISocialMediaLink[]>
  > {
    try {
      const { data } = await apiClient.get(
        process.env.NEXT_PUBLIC_GET_SOCIAL_MEDIA_ACCOUNTS as string
      );
      return data;
    } catch (error) {
      if (error instanceof AxiosError) {
        throw new Error(
          error.response?.data?.message || "Failed to get social media accounts"
        );
      }
      throw error;
    }
  }

  static async getSupportLinks(): Promise<ApiResponse<ILink[]>> {
    try {
      const { data } = await apiClient.get<ApiResponse<ILink[]>>(
        process.env.NEXT_PUBLIC_GET_SUPPORT_LINKS as string
      );
      return data;
    } catch (error) {
      if (error instanceof AxiosError) {
        throw new Error(
          error.response?.data?.message || "Failed to get support links"
        );
      }
      throw error;
    }
  }

  static async exportTables(values: {
    tables: string[];
  }): Promise<ArrayBuffer> {
    try {
      const { data } = await apiClient.post(
        process.env.NEXT_PUBLIC_EXPORT_TABLES as string,
        values,
        { responseType: "arraybuffer" }
      );
      return data;
    } catch (error) {
      if (error instanceof AxiosError) {
        throw new Error(
          error.response?.data?.message || "Failed to export tables"
        );
      }
      throw error;
    }
  }
  static async getTables(): Promise<RootResponse<string[]>> {
    try {
      const { data } = await apiClient.get(
        process.env.NEXT_PUBLIC_GET_TABLES as string
      );
      return data;
    } catch (error) {
      if (error instanceof AxiosError) {
        throw new Error(
          error.response?.data?.message || "Failed to get tables"
        );
      }
      throw error;
    }
  }

  static async sendContactMessage(
    values: ISendContactMessageCredentials
  ): Promise<RootResponse<null>> {
    try {
      const { data } = await apiClient.post(
        process.env.NEXT_PUBLIC_SEND_CONTACT_MESSAGE as string,
        values
      );
      return data;
    } catch (error) {
      if (error instanceof AxiosError) {
        throw new Error(
          error.response?.data?.message || "Failed to send contact message"
        );
      }
      throw error;
    }
  }
  static async addFcmToken(values: {
    fcm_token: string;
  }): Promise<RootResponse<null>> {
    try {
      const { data } = await apiClient.post(
        process.env.NEXT_PUBLIC_ADD_FCM_TOKEN!,
        values
      );
      return data;
    } catch (error) {
      if (error instanceof AxiosError) {
        throw new Error(
          error.response?.data?.message || "Failed to add FCM token"
        );
      }
      throw error;
    }
  }
}

export const settingsService = new SettingsService();
