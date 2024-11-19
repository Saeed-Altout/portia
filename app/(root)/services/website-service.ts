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

  async getAllProxies({
    pkg_id,
    country_id,
    city_id,
    service_provider_id,
    rotation_time,
    offset,
  }: {
    pkg_id: number;
    offset: number;
    country_id?: number;
    city_id?: number;
    service_provider_id?: number;
    rotation_time?: number;
  }): Promise<RootObj<proxy>> {
    const params: Record<string, any> = {
      pkg_id,
      country_id,
      city_id,
      service_provider_id,
      rotation_time,
    };

    Object.keys(params).forEach(
      (key) =>
        (params[key] === 0 || params[key] === undefined) && delete params[key]
    );

    try {
      const response: AxiosResponse<RootObj<proxy>> = await _axios.get(
        `${process.env.NEXT_PUBLIC_PROXIES_LOCATIONS!}?offset=${offset || 0}`,
        { params }
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  async getPackages(): Promise<RootObj<Package[]>> {
    try {
      const response: AxiosResponse<RootObj<Package[]>> = await _axios.get(
        process.env.NEXT_PUBLIC_PACKAGES!
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  async getCountries({
    pkg_id = 1,
  }: {
    pkg_id: number;
  }): Promise<RootObj<Country[]>> {
    const params: Record<string, any> = {
      pkg_id,
    };

    Object.keys(params).forEach(
      (key) =>
        (params[key] === 0 || params[key] === undefined) && delete params[key]
    );
    try {
      const response: AxiosResponse<RootObj<Country[]>> = await _axios.get(
        process.env.NEXT_PUBLIC_COUNTRIES!,
        { params }
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  async getCities({
    pkg_id,
    country_id,
  }: {
    pkg_id: number;
    country_id: number;
  }): Promise<RootObj<City[]>> {
    const params: Record<string, any> = {
      pkg_id,
      country_id,
    };

    Object.keys(params).forEach(
      (key) =>
        (params[key] === 0 || params[key] === undefined) && delete params[key]
    );
    try {
      const response: AxiosResponse<RootObj<City[]>> = await _axios.get(
        process.env.NEXT_PUBLIC_CITIES!,
        { params }
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  async getServiceProvider({
    pkg_id,
    city_id,
    country_id,
  }: {
    pkg_id: number;
    city_id: number;
    country_id: number;
  }): Promise<RootObj<ServiceProvider[]>> {
    const params: Record<string, any> = {
      pkg_id,
      city_id,
      country_id,
    };

    Object.keys(params).forEach(
      (key) =>
        (params[key] === 0 || params[key] === undefined) && delete params[key]
    );

    try {
      const response: AxiosResponse<RootObj<ServiceProvider[]>> =
        await _axios.get(process.env.NEXT_PUBLIC_SERVICE_PROVIDERS!, {
          params,
        });
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  async getIpRotations({
    pkg_id,
    country_id,
    city_id,
    service_provider_id,
    rotation_time,
  }: {
    pkg_id: number;
    country_id?: number;
    city_id?: number;
    service_provider_id?: number;
    rotation_time?: number;
  }): Promise<RootObj<string[]>> {
    const params: Record<string, any> = {
      pkg_id,
      country_id,
      city_id,
      service_provider_id,
      rotation_time,
    };

    Object.keys(params).forEach(
      (key) => (params[key] === undefined || 0) && delete params[key]
    );
    try {
      const response: AxiosResponse<RootObj<string[]>> = await _axios.get(
        process.env.NEXT_PUBLIC_IP_ROTATIONS!,
        { params }
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
