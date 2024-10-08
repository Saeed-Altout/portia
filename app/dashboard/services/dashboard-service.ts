import { AxiosResponse } from "axios";

import { _axios } from "@/lib/axios";

export const dashboardService = {
  async updateUserProfile(
    data: UpdateUserProfileBody
  ): Promise<UpdateUserProfileResponse> {
    try {
      const response: AxiosResponse<UpdateUserProfileResponse> =
        await _axios.post(process.env.NEXT_PUBLIC_USER_PROFILE_ENDPOINT!, data);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  async getUserProfile(): Promise<RootObj<UserProfile>> {
    try {
      const response: AxiosResponse<RootObj<UserProfile>> = await _axios.get(
        process.env.NEXT_PUBLIC_USER_DETAILS!
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  async getPricingPlans(): Promise<RootObj<PricingPlan[]>> {
    try {
      const response: AxiosResponse<RootObj<PricingPlan[]>> = await _axios.get(
        process.env.NEXT_PUBLIC_OFFERS_PLANS!
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  async getCategoriesPlans(): Promise<RootObj<CategoryPlan[]>> {
    try {
      const response: AxiosResponse<RootObj<CategoryPlan[]>> = await _axios.get(
        process.env.NEXT_PUBLIC_CATEGORIES_PLANS!
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  async getCategoriesPackages(): Promise<RootObj<CategoryPackage[]>> {
    try {
      const response: AxiosResponse<RootObj<CategoryPackage[]>> =
        await _axios.get(process.env.NEXT_PUBLIC_CATEGORIES_PACKAGES!);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  async getAffiliateEarningsHistory({
    queryKey,
  }: {
    queryKey: any;
  }): Promise<RootObj<EarningsHistory>> {
    try {
      const response: AxiosResponse<RootObj<EarningsHistory>> =
        await _axios.get(
          `${process.env.NEXT_PUBLIC_AFFILIATE_EARNINGS_HISTORY!}?page=${
            queryKey[1] || 1
          }`
        );
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  async getAffiliateEarningsStatistics(): Promise<RootObj<EarningsStatistics>> {
    try {
      const response: AxiosResponse<RootObj<EarningsStatistics>> =
        await _axios.get(
          process.env.NEXT_PUBLIC_AFFILIATE_EARNINGS_STATISTICS!
        );
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};
