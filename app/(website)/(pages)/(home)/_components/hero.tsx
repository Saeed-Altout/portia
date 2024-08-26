import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="container-section flex flex-col justify-center items-start gap-y-5 md:gap-y-8 lg:gap-y-10 pt-10">
      <h1 className="text-4xl leading-[55px] md:text-5xl md:leading-[60px] lg:text-6xl lg:leading-[65px] text-[#0A0A0A] font-medium capitalize max-w-[1100px]">
        Maximize online efficiency with high-quality,
        <br className="md:hidden" />
        affordable, worldwide <span>mobile proxies</span>
      </h1>
      <p className="max-w-[650px] text-lg leading-8 md:text-xl md:leading-[38px] text-[#727282] font-normal">
        Get ultra-stable mobile proxies with unlimited data and effortless
        country switching<span></span>perfectly tailored for developers, social
        media managers, E-commerce, and digital marketing professionals.
      </p>

      <div className="flex flex-col md:flex-row items-center justify-start gap-y-3 md:gap-x-4 w-full md:w-fit">
        <Button variant="outline" className="w-full">
          Contact Sales
        </Button>
        <Button className="w-full -order-1 md:order-1 ">Get Started</Button>
      </div>
    </section>
  );
};
