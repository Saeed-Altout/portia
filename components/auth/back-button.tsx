"use client";

import * as React from "react";
import Link from "next/link";

interface BackButtonProps {
  label?: string;
  message?: string;
  href: string;
}

export const BackButton = ({ label, href, message }: BackButtonProps) => {
  return (
    <p className="text !text-sm">
      {message}{" "}
      <Link href={href} className="hover:underline text-primary font-medium">
        {label}
      </Link>
    </p>
  );
};
