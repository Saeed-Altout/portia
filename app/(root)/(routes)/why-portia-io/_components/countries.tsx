import { Heading } from "@/components/ui/heading";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { countriesData } from "@/config/constants";

export const Countries = () => {
  return (
    <section id="countries" className="screen flex flex-col md:flex-row gap-x-16 gap-y-12 py-24">
      <div className="w-full max-w-[362.67px]">
        <Heading
          label="countries"
          title="Supported Countries and IP Availability"
          description="Portia.io offers proxies in multiple countries, ensuring you have the global reach you need."
        />
      </div>
      <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-8 gap-x-16">
        {countriesData.map(({ name, users, flagUrl }, index) => (
          <div key={index} className="flex items-center gap-x-6">
            <Avatar className="h-20 w-20">
              <AvatarImage src={flagUrl} />
              <AvatarFallback>{name.slice(0, 2)}</AvatarFallback>
            </Avatar>
            <div>
              <h3 className="text-[#0A0A0A] text-lg font-medium capitalize line-clamp-1 whitespace-nowrap">{name}</h3>
              <p className="text-[#03055E]">{users} IPs</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
