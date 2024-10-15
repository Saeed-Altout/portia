"use client";

import { LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";

import { useLogout } from "@/app/auth/features/hooks";

export const UserButton = () => {
  const { onSubmit, isPending } = useLogout();

  return (
    <Button
      disabled={isPending}
      variant="destructive"
      type="button"
      onClick={onSubmit}
    >
      Logout <LogOut className="ml-2 h-4 w-4" />
    </Button>
  );
};
