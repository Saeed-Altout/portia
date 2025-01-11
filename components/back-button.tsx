import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ROUTES } from "@/config/constants";

interface BackButtonProps {
  label?: string;
  href?: string;
}

export const BackButton = ({
  label = "Back to log in",
  href = ROUTES.LOGIN,
}: BackButtonProps) => {
  return (
    <Button variant="link" className="mx-auto" asChild>
      <Link
        href={href}
        className="flex items-center justify-center !text-gray-500"
      >
        <ArrowLeft className="h-4 w-4 mr-2" />
        {label}
      </Link>
    </Button>
  );
};
