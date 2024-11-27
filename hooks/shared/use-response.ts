import { toast } from "sonner";
import { AxiosError } from "axios";

import { useRouter } from "next/navigation";

export const useResponse = () => {
  const router = useRouter();

  const showToast = (message: string | string[], type: "success" | "error") => {
    if (Array.isArray(message)) {
      message.forEach((msg) => (type === "success" ? toast.success(msg) : toast.error(msg)));
    } else {
      type === "success" ? toast.success(message) : toast.error(message);
    }
  };

  const Success = ({
    message,
    redirectTo,
    refresh = false,
  }: {
    message: string | string[];
    redirectTo?: string;
    refresh?: boolean;
  }) => {
    showToast(message, "success");

    if (redirectTo) {
      router.push(redirectTo);
    }

    if (refresh) {
      router.refresh();
    }
  };

  const Error = ({ error, message }: { error: AxiosError | unknown; message?: string }) => {
    if (error instanceof AxiosError) {
      const serverMessage = (error.response?.data as { message?: string | string[] })?.message;

      if (serverMessage) {
        showToast(serverMessage, "error");
      } else {
        toast.error(message);
      }
    } else {
      toast.error(message);
    }
  };

  return { Success, Error };
};
