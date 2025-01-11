import { apiClient } from "@/lib/api";

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

export const editAuthProxy = async (
  values: IEditAuthProxyCredentials
): Promise<RootResponse<IProxies>> => {
  try {
    const res = await apiClient.post("/edit-password-proxy", values);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const editInfoProxy = async (
  values: IEditInfoProxyCredentials
): Promise<RootResponse<IProxies>> => {
  try {
    const res = await apiClient.post("/edite-parent-proxy", values);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const fixProxy = async (
  values: IFixProxyCredentials
): Promise<RootResponse<IProxies>> => {
  try {
    const res = await apiClient.post("/fix-proxy", values);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const manageProxy = async (
  values: IManageProxyCredentials
): Promise<RootResponse<IProxies>> => {
  try {
    const response = await apiClient.post(
      process.env.NEXT_PUBLIC_MANAGE_PROXY!,
      values
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
