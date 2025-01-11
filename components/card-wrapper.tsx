import { Header } from "./header";
import { Footer } from "./footer";

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";

interface CardWrapperProps {
  title: string;
  description: string;
  label: string;
  href: string;
  message: string;
  children: React.ReactNode;
}

export const CardWrapper = ({
  title,
  description,
  label,
  href = "/auth/login",
  message,
  children,
}: CardWrapperProps) => {
  return (
    <Card className="w-full max-w-md border-none shadow-none">
      <CardHeader>
        <Header title={title} description={description} />
      </CardHeader>
      <CardContent>{children}</CardContent>
      <CardFooter>
        <Footer label={label} href={href} message={message} />
      </CardFooter>
    </Card>
  );
};
