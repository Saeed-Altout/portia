"use client";

import { useToast } from "@/hooks/use-toast";
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/components/ui/toast";
import clsx from "clsx";

export function Toaster() {
  const { toasts } = useToast();

  return (
    <ToastProvider>
      {toasts.map(function ({
        id,
        title,
        description,
        action,
        status = "success",
        ...props
      }) {
        const toastStyles = clsx("grid gap-1 p-4 rounded-lg shadow-md", {
          "bg-[#D4FFFE] text-[#035E5C] border border-[#D4FFFE]":
            status === "success",
          "bg-[#FFEED4] text-[#5E3B03] border border-[#FFEED4]":
            status === "warning",
          "bg-[#FFD4DA] text-[#5E0311] border border-[#FFD4DA]":
            status === "error",
          "bg-[#D4D4FF] text-[#03055E] border border-[#D4D4FF]":
            status === "new",
        });

        return (
          <Toast key={id} className={toastStyles} {...props}>
            <div className="flex items-center gap-3">
              {status === "success" && (
                <span className="flex items-center justify-center py-1 px-3 bg-[#FFFFFF] text-[#035E5C] rounded-full font-medium text-sm">
                  Success
                </span>
              )}
              {status === "warning" && (
                <span className="flex items-center justify-center py-1 px-3 bg-[#FFFFFF] text-[#5E3B03] rounded-full font-medium text-sm">
                  Warning
                </span>
              )}
              {status === "error" && (
                <span className="flex items-center justify-center py-1 px-3 bg-[#FFFFFF] text-[#5E0311] rounded-full font-medium text-sm">
                  Error
                </span>
              )}
              {status === "new" && (
                <span className="flex items-center justify-center py-1 px-3 bg-[#FFFFFF] text-[#03055E] rounded-full font-medium text-sm">
                  New Feature
                </span>
              )}
              <div className="flex-1 grid gap-1">
                {title && (
                  <ToastTitle className="font-semibold text-sm">
                    {title}
                  </ToastTitle>
                )}
                {description && (
                  <ToastDescription className="text-sm">
                    {description}
                  </ToastDescription>
                )}
              </div>
            </div>

            {action}
            <ToastClose />
          </Toast>
        );
      })}

      {/* Toast Viewport */}
      <ToastViewport className="fixed bottom-4 right-4 w-full max-w-xs" />
    </ToastProvider>
  );
}
