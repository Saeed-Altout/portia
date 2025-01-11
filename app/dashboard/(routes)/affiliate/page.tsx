import { AffiliateProvider } from "./_components/affiliate-context";
import { AffiliateClient } from "./_components/client";

export default function AffiliatePage() {
  return (
    <AffiliateProvider>
      <AffiliateClient />
    </AffiliateProvider>
  );
}
