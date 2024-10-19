import { _axios } from "@/lib/axios";
import { AxiosResponse } from "axios";

export const getAffiliateEarningsHistories = async ({
  page,
}: {
  page: number;
}): Promise<RootObj<EarningsHistory>> => {
  try {
    const response: AxiosResponse<EarningsHistoriesResponseType> =
      await _axios.get(
        `${process.env.NEXT_PUBLIC_AFFILIATE_EARNINGS_HISTORY!}?page=${page}`
      );
    return response.data;
  } catch (error) {
    throw error;
  }
};
