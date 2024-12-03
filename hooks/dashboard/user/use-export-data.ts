import { useMutation } from "@tanstack/react-query";
import { exportData } from "@/api";

export const useExportData = () => {
  return useMutation({
    mutationKey: ["export-data"],
    mutationFn: (values: IExportDataRequest) => exportData(values),
    onSuccess: (data) => {
      const url = window.URL.createObjectURL(new Blob([data.data]));
      const link = document.createElement("a");
      link.href = url;

      link.setAttribute("download", "data.xlsx");

      document.body.appendChild(link);
      link.click();

      link.parentNode?.removeChild(link);
      window.URL.revokeObjectURL(url);
    },
  });
};
