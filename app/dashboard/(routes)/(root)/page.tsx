import { RootProvider } from "./_components/root-context";
import { RootClient } from "./_components/client";

export default function RootPage() {
  return (
    <RootProvider>
      <RootClient />
    </RootProvider>
  );
}
