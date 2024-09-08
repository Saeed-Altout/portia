import Link from "next/link";
import Image from "next/image";

import { Container } from "@website/_components/ui/container";
import { Paragraph } from "@website/_components/ui/paragraph";
import { Section } from "@website/_components/ui/section";
import { SummaryCard } from "@website/_components/cards/summary-card";

import { Separator } from "@/components/ui/separator";

export const Content = () => {
  return (
    <Section>
      <Container className="gap-y-12 max-w-[800px]">
        <Paragraph size="lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          ullamcorper mattis lorem non. Ultrices praesent amet ipsum justo
          massa. Eu dolor aliquet risus gravida nunc at feugiat consequat purus.
          Non massa enim vitae duis mattis. Vel in ultricies vel fringilla.
        </Paragraph>
        <Separator />
        <div className="space-y-6">
          <Title>Introduction</Title>
          <Paragraph size="lg">
            Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam
            suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum
            quis montes, sit sit. Tellus aliquam enim urna, etiam. Mauris
            posuere vulputate arcu amet, vitae nisi, tellus tincidunt. At
            feugiat sapien varius id. Eget quis mi enim, leo lacinia pharetra,
            semper. Eget in volutpat mollis at volutpat lectus velit, sed
            auctor. Porttitor fames arcu quis fusce augue enim. Quis at habitant
            diam at. Suscipit tristique risus, at donec. In turpis vel et quam
            imperdiet. Ipsum molestie aliquet sodales id est ac volutpat.
          </Paragraph>
        </div>

        <div className="w-full space-y-2">
          <div className="relative h-[516px] w-full">
            <Image src="/images/blogs/blog (7).jpg" alt="Blog" fill />
          </div>
          <Paragraph size="sm">
            Image courtesy of Mathilde Langevin via{" "}
            <Link href="https://unsplash.com/" className="underline">
              Unsplash
            </Link>
          </Paragraph>
        </div>

        <Quote
          label="In a world older and more complete than ours they move finished and complete, gifted with extensions of the senses we have lost or never attained, living by voices we shall never hear."
          author="Olivia Rhye, Product Designer"
        />

        <Paragraph size="lg">
          Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum, nulla
          odio nisl vitae. In aliquet pellentesque aenean hac vestibulum turpis
          mi bibendum diam. Tempor integer aliquam in vitae malesuada fringilla.
          <LineSeparator />
          Elit nisi in eleifend sed nisi. Pulvinar at orci, proin imperdiet
          commodo consectetur convallis risus. Sed condimentum enim dignissim
          adipiscing faucibus consequat, urna. Viverra purus et erat auctor
          aliquam. Risus, volutpat vulputate posuere purus sit congue convallis
          aliquet. Arcu id augue ut feugiat donec porttitor neque. Mauris, neque
          ultricies eu vestibulum, bibendum quam lorem id. Dolor lacus, eget
          nunc lectus in tellus, pharetra, porttitor.
          <LineSeparator />
          Ipsum sit mattis nulla quam nulla. Gravida id gravida ac enim mauris
          id. Non pellentesque congue eget consectetur turpis. Sapien, dictum
          molestie sem tempor. Diam elit, orci, tincidunt aenean tempus. Quis
          velit eget ut tortor tellus. Sed vel, congue felis elit erat nam nibh
          orci.
        </Paragraph>

        <div className="space-y-6">
          <Title>Software and tools</Title>
          <Paragraph size="lg">
            Pharetra morbi libero id aliquam elit massa integer tellus. Quis
            felis aliquam ullamcorper porttitor. Pulvinar ullamcorper sit
            dictumst ut eget a, elementum eu. Maecenas est morbi mattis id in ac
            pellentesque ac.
          </Paragraph>
        </div>

        <div className="space-y-6">
          <Title>Other resources</Title>
          <Paragraph size="lg">
            Sagittis et eu at elementum, quis in. Proin praesent volutpat
            egestas sociis sit lorem nunc nunc sit. Eget diam curabitur mi ac.
            Auctor rutrum lacus malesuada massa ornare et. Vulputate consectetur
            ac ultrices at diam dui eget fringilla tincidunt. Arcu sit dignissim
            massa erat cursus vulputate gravida id. Sed quis auctor vulputate
            hac elementum gravida cursus dis.
          </Paragraph>
          <ol className="space-y-2" style={{ listStyle: "inside" }}>
            <li className="font-normal leading-6 text-gray-500 text-lg">
              Lectus id duis vitae porttitor enim{" "}
              <span className="underline cursor-pointer">gravida morbi.</span>
            </li>
            <li className="font-normal leading-6 text-gray-500 text-lg">
              Eu turpis{" "}
              <span className="underline cursor-pointer">
                posuere semper feugiat
              </span>{" "}
              volutpat elit, ultrices suspendisse. Auctor vel in vitae placerat.
            </li>
            <li className="font-normal leading-6 text-gray-500 text-lg">
              Suspendisse maecenas ac{" "}
              <span className="underline cursor-pointer">
                donec scelerisque
              </span>{" "}
              diam sed est duis purus.
            </li>
          </ol>
        </div>

        <div className="w-full space-y-2">
          <div className="relative h-[516px] w-full">
            <Image src="/images/blogs/blog (2).jpg" alt="Blog" fill />
          </div>
          <Paragraph size="sm">
            Image courtesy of Mathilde Langevin via{" "}
            <Link href="https://unsplash.com/" className="underline">
              Unsplash
            </Link>
          </Paragraph>
        </div>

        <Paragraph size="lg">
          Lectus leo massa amet posuere. Malesuada mattis non convallis quisque.
          Libero sit et imperdiet bibendum quisque dictum vestibulum in non.
          Pretium ultricies tempor non est diam. Enim ut enim amet amet integer
          cursus. Sit ac commodo pretium sed etiam turpis suspendisse at.
          <LineSeparator />
          Tristique odio senectus nam posuere ornare leo metus, ultricies.
          Blandit duis ultricies vulputate morbi feugiat cras placerat elit.
          Aliquam tellus lorem sed ac. Montes, sed mattis pellentesque suscipit
          accumsan. Cursus viverra aenean magna risus elementum faucibus
          molestie pellentesque. Arcu ultricies sed mauris vestibulum.
        </Paragraph>

        <SummaryCard
          title="Conclusion"
          author="Rene Wells"
          position="Content Writer"
          categories={["Design", "Architecture", "Interviews"]}
        >
          <Paragraph size="lg">
            Morbi sed imperdiet in ipsum, adipiscing elit dui lectus. Tellus id
            scelerisque est ultricies ultricies. Duis est sit sed leo nisl,
            blandit elit sagittis. Quisque tristique consequat quam sed. Nisl at
            scelerisque amet nulla purus habitasse.
            <LineSeparator />
            Nunc sed faucibus bibendum feugiat sed interdum. Ipsum egestas
            condimentum mi massa. In tincidunt pharetra consectetur sed duis
            facilisis metus. Etiam egestas in nec sed et. Quis lobortis at sit
            dictum eget nibh tortor commodo cursus.
            <LineSeparator />
            Odio felis sagittis, morbi feugiat tortor vitae feugiat fusce
            aliquet. Nam elementum urna nisi aliquet erat dolor enim. Ornare id
            morbi eget ipsum. Aliquam senectus neque ut id eget consectetur
            dictum. Donec posuere pharetra odio consequat scelerisque et, nunc
            tortor.
            <LineSeparator />
            Nulla adipiscing erat a erat. Condimentum lorem posuere gravida enim
            posuere cursus diam.
          </Paragraph>
        </SummaryCard>
      </Container>
    </Section>
  );
};

const Title = ({ children }: React.HTMLAttributes<HTMLElement>) => {
  return (
    <h3 className="font-semibold text-[30px] leading-[38px]">{children}</h3>
  );
};

const LineSeparator = () => {
  return <span className="block w-full h-6" />;
};

const Quote = ({
  label,
  author,
}: { label: string; author: string } & React.HTMLAttributes<HTMLElement>) => {
  return (
    <div className="space-y-8 border-l-[2px] border-primary pl-5">
      <h3 className="text-2xl font-medium italic text-justify">{`“${label}”`}</h3>
      <Paragraph>{`— ${author}`}</Paragraph>
    </div>
  );
};
