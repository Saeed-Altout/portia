"use client";

import * as React from "react";

import { FcGoogle } from "react-icons/fc";

import { Button } from "@/components/ui/button";

interface ShowSocialProps {
  isLoading: boolean;
}

export const ShowSocial = ({ isLoading }: ShowSocialProps) => {
  return (
    <Button
      type="button"
      variant="outline"
      className="w-full flex items-center justify-center gap-x-2"
      disabled={isLoading}
    >
      <FcGoogle className="h-6 w-6" />
      Sign in with Google
    </Button>
  );
};
