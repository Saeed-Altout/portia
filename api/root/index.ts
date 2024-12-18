import { apiClient } from "@/api/config";

export const getFaqs = async (): Promise<IGetFaqs> => {
  try {
    const response = await apiClient.get(process.env.NEXT_PUBLIC_FAQ!);
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const getAllFaqs = async (): Promise<IGetFaqs> => {
  try {
    const response = await apiClient.get(process.env.NEXT_PUBLIC_ALL_FAQ!);
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const getReviews = async (
  params: Record<string, any>
): Promise<IGetReviews> => {
  const filteredParams = Object.fromEntries(
    Object.entries(params).filter(
      ([, value]) => value !== undefined && value !== null && value !== 0
    )
  );
  try {
    const response = await apiClient.get(process.env.NEXT_PUBLIC_REVIEWS!, {
      params: { ...filteredParams },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const sendContactMessage = async (
  values: ISendContactMessageRequest
): Promise<ISendContactMessageResponse> => {
  try {
    const response = await apiClient.post(
      process.env.NEXT_PUBLIC_CONTACT_MESSAGE!,
      values
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const getOffers = async (): Promise<IGetOffers> => {
  try {
    const response = await apiClient.get(process.env.NEXT_PUBLIC_OFFERS!);
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const getFeaturesOffer = async (): Promise<IGetFeaturesOffer> => {
  try {
    const response = await apiClient.get(
      process.env.NEXT_PUBLIC_FEATURES_OFFER!
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getPlansOffer = async (): Promise<IGetPlansOffer> => {
  try {
    const response = await apiClient.get(process.env.NEXT_PUBLIC_PLANS_OFFERS!);
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const getDataMap = async (): Promise<IGetDataMap> => {
  try {
    const response = await apiClient.get(process.env.NEXT_PUBLIC_MAP!);
    return response.data;
  } catch (error) {
    throw error;
  }
};
