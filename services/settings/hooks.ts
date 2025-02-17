import { useMutation, useQuery } from "@tanstack/react-query";
import {
  exportTables,
  getCostPlans,
  getPackages,
  getPorts,
  getTables,
  sendContactMessage,
  updateUserProfile,
  getSocialMediaAccounts,
  getUserBalance,
  getUser,
  getSupportLinks,
  addFcmToken,
} from "@/services/settings";
import { useResponse } from "@/hooks/use-response";
import { setUser } from "@/lib/cookie";

export const useGetPortsQuery = (params: Record<string, any>) => {
  return useQuery({
    queryKey: ["ports", params],
    queryFn: () => getPorts(params),
    enabled: !!+params.id,
  });
};

export const useUpdateUserProfileMutation = () => {
  const { Success, Error } = useResponse();

  return useMutation({
    mutationKey: ["update-user-profile"],
    mutationFn: (values: IUpdateUserProfileCredentials) =>
      updateUserProfile(values),
    onSuccess: async (data) => {
      const user = await getUser();
      if (user.data) {
        setUser(user.data);
      }

      Success({ message: data.message || "Update profile Success." });
    },
    onError: (error) => {
      Error({ error, message: "Update profile failed." });
    },
  });
};

export const useSendContactMessageMutation = () => {
  const { Success, Error } = useResponse();
  return useMutation({
    mutationKey: ["send-contact-message"],
    mutationFn: (values: ISendContactMessageCredentials) =>
      sendContactMessage(values),
    onSuccess: (data) => {
      Success({ message: data.message || "Send your message Success." });
    },
    onError: (error) => {
      Error({ error, message: "Send your message failed." });
    },
  });
};

export const useGetAllPackagesQuery = () => {
  return useQuery({
    queryKey: ["packages"],
    queryFn: () => getPackages(),
  });
};

export const useGetCostPlansQuery = (params: Record<string, any>) => {
  return useQuery({
    queryKey: ["get-cost", params],
    queryFn: () => getCostPlans(params),
    enabled: !!params.pkg_id && params.pkg_id !== "0",
  });
};

export const useExportTablesMutation = () => {
  const { Success, Error } = useResponse();
  return useMutation({
    mutationKey: ["export-tables"],
    mutationFn: (values: { tables: string[] }) => exportTables(values),
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
export const useGetTablesQuery = () => {
  return useQuery({
    queryKey: ["get-tables"],
    queryFn: () => getTables(),
  });
};

export const useGetSocialMediaAccountsQuery = () => {
  return useQuery({
    queryKey: ["social-media-accounts"],
    queryFn: () => getSocialMediaAccounts(),
  });
};

export const useGetUserBalanceQuery = () => {
  return useQuery({
    queryKey: ["user-balance"],
    queryFn: () => getUserBalance(),
  });
};
export const useGetUserQuery = () => {
  return useQuery({
    queryKey: ["user-details"],
    queryFn: () => getUser(),
  });
};

export const useSupportLinksQuery = () => {
  return useQuery<ApiResponse<ILink[]>, Error>({
    queryKey: ["support-links"],
    queryFn: getSupportLinks,
    staleTime: 1000 * 60 * 5,
  });
};

export const useAddFcmTokenMutation = () => {
  return useMutation({
    mutationKey: ["add-fcm-token"],
    mutationFn: (values: { fcm_token: string }) => addFcmToken(values),
  });
};
