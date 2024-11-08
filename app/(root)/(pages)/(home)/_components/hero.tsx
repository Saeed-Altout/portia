import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section id="hero" className="screen pt-24 space-y-11">
      <h1 className="max-w-[1100px] font-medium capitalize text-2xl leading-[44px] sm:text-3xl sm:leading-[50px] md:text-4xl md:leading-[55px] lg:text-5xl lg:leading-[65px] xl:text-6xl xl:leading-[72px]">
        Maximize online efficiency with high-quality, affordable, worldwide{" "}
        <span className="relative inline-block">
          mobile proxies
          <Image
            src="/icons/underline.svg"
            alt="Underline Image"
            width={1000}
            height={1000}
            className="w-[90%] absolute top-[90%] left-0"
            priority
          />
        </span>
      </h1>
      <p className="text-[#727282] capitalize text-base leading-[28px] sm:text-lg sm:leading-[29px] lg:text-xl lg:leading-[30px] max-w-[640px]">
        Get ultra-stable mobile proxies with unlimited data and effortless
        country switching ⎯⎯ perfectly tailored for developers, social media
        managers, E-commerce, and digital marketing professionals.
      </p>
      <div className="flex flex-col md:flex-row items-center justify-center gap-3 w-full md:w-fit">
        <Button variant="outline" size="lg" className="w-full" asChild>
          <Link href="/contact-us">Contact Sales</Link>
        </Button>
        <Button size="lg" className="-order-1 md:order-1 w-full" asChild>
          <Link href="/dashboard">Get Started</Link>
        </Button>
      </div>
    </section>
  );
};
