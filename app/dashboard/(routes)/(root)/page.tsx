import { RootClient } from "./_components/client";
import { RootProvider } from "./_components/root-context";

export default function RootPage() {
  return (
    <RootProvider>
      <RootClient />
    </RootProvider>
  );
}
