"use client";

import { FcGoogle } from "react-icons/fc";

import { useLoginWithGoogle } from "@/hooks";
import { Button } from "@/components/ui/button";

interface ProviderProps {
  isLoading: boolean;
}

export const Provider = ({ isLoading }: ProviderProps) => {
  const { mutate, isPending } = useLoginWithGoogle();

  return (
    <Button
      type="button"
      variant="outline"
      className="w-full flex items-center justify-center gap-x-2"
      disabled={isLoading || isPending}
      onClick={() => mutate()}
    >
      <FcGoogle className="w-4 h-4" />
      <span>Login with Google</span>
    </Button>
  );
};
