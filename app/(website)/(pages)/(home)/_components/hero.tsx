"use client";

import * as React from "react";

import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Section } from "@website/_components/ui/section";
import { Container } from "@website/_components/ui/container";

import { useScrollStore } from "@website/hooks/scroll-to";

export const Hero = () => {
  const scrollStore = useScrollStore();

  return (
    <Section className="pt-24">
      <Container className="gap-y-8 md:gap-y-10 lg:gap-y-12">
        {/* Title */}
        <h1 className="max-w-[1090px] font-medium capitalize text-[30px] leading-[44px] md:text-[40px] md:leading-[50px] lg:text-6xl lg:leading-[72px]">
          Maximize online efficiency with high-quality, affordable, worldwide
          <div className="relative w-fit">
            <span className="relative z-10">mobile proxies</span>
            <Image
              src="/icons/underline.svg"
              alt="Underline Image"
              width={1000}
              height={1000}
              className="w-[80%] absolute top-9 md:top-10 lg:top-[60px] left-0 z-0"
              priority
            />
          </div>
        </h1>
        {/* Description */}
        <p className="text xl:!text-xl max-w-[640px] capitalize">
          Get ultra-stable mobile proxies with unlimited data and effortless
          country switching ⎯⎯ perfectly tailored for developers, social media
          managers, E-commerce, and digital marketing professionals.
        </p>
        {/* Buttons */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-3 w-full md:w-fit">
          <Button
            variant="outline"
            className="w-full md:h-[60px] font-medium text-lg px-6 py-4"
            asChild
          >
            <Link href="/contact-us">Contact Sales</Link>
          </Button>
          <Button
            className="-order-1 md:order-1 w-full md:h-[60px] font-medium text-lg px-6 py-4"
            onClick={scrollStore.scrollToSection}
          >
            Get Started
          </Button>
        </div>
      </Container>
    </Section>
  );
};
