import { AxiosError } from "axios";
import { apiClient } from "@/lib/api";
import { filterParams } from "@/utils/filter-params";

class ProxyService {
  static async getCostPlans(
    params: Record<string, any>
  ): Promise<RootResponse<ICostPlans>> {
    const filteredParams = filterParams(params);
    try {
      const { data } = await apiClient.get(
        process.env.NEXT_PUBLIC_GET_COST_PLANS as string,
        { params: { ...filteredParams } }
      );
      return data;
    } catch (error) {
      if (error instanceof AxiosError) {
        throw new Error(
          error.response?.data?.message || "Failed to get cost plans"
        );
      }
      throw error;
    }
  }

  static async getPackages(): Promise<
    RootResponse<{ id: number; name: string }[]>
  > {
    try {
      const { data } = await apiClient.get(
        process.env.NEXT_PUBLIC_GET_ALL_PACKAGES as string
      );
      return data;
    } catch (error) {
      if (error instanceof AxiosError) {
        throw new Error(
          error.response?.data?.message || "Failed to get packages"
        );
      }
      throw error;
    }
  }

  static async getPorts(
    params: Record<string, any>
  ): Promise<RootResponse<string[]>> {
    const filteredParams = filterParams(params);
    try {
      const { data } = await apiClient.get(
        process.env.NEXT_PUBLIC_GET_PORTS as string,
        { params: { ...filteredParams } }
      );
      return data;
    } catch (error) {
      if (error instanceof AxiosError) {
        throw new Error(error.response?.data?.message || "Failed to get ports");
      }
      throw error;
    }
  }
}

export const proxyService = new ProxyService();
