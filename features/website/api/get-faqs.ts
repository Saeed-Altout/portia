import { AxiosResponse } from "axios";

import { _axios } from "@/lib/axios";

export const getFaqs = async (): Promise<RootObj<Faq[]>> => {
  try {
    const response: AxiosResponse<RootObj<Faq[]>> = await _axios.get(
      process.env.NEXT_PUBLIC_FAQ_ENDPOINT!
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
