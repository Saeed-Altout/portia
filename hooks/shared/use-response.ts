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

  const Success = ({
    message,
    redirectTo,
    refresh = false,
    status = "success",
  }: {
    message: string | string[];
    redirectTo?: string;
    refresh?: boolean;
    status?: "success" | "new" | "warning";
  }) => {
    showToast(message, status);
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

  return { Success, Error };
};
