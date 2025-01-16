"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ROUTES } from "@/config/constants";
import {
  textVariants,
  animationTransition,
  animationViewport,
} from "@/config/animations";

export const Hero = () => {
  return (
    <section id="hero" className="screen pt-24 space-y-11">
      <motion.h1
        className="max-w-[1100px] font-medium capitalize text-2xl leading-[44px] sm:text-3xl sm:leading-[50px] md:text-4xl md:leading-[55px] lg:text-5xl lg:leading-[65px] xl:text-6xl xl:leading-[72px]"
        variants={textVariants}
        initial="hidden"
        whileInView="visible"
        viewport={animationViewport}
        transition={{ duration: animationTransition.duration, delay: 0.2 }}
      >
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
      </motion.h1>

      <motion.p
        className="text-[#727282] capitalize text-base leading-[28px] sm:text-lg sm:leading-[29px] lg:text-xl lg:leading-[30px] max-w-[640px]"
        variants={textVariants}
        initial="hidden"
        whileInView="visible"
        viewport={animationViewport}
        transition={{ duration: animationTransition.duration, delay: 0.4 }}
      >
        Get ultra-stable mobile proxies with unlimited data and effortless
        country switching ⎯⎯ perfectly tailored for developers, social media
        managers, E-commerce, and digital marketing professionals.
      </motion.p>

      <motion.div
        className="flex flex-col md:flex-row items-center justify-center gap-3 w-full md:w-fit"
        variants={textVariants}
        initial="hidden"
        whileInView="visible"
        viewport={animationViewport}
        transition={{ duration: animationTransition.duration, delay: 0.6 }}
      >
        <Button variant="outline" size="lg" className="w-full" asChild>
          <Link href={ROUTES.CONTACT_US}>Contact Sales</Link>
        </Button>
        <Button size="lg" className="-order-1 md:order-1 w-full" asChild>
          <Link href={ROUTES.DASHBOARD_HOME}>Get Started</Link>
        </Button>
      </motion.div>
    </section>
  );
};
