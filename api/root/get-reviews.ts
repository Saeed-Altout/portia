import { AxiosResponse } from "axios";

import { _axios } from "@/lib/axios";

export const getReviews = async ({
  per_page,
}: {
  per_page: number;
}): Promise<RootObj<Review[]>> => {
  const params: Record<string, any> = {
    per_page,
  };

  Object.keys(params).forEach(
    (key) => params[key] === undefined && delete params[key]
  );

  try {
    const response: AxiosResponse<RootObj<Review[]>> = await _axios.get(
      process.env.NEXT_PUBLIC_REVIEWS!,
      { params }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
