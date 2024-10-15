import { _axios } from "@/lib/axios";
import { AxiosResponse } from "axios";

export const getAffiliateEarningsHistories = async ({
  queryKey,
}: {
  queryKey: any;
}): Promise<RootObj<EarningsHistory>> => {
  try {
    const response: AxiosResponse<EarningsHistoriesResponseType> =
      await _axios.get(
        `${process.env.NEXT_PUBLIC_AFFILIATE_EARNINGS_HISTORY!}?page=${
          queryKey[1] || 1
        }`
      );
    return response.data;
  } catch (error) {
    throw error;
  }
};
