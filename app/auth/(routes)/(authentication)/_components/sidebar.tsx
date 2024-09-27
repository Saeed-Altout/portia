import Image from "next/image";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const Sidebar = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="hidden lg:flex flex-1 items-center justify-center bg-gradient-to-tr from-[#000019] to-[#111280]">
      <div className="max-w-[672px] flex flex-col gap-y-12">
        <Image
          src="/icons/favicon.svg"
          alt="Logo icon"
          width={80}
          height={80}
          className="h-20 w-20"
          priority
        />
        <div className="space-y-1 lg:space-y-6">
          <h1 className="text-white font-medium text-6xl leading-8 lg:leading-[72px]">
            Start turning your Browsing to Unlimited Efficiency.
          </h1>
          <p className="text-white font-medium text-xl leading-6 lg:leading-8">
            Create your account and get full access to our dashboard. Trusted by
            over 40,000 professionals.
          </p>
          <div className="flex items-center justify-start gap-4">
            <div className="flex items-center justify-start space-x-[-10px]">
              {[...Array(5)].map((_, index) => (
                <Avatar key={index} className="h-10 w-10 border-white border-2">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              ))}
            </div>
            <div className="flex flex-col">
              <div className="flex items-center justify-start">
                {[...Array(5)].map((_, index) => (
                  <Image
                    src="/icons/star.svg"
                    alt="Star icon"
                    width={20}
                    height={20}
                    key={index}
                    priority
                  />
                ))}
                <p className="ml-1 text-white font-medium">5.0</p>
              </div>
              <p className="text-white">© Portia.io {currentYear}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
