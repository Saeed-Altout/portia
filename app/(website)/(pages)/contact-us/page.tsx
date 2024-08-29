import { Heading } from "../../_components/heading";
import { Statistic } from "../../_components/statistic";
import { ContactForm } from "./_components/contact-form";

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
