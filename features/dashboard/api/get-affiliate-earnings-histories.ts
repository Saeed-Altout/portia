import { _axios } from "@/lib/axios";
import { AxiosResponse } from "axios";

export const getAffiliateEarningsHistories = async (
  page?: number
): Promise<RootObj<EarningsHistory>> => {
  const params: Record<string, any> = {
    page,
  };

  Object.keys(params).forEach(
    (key) => params[key] === undefined && delete params[key]
  );

  try {
    const response: AxiosResponse<EarningsHistoriesResponseType> =
      await _axios.get(
        `${process.env.NEXT_PUBLIC_AFFILIATE_EARNINGS_HISTORY!}`,
        { params }
      );
    return response.data;
  } catch (error) {
    throw error;
  }
};
