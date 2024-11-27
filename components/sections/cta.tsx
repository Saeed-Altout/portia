import Link from "next/link";
import { Button } from "@/components/ui/button";

export const CTA = () => {
  return (
    <section id="cta" className="screen py-24 flex flex-col md:flex-row items-start gap-10">
      <div className="space-y-4 lg:space-y-5 max-w-[768px]">
        <h1 className="text-[#0A0A0A] text-3xl lg:text-4xl font-semibold">
          Ready To Take Your Online Efficiency to the Next Level?
        </h1>
        <p className="text-[#727282] text-lg">Join over 40,000+ happy clients already growing with portia.io.</p>
      </div>
      <div className="flex-1 w-full flex flex-col md:flex-row items-center justify-end gap-3">
        <Button variant="outline" className="w-full lg:w-fit" asChild>
          <Link href="/contact-us">Contact us</Link>
        </Button>
        <Button variant="default" className="w-full lg:w-fit" asChild>
          <Link href="/dashboard">Get Started</Link>
        </Button>
      </div>
    </section>
  );
};
