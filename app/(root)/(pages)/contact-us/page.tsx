import { Statistic } from "@/app/(root)/_components/sections";
import { ContactForm } from "./_components";

export default function ContactUsPage() {
  return (
    <main className="w-full">
      <ContactForm />
      <Statistic className="hidden lg:block" />
    </main>
  );
}
