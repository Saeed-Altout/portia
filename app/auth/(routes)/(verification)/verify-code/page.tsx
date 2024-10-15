import { Suspense } from "react";

import { Loader } from "@/components/ui/loader";
import { VerifyRestCodeForm } from "@/app/auth/_components/verify-reset-code-form";

export default function VerifyCodePage() {
  <Suspense fallback={<Loader />}>
    <VerifyRestCodeForm />
  </Suspense>;
}
