import { DepositsClient } from "./_components/client";
import { DepositsProvider } from "./_components/deposits-context";

export default function DepositsPage() {
  return (
    <DepositsProvider>
      <DepositsClient />
    </DepositsProvider>
  );
}
