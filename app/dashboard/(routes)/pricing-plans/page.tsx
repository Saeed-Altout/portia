import { PlansClient } from "./_components/client";
import { PlansProvider } from "./_components/plans-context";

export default function PlansPage() {
  return (
    <PlansProvider>
      <PlansClient />
    </PlansProvider>
  );
}
