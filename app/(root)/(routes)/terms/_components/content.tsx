import { Section } from "@/components/root/ui/section";
import { Container } from "@/components/root/ui/container";

import { TabsContent } from "@/components/ui/tabs";

export const Content = () => {
  const termsOfUse = [
    {
      id: 1,
      title: "Introduction",
      description: "Welcome to portia.pro! By using our site, you agree to comply with these terms.",
    },
    {
      id: 2,
      title: "Use of the Site",
      description:
        "You agree to use the site for lawful purposes only. Using it in a way that could harm the service or others is prohibited.",
    },
    {
      id: 3,
      title: "Intellectual Property",
      description:
        "All content on the site, including text, images, and logos, is the property of portia.pro or its licensors.",
    },
    {
      id: 4,
      title: "Limitation of Liability",
      description: "We are not liable for any damages resulting from your use of the site or inability to use it.",
    },
    {
      id: 5,
      title: "Modifications",
      description: "We reserve the right to modify these terms at any time, and you will be notified of any changes.",
    },
    {
      id: 6,
      title: "Governing Law",
      description: "These terms are governed by the laws of USA.",
    },
  ];
  const privacyPolicy = [
    {
      id: 1,
      title: "Introduction",
      description:
        "portia.pro is committed to protecting your privacy. This policy outlines how we collect, use, and protect your information.",
    },
    {
      id: 2,
      title: "Information We Collect",
      description:
        "Personal information (such as name, email address). Usage information (such as IP address, browser type).",
    },
    {
      id: 3,
      title: "How We Use Your Information",
      description: "To improve our services. To communicate with you regarding orders and updates.",
    },
    {
      id: 4,
      title: "Information Protection",
      description: "We use security technologies to protect your personal information from unauthorized access.",
    },
    {
      id: 5,
      title: "Your Rights",
      description: "You have the right to access, correct, or delete your personal information.",
    },
    {
      id: 6,
      title: "Modifications",
      description: "We reserve the right to modify this privacy policy, and you will be notified of any changes.",
    },
    {
      id: 7,
      title: "Contact Us",
      description: "If you have any questions, you can contact us at the available contacts on site.",
    },
  ];

  return (
    <Section>
      <Container className="max-w-[800px]">
        <TabsContent value="privacy-policy" className="space-y-12">
          {privacyPolicy.map((item, index) => (
            <div key={index}>
              <h3 className="font-semibold text-2xl">{item.title}</h3>
              <p className="text !text-lg">{item.description}</p>
            </div>
          ))}
        </TabsContent>
        <TabsContent value="terms" className="space-y-12">
          {termsOfUse.map((item, index) => (
            <div key={index}>
              <h3 className="font-semibold text-2xl">{item.title}</h3>
              <p className="text !text-lg">{item.description}</p>
            </div>
          ))}
        </TabsContent>
      </Container>
    </Section>
  );
};
