import { Section } from "@/app/(root)/_components/ui/section";
import { Container } from "@/app/(root)/_components/ui/container";

import { TabsContent } from "@/components/ui/tabs";

export const Content = () => {
  return (
    <Section>
      <Container className="max-w-[800px]">
        <TabsContent value="human-friendly" className="space-y-12">
          <p className="text !text-lg">
            Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam
            suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum
            quis montes, sit sit. Tellus aliquam enim urna, etiam. Mauris
            posuere vulputate arcu amet, vitae nisi, tellus tincidunt. At
            feugiat sapien varius id.
            <LineSeparator />
            Eget quis mi enim, leo lacinia pharetra, semper. Eget in volutpat
            mollis at volutpat lectus velit, sed auctor. Porttitor fames arcu
            quis fusce augue enim. Quis at habitant diam at. Suscipit tristique
            risus, at donec. In turpis vel et quam imperdiet. Ipsum molestie
            aliquet sodales id est ac volutpat.
          </p>
          <div className="space-y-6">
            <Title>What information do we collect?</Title>
            <p className="text !text-lg">
              Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum,
              nulla odio nisl vitae. In aliquet pellentesque aenean hac
              vestibulum turpis mi bibendum diam. Tempor integer aliquam in
              vitae malesuada fringilla.
              <LineSeparator />
              Elit nisi in eleifend sed nisi. Pulvinar at orci, proin imperdiet
              commodo consectetur convallis risus. Sed condimentum enim
              dignissim adipiscing faucibus consequat, urna. Viverra purus et
              erat auctor aliquam. Risus, volutpat vulputate posuere purus sit
              congue convallis aliquet. Arcu id augue ut feugiat donec porttitor
              neque. Mauris, neque ultricies eu vestibulum, bibendum quam lorem
              id. Dolor lacus, eget nunc lectus in tellus, pharetra, porttitor.
              <LineSeparator />
              Ipsum sit mattis nulla quam nulla. Gravida id gravida ac enim
              mauris id. Non pellentesque congue eget consectetur turpis.
              Sapien, dictum molestie sem tempor. Diam elit, orci, tincidunt
              aenean tempus. Quis velit eget ut tortor tellus. Sed vel, congue
              felis elit erat nam nibh orci.
            </p>
          </div>
          <div className="space-y-6">
            <Title>How do we use your information?</Title>
            <p className="text !text-lg">
              Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum,
              nulla odio nisl vitae. In aliquet pellentesque aenean hac
              vestibulum turpis mi bibendum diam. Tempor integer aliquam in
              vitae malesuada fringilla.
              <LineSeparator />
              Elit nisi in eleifend sed nisi. Pulvinar at orci, proin imperdiet
              commodo consectetur convallis risus. Sed condimentum enim
              dignissim adipiscing faucibus consequat, urna. Viverra purus et
              erat auctor aliquam. Risus, volutpat vulputate posuere purus sit
              congue convallis aliquet. Arcu id augue ut feugiat donec porttitor
              neque. Mauris, neque ultricies eu vestibulum, bibendum quam lorem
              id. Dolor lacus, eget nunc lectus in tellus, pharetra, porttitor.
              <LineSeparator />
              Ipsum sit mattis nulla quam nulla. Gravida id gravida ac enim
              mauris id. Non pellentesque congue eget consectetur turpis.
              Sapien, dictum molestie sem tempor. Diam elit, orci, tincidunt
              aenean tempus. Quis velit eget ut tortor tellus. Sed vel, congue
              felis elit erat nam nibh orci.
            </p>
          </div>
          <div className="space-y-6">
            <Title>Do we use cookies and other tracking technologies?</Title>
            <p className="text !text-lg">
              Pharetra morbi libero id aliquam elit massa integer tellus. Quis
              felis aliquam ullamcorper porttitor. Pulvinar ullamcorper sit
              dictumst ut eget a, elementum eu. Maecenas est morbi mattis id in
              ac pellentesque ac.
            </p>
          </div>
          <div className="space-y-6">
            <Title>How long do we keep your information? </Title>
            <p className="text !text-lg">
              Pharetra morbi libero id aliquam elit massa integer tellus. Quis
              felis aliquam ullamcorper porttitor. Pulvinar ullamcorper sit
              dictumst ut eget a, elementum eu. Maecenas est morbi mattis id in
              ac pellentesque ac.
            </p>
          </div>
          <div className="space-y-6">
            <Title>How do we keep your information safe?</Title>
            <p className="text !text-lg">
              Pharetra morbi libero id aliquam elit massa integer tellus. Quis
              felis aliquam ullamcorper porttitor. Pulvinar ullamcorper sit
              dictumst ut eget a, elementum eu. Maecenas est morbi mattis id in
              ac pellentesque ac.
            </p>
          </div>
          <div className="space-y-6">
            <Title>What are your privacy rights? </Title>
            <p className="text !text-lg">
              Pharetra morbi libero id aliquam elit massa integer tellus. Quis
              felis aliquam ullamcorper porttitor. Pulvinar ullamcorper sit
              dictumst ut eget a, elementum eu. Maecenas est morbi mattis id in
              ac pellentesque ac.
            </p>
          </div>
          <div className="space-y-6">
            <Title>How can you contact us about this policy? </Title>
            <p className="text !text-lg">
              Sagittis et eu at elementum, quis in. Proin praesent volutpat
              egestas sociis sit lorem nunc nunc sit. Eget diam curabitur mi ac.
              Auctor rutrum lacus malesuada massa ornare et. Vulputate
              consectetur ac ultrices at diam dui eget fringilla tincidunt. Arcu
              sit dignissim massa erat cursus vulputate gravida id. Sed quis
              auctor vulputate hac elementum gravida cursus dis.
            </p>
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
                volutpat elit, ultrices suspendisse. Auctor vel in vitae
                placerat.
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
        </TabsContent>
        <TabsContent value="legal-nonsense" className="space-y-12">
          <p className="text !text-lg">
            Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam
            suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum
            quis montes, sit sit. Tellus aliquam enim urna, etiam. Mauris
            posuere vulputate arcu amet, vitae nisi, tellus tincidunt. At
            feugiat sapien varius id.
            <LineSeparator />
            Eget quis mi enim, leo lacinia pharetra, semper. Eget in volutpat
            mollis at volutpat lectus velit, sed auctor. Porttitor fames arcu
            quis fusce augue enim. Quis at habitant diam at. Suscipit tristique
            risus, at donec. In turpis vel et quam imperdiet. Ipsum molestie
            aliquet sodales id est ac volutpat.
          </p>
        </TabsContent>
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
