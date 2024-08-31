import { Heading } from "@website/_components/common";

export const Hero = () => {
  return (
    <div className="h-[492px] w-full bg-[#F5F5FA]">
      <div className="space-y-5 flex-1 text-center flex items-center justify-center flex-col h-full max-w-3xl mx-auto">
        <p className="text-primary font-semibold">About portia</p>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold">
          Why To Choose Portia.io?
        </h1>
        <p className="hidden md:block text-xl leading-8">
          At Portia.io, we are driven by the desire to provide a reliable,
          affordable, and flexible proxy service that meets the needs of our
          diverse clientele. Our journey began with a vision to create a proxy
          service that eliminates the common frustrations users face with
          traditional providers. We experienced the challenges firsthand: high
          costs, unreliable proxies, and limited options. Our purpose is to
          offer a solution that is both dependable and cost-effective.
        </p>
        <p className="block md:hidden leading-8">
          At Portia.io, we aim to offer a reliable, affordable, and flexible
          proxy service that addresses common user frustrations with traditional
          providers.
        </p>
      </div>
    </div>
  );
};
