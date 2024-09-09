"use client";

import * as React from "react";
import Link from "next/link";

import { Paragraph } from "@website/_components/ui/paragraph";

interface BackButtonProps {
  label?: string;
  message?: string;
  href: string;
}

export const BackButton = ({ label, href, message }: BackButtonProps) => {
  return (
    <Paragraph size="sm">
      {message}{" "}
      <Link href={href} className="hover:underline text-primary font-medium">
        {label}
      </Link>
    </Paragraph>
  );
};
