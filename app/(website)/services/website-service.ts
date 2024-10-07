import { AxiosResponse } from "axios";

import { _axios } from "@/lib/axios";

export const websiteService = {
  async sendContactMessage(
    data: SendContactMessageBody
  ): Promise<SendContactMessageResponse> {
    try {
      const response: AxiosResponse<SendContactMessageResponse> =
        await _axios.post<SendContactMessageResponse>(
          process.env.NEXT_PUBLIC_CONTACT_MESSAGE_ENDPOINT!,
          data
        );
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  async getAllFaqs(): Promise<RootObj<Faq[]>> {
    try {
      const response: AxiosResponse<RootObj<Faq[]>> = await _axios.get(
        process.env.NEXT_PUBLIC_ALL_FAQ_ENDPOINT!
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  async getFaqs(): Promise<RootObj<Faq[]>> {
    try {
      const response: AxiosResponse<RootObj<Faq[]>> = await _axios.get(
        process.env.NEXT_PUBLIC_FAQ_ENDPOINT!
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  async getOffers(): Promise<RootObj<Offer[]>> {
    try {
      const response: AxiosResponse<RootObj<Offer[]>> = await _axios.get(
        process.env.NEXT_PUBLIC_OFFERS!
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  async getFeaturesOffers(): Promise<FeaturesOffers> {
    try {
      const response: AxiosResponse<FeaturesOffers> = await _axios.get(
        process.env.NEXT_PUBLIC_FEATURES_OFFERS!
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  async getProxies(): Promise<ProxyRootObj<proxy[]>> {
    try {
      const response: AxiosResponse<ProxyRootObj<proxy[]>> = await _axios.get(
        process.env.NEXT_PUBLIC_MEGA_PANEL_API_URL! +
          process.env.NEXT_PUBLIC_PROXIES!
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  async getPackages(): Promise<Package[]> {
    try {
      const response: AxiosResponse<Package[]> = await _axios.get(
        process.env.NEXT_PUBLIC_MEGA_PANEL_API_URL! +
          process.env.NEXT_PUBLIC_PACKAGES!
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  async getCountries(): Promise<Country[]> {
    try {
      const response: AxiosResponse<Country[]> = await _axios.get(
        process.env.NEXT_PUBLIC_MEGA_PANEL_API_URL! +
          process.env.NEXT_PUBLIC_COUNTRIES!
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  async getCities(): Promise<City[]> {
    try {
      const response: AxiosResponse<City[]> = await _axios.get(
        process.env.NEXT_PUBLIC_MEGA_PANEL_API_URL! +
          process.env.NEXT_PUBLIC_CITIES!
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  async getServiceProvider(): Promise<ServiceProvider[]> {
    try {
      const response: AxiosResponse<ServiceProvider[]> = await _axios.get(
        process.env.NEXT_PUBLIC_MEGA_PANEL_API_URL! +
          process.env.NEXT_PUBLIC_CITIES!
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  async getReviews({
    queryKey,
  }: {
    queryKey: any;
  }): Promise<RootObj<Review[]>> {
    try {
      const response: AxiosResponse<RootObj<Review[]>> = await _axios.get(
        `${process.env.NEXT_PUBLIC_REVIEWS!}?per_page=${queryKey[1] || 1}`
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};
