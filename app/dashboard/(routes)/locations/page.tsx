import { LocationsClient } from "./_components/client";
import { LocationsProvider } from "./_components/locations-context";

export default function LocationsPage() {
  return (
    <LocationsProvider>
      <LocationsClient />
    </LocationsProvider>
  );
}
