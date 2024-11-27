import { ContactForm } from "./_components/contact-form";
import { Statistic } from "@/components/sections";

export default function ContactUsPage() {
  return (
    <main className="min-h-full overflow-x-hidden">
      <ContactForm />
      <Statistic className="hidden lg:block" />
    </main>
  );
}
