import { PlansClient } from "./_components/client";
import { PlansProvider } from "../../../../contexts/plans-context";

export default function PlansPage() {
  return (
    <PlansProvider>
      <PlansClient />
    </PlansProvider>
  );
}
