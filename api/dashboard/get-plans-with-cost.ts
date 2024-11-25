import { AxiosResponse } from "axios";
import { apiClient } from "@/api/config";
import { API_GET_PLANS_WITH_COST } from "@/config/constants";

type ParamsType = {
  [key: string]: string | number | boolean | undefined | null;
};

export const getPlansWithCost = async (
  params: ParamsType
): Promise<RootObj<PlanWithPriceResponse>> => {
  const filteredParams = Object.fromEntries(
    Object.entries(params).filter(
      ([, value]) => value !== undefined && value !== null && value !== 0
    )
  );

  try {
    const response: AxiosResponse<RootObj<PlanWithPriceResponse>> =
      await apiClient.get<RootObj<PlanWithPriceResponse>>(
        API_GET_PLANS_WITH_COST,
        { params: { ...filteredParams } }
      );
    return response.data;
  } catch (error) {
    throw error;
  }
};
