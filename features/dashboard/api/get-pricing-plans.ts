import { _axios } from "@/lib/axios";
import { AxiosResponse } from "axios";

export const getPricingPlans = async (): Promise<PricingPlanResponseType> => {
  try {
    const response: AxiosResponse<PricingPlanResponseType> = await _axios.get(
      process.env.NEXT_PUBLIC_OFFERS_PLANS!
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
