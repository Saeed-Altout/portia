import { Statistic } from "@/components/root/sections";
import { ContactForm } from "./_components/contact-form";

export default function ContactUsPage() {
  return (
    <main className="min-h-full overflow-x-hidden">
      <ContactForm />
      <Statistic className="hidden lg:block" />
    </main>
  );
}
