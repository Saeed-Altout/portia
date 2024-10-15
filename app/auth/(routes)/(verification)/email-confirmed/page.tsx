import { Suspense } from "react";

import { Loader } from "@/components/ui/loader";
import EmailConfirmedForm from "@/app/auth/_components/email-confirmed-form";

export default function EmailConfirmedPage() {
  return (
    <Suspense fallback={<Loader />}>
      <EmailConfirmedForm />
    </Suspense>
  );
}
