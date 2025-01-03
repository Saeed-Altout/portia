import Link from "next/link";
import Image from "next/image";

import { cn } from "@/lib/utils";

export const Logo = ({
  dark = false,
  redirectTo = "/",
  className,
}: {
  dark?: boolean;
  redirectTo: string;
} & React.HTMLAttributes<HTMLElement>) => {
  return (
    <Link href={redirectTo} className={cn("fit", className)}>
      {!dark && (
        <Image
          src="/icons/logo.svg"
          alt="Logo"
          width={1000}
          height={1000}
          className="object-contain w-[92px] h-[28px]"
          priority
        />
      )}
      {dark && (
        <Image
          src="/icons/logo-dark.svg"
          alt="Logo"
          width={1000}
          height={1000}
          className="object-contain w-[92px] h-[28px]"
          priority
        />
      )}
    </Link>
  );
};
