"use client";

import { LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";

import { useLogout } from "@/features/auth/hooks";

export const UserButton = () => {
  const { mutate, isPending } = useLogout();

  return (
    <Button
      disabled={isPending}
      variant="destructive"
      type="button"
      onClick={() => mutate()}
    >
      Logout <LogOut className="ml-2 h-4 w-4" />
    </Button>
  );
};
