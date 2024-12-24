import { apiClient } from "@/api/config";

export const renewProxy = async (
  values: IRenewProxyRequest
): Promise<IRenewProxyResponse> => {
  try {
    const response = await apiClient.post(
      process.env.NEXT_PUBLIC_RENEW_PROXY!,
      values
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
