import Link from "next/link";
import { Button } from "@/components/ui/button";

export const CTA = () => {
  return (
    <section
      id="cta"
      className="container py-24 flex flex-col md:flex-row items-start gap-10"
    >
      <div className="space-y-4 lg:space-y-5 basis-2/3">
        <h1 className="text-3xl lg:text-4xl font-semibold">
          Ready To Take Your Online Efficiency to the Next Level?
        </h1>
        <p className="text max-w-3xl !text-lg lg:text-xl">
          Join over 40,000+ happy clients already growing with portia.io.
        </p>
      </div>

      <div className="w-full flex flex-col md:flex-row items-center justify-end gap-3 basis-1/3">
        <Button variant="outline" className="w-full md:w-fit">
          <Link href="/contact-us">Contact us</Link>
        </Button>
        <Button className="w-full md:w-fit -order-1 md:order-1">
          Get Started
        </Button>
      </div>
    </section>
  );
};
