import { apiClient } from "@/api/config";

export const exportData = async (
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
