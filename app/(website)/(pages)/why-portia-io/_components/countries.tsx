import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { countriesData } from "@website/constants";

export const Countries = () => {
  return (
    <section className="max-container section space-y-16">
      <div className="flex items-start justify-between flex-col lg:flex-row gap-16">
        <div className="max-w-3xl sm:max-w-[362px] space-y-5 flex-1 relative">
          <span className="block absolute -top-6 left-0 text-primary font-semibold">
            countries
          </span>
          <h1 className="text-3xl md:text-4xl font-semibold">
            Supported Countries and IP Availability
          </h1>
          <p>
            Portia.io offers proxies in multiple countries, ensuring you have
            the global reach you need.
          </p>
        </div>
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* TODO: Update data from API */}
          {countriesData.map(({ name, users, flagUrl }, index) => (
            <Card
              key={index}
              className="shadow-none border-none flex items-center justify-start gap-x-4"
            >
              <Avatar className="h-20 w-20">
                <AvatarImage src={flagUrl} />
                <AvatarFallback>{name.slice(0, 2)}</AvatarFallback>
              </Avatar>
              <CardContent className="p-0">
                <h3 className="font-medium text-lg capitalize text-nowrap">
                  {name}
                </h3>
                <p>{users} IPs</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
