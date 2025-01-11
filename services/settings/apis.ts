import { apiClient } from "@/lib/api";

export const getPackages = async (): Promise<IGetAllPackagesResponse> => {
  try {
    const response = await apiClient.get(
      process.env.NEXT_PUBLIC_GET_ALL_PACKAGES!
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getTables = async (): Promise<IGetTablesData> => {
  try {
    const response = await apiClient.get(process.env.NEXT_PUBLIC_TABLES!);
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const getPorts = async (
  params: Record<string, any>
): Promise<RootResponse<IPorts>> => {
  const filteredParams = Object.fromEntries(
    Object.entries(params).filter(
      ([, value]) =>
        value !== undefined && value !== null && value !== 0 && value !== "0"
    )
  );
  try {
    const res = await apiClient.get("/get-ports", {
      params: { ...filteredParams },
    });
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const updateUserProfile = async (
  values: IUpdateUserProfileCredentials
): Promise<RootResponse<null>> => {
  try {
    const response = await apiClient.post("/update-user-profile", values);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const sendContactMessage = async (
  values: ISendContactMessageRequest
): Promise<ISendContactMessageResponse> => {
  try {
    const response = await apiClient.post("/contact-us", values);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const exportTables = async (
  values: IExportDataRequest
): Promise<IExportDataResponse> => {
  try {
    const response = await apiClient.post(
      process.env.NEXT_PUBLIC_EXPORT!,
      values,
      {
        responseType: "arraybuffer",
      }
    );

    return response.data;
  } catch (error) {
    console.error("Error exporting data:", error);
    throw error;
  }
};

export const getCostPlans = async (
  params: Record<string, any>
): Promise<IGetCostPlansResponse> => {
  const filteredParams = Object.fromEntries(
    Object.entries(params).filter(
      ([, value]) => value !== undefined && value !== null && value !== 0
    )
  );

  try {
    const response = await apiClient.get(
      process.env.NEXT_PUBLIC_GET_COST_PLANS!,
      {
        params: { ...filteredParams },
      }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
