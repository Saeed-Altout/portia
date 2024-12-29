import { apiClient } from "@/api/config";

export const getProxies = async ({
  state = "active",
}: {
  state: "active" | "inactive";
}): Promise<Root<IProxies>> => {
  try {
    const res = await apiClient.get(`/proxies/${state}`);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const getProxiesCount = async (): Promise<Root<IProxiesCount>> => {
  try {
    const res = await apiClient.get("/proxies/counts");
    return res.data;
  } catch (error) {
    throw error;
  }
};
