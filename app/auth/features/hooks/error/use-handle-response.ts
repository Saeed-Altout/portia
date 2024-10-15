import { toast } from "sonner";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";

import cookieStorage from "@/services/cookie-storage";

export const useHandleResponse = () => {
  const router = useRouter();

  const handleSuccess = ({
    message,
    redirectTo,
    token,
    refresh = false,
  }: {
    message: string | string[];
    redirectTo?: string;
    token?: string;
    refresh?: boolean;
  }) => {
    if (token) {
      cookieStorage.setAccessToken(token);
    }

    if (Array.isArray(message)) {
      message.forEach((msg) => toast.success(msg));
    } else {
      toast.success(message);
    }

    redirectTo && router.push(redirectTo);
    refresh && router.refresh();
  };

  const handleError = ({
    error,
    message = "Something went wrong!",
  }: {
    error: AxiosError | unknown;
    message?: string;
  }) => {
    if (error instanceof AxiosError && error.response) {
      const serverMessage = error.response.data?.message;

      if (Array.isArray(serverMessage)) {
        serverMessage.forEach((msg) => toast.error(msg));
      } else {
        toast.error(serverMessage || message);
      }
    } else {
      toast.error(message);
    }
  };

  return { handleSuccess, handleError };
};
