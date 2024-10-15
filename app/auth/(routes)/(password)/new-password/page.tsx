import { Suspense } from "react";
import { Key } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Loader } from "@/components/ui/loader";

import { BackButton } from "@auth/_components";
import { Circle, Icon } from "@/components/circle-icon";
import { NewPasswordForm } from "@/app/auth/_components/new-password-form";

export default function NewPasswordPage() {
  return (
    <Suspense fallback={<Loader />}>
      <Card className="w-full max-w-[360px] border-none shadow-none pt-24">
        <CardHeader className="flex flex-col items-center justify-center gap-y-3">
          <Circle size="lg">
            <Icon size="lg" icon={Key} />
          </Circle>
          <CardTitle className="text-2xl md:text-3xl font-semibold text-center">
            Set new password
          </CardTitle>
          <CardDescription className="text-center">
            Your new password must be different from previously used passwords.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <NewPasswordForm />
        </CardContent>
        <CardFooter>
          <BackButton />
        </CardFooter>
      </Card>
    </Suspense>
  );
}
