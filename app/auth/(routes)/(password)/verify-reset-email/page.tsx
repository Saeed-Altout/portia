"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

import { Mail } from "lucide-react";

import { Suspense } from "react";

import { Loader } from "@/components/ui/loader";
import { VerifyRestEmailForm } from "@/app/auth/_components/verify-reset-email-form";

export default function VerifyRestEmailPage() {
  return (
    <Suspense fallback={<Loader />}>
      <VerifyRestEmailForm />
    </Suspense>
  );
}
