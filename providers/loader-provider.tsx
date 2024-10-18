"use client";

import { useEffect, useState } from "react";
import { Loader } from "@/components/ui/loader";

export const LoaderProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const loaderTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 5000);
    return () => clearTimeout(loaderTimeout);
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return children;
};
