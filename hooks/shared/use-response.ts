"use client";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { useToast } from "@/hooks/use-toast";

export const useResponse = () => {
  const router = useRouter();
  const { toast } = useToast();

  const showToast = (
    message: string | string[],
    status: "success" | "error" | "new" | "warning"
  ) => {
    if (Array.isArray(message)) {
      message.forEach((msg) => toast({ title: msg, status }));
    } else {
      toast({ title: message, status });
    }
  };

  const Warning = ({
    message,
    redirectTo,
    refresh = false,
  }: {
    message: string | string[];
    redirectTo?: string;
    refresh?: boolean;
  }) => {
    showToast(message, "warning");
    if (redirectTo) {
      router.push(redirectTo);
    }
    if (refresh) {
      router.refresh();
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
  const New = ({
    message,
    redirectTo,
    refresh = false,
  }: {
    message: string | string[];
    redirectTo?: string;
    refresh?: boolean;
  }) => {
    showToast(message, "new");
    if (redirectTo) {
      router.push(redirectTo);
    }
    if (refresh) {
      router.refresh();
    }
  };
  const Error = ({
    error,
    message,
  }: {
    error: AxiosError | unknown;
    message?: string;
  }) => {
    if (error instanceof AxiosError) {
      const messages = error.response?.data.message;
      showToast(messages || message, "error");
    } else {
      toast({ title: message, status: "error" });
    }
  };

  return { Success, Error, Warning, New };
};
