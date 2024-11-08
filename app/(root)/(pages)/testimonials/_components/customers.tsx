import { Section } from "@/app/(root)/_components/ui/section";
import { Container } from "@/app/(root)/_components/ui/container";
import { CustomersCard } from "@/app/(root)/_components/cards/customer-card";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { customersData } from "@/app/(root)/constants";

export const Customers = () => {
  return (
    <Section>
      <Container>
        <Carousel className="w-full">
          <CarouselContent className="space-x-8">
            {customersData.map((customer, index) => (
              <CarouselItem
                key={index}
                className="min-w-[360px] h-[480px] relative group cursor-pointer basis-1 md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
              >
                <CustomersCard initialData={customer} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="w-fit mr-auto space-x-8 mt-8">
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </Carousel>
      </Container>
    </Section>
  );
};
