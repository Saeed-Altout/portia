import Link from "next/link";

import { Section } from "@/components/root/ui/section";
import { Container } from "@/components/root/ui/container";

import { Button } from "@/components/ui/button";

export const CTA = () => {
  return (
    <Section>
      <Container className="lg:flex-row justify-between gap-8">
        <div className="space-y-4 lg:space-y-5 basis-2/3">
          <h1 className="text-3xl lg:text-4xl font-semibold">Do you need any help?</h1>
          <p className="text !text-lg max-w-3xl lg:text-xl">Feel free to contact with our team.</p>
        </div>

        <div className="w-full flex flex-col md:flex-row items-center justify-end gap-3 basis-1/3">
          <Button variant="outline" className="w-full md:w-fit">
            <Link href="/contact-us">Contact us</Link>
          </Button>
        </div>
      </Container>
    </Section>
  );
};
