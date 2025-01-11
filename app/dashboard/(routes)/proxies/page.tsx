import { ProxiesClient } from "./_components/client";
import { ProxiesProvider } from "./_components/proxies-context";

export default function ProxiesPage() {
  return (
    <ProxiesProvider>
      <ProxiesClient />
    </ProxiesProvider>
  );
}
