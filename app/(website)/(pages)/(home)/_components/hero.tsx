import { Button } from "@/components/ui/button";
import Image from "next/image";

export const Hero = () => {
  return (
    <section className="max-container section flex flex-col justify-center items-start gap-y-5">
      {/* Title  */}
      <h1 className="max-w-[1000px] text-black-primary font-medium capitalize text-[30px] leading-[44px] md:text-[40px] md:leading-[50px] lg:text-6xl lg:leading-[72px]">
        Maximize online efficiency with high-quality,
        <br className="md:hidden" />
        affordable, worldwide{" "}
        <div className="relative w-fit">
          <p className="relative z-10">mobile proxies</p>
          <Image
            src="/images/underline.png"
            alt="Underline"
            width={100}
            height={10}
            className="w-full absolute top-7 md:top-8 lg:top-[50px] left-0 z-0"
          />
        </div>
      </h1>

      {/* Description */}
      <p className="max-w-[580px] capitalize text-gray-primary font-normal text-[18px] leading-[28px] md:text-[19px] md:leading-[29px] lg:text-[20px] lg:leading-[30px]">
        Get ultra-stable mobile proxies with unlimited data and effortless
        country switching ⎯⎯ perfectly tailored for developers, social media
        managers, E-commerce, and digital marketing professionals.
      </p>

      {/* Buttons */}
      {/* TODO: Update functionally of hero buttons */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-y-4 md:gap-x-4 w-full md:w-fit">
        <Button variant="outline" className="w-full">
          Contact Sales
        </Button>
        <Button className="w-full -order-1 md:order-1">Get Started</Button>
      </div>
    </section>
  );
};
