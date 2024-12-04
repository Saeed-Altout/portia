import { useMutation } from "@tanstack/react-query";
import { exportData } from "@/api";
import { useResponse } from "@/hooks";

export const useExportData = () => {
  const { Success, Error } = useResponse();

  return useMutation({
    mutationKey: ["export-data"],
    mutationFn: (values: IExportDataRequest) => exportData(values),
    onSuccess: (data) => {
      const url = window.URL.createObjectURL(new Blob([data]));
      const link = document.createElement("a");
      link.href = url;

      link.setAttribute("download", "data.xlsx");

      document.body.appendChild(link);
      link.click();

      link.parentNode?.removeChild(link);
      window.URL.revokeObjectURL(url);

      Success({ message: "Export data is success." });
    },
    onError: (error) => {
      Error({ error, message: "Export data is filed. please try again." });
    },
  });
};
