"use client";

import { toast } from "sonner";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";

export const useResponse = () => {
  const router = useRouter();

  const Success = ({
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
    if (Array.isArray(message)) {
      message.forEach((msg) => toast.success(msg));
    } else {
      toast.success(message);
    }

    redirectTo && router.push(redirectTo);
    refresh && router.refresh();
  };

  const Error = ({
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

  return { Success, Error };
};
