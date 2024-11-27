import Image from "next/image";

import { Section } from "@/components/root/ui/section";
import { Container } from "@/components/root/ui/container";
import { HeadingPage } from "@/components/root/ui/heading-page";
import { Categories } from "@/components/root/ui/categories";

export const Hero = ({ data }: { data: any }) => {
  return (
    <Section>
      <Container className="justify-center items-center text-center gap-y-12">
        <HeadingPage
          label="Published 20 Jan 2022"
          title="UX review presentations"
          description="How do you create compelling presentations that wow your colleagues and impress your manager?"
        />
        <Categories items={data.categories} />
        <div className="relative w-full h-[750px]">
          <Image src={data.imgUrl} alt="Image" className="object-cover" fill priority />
        </div>
      </Container>
    </Section>
  );
};
