import { RootProvider } from "@/contexts/root-context";
import { RootClient } from "./_components/client";

export default function RootPage() {
  return (
    <RootProvider>
      <RootClient />
    </RootProvider>
  );
}
