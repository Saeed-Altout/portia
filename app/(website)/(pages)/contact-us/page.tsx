import { Statistic } from "@website/_components/sections";
import { Heading } from "@website/_components/common";
import { ContactForm } from "./_components";

export default function ContactUsPage() {
  return (
    <main>
      <section className="max container section">
        <Heading
          title="Get in touch"
          description="Our friendly team would love to hear from you."
        />
        <ContactForm />
      </section>
      <Statistic />
    </main>
  );
}
