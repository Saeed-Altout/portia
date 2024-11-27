import { Statistic } from "@/components/root/sections";
import { ContactForm } from "./_components";

export default function ContactUsPage() {
  return (
    <main className="w-full">
      <ContactForm />
      <Statistic className="hidden lg:block" />
    </main>
  );
}
