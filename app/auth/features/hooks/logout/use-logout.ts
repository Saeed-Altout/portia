import {
  useHandleResponse,
  useLogoutMutation,
} from "@/app/auth/features/hooks";

import localStorage from "@/services/local-storage";
import cookieStorageService from "@/services/cookie-storage";

export const useLogout = () => {
  const { handleSuccess, handleError } = useHandleResponse();
  const { mutateAsync: logoutMutation, isPending } = useLogoutMutation();

  const onSubmit = async () => {
    try {
      await logoutMutation();
      handleSuccess({ message: "Logout successful", refresh: true });
      cookieStorageService.clearAll();
      localStorage.clearAll();
    } catch (error) {
      handleError({ error });
    }
  };

  return { onSubmit, isPending };
};
