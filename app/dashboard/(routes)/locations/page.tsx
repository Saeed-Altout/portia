import { LocationsProvider } from "./_components/locations-context";
import { LocationsClient } from "./_components/client";

export default function LocationsPage() {
  return (
    <LocationsProvider>
      <LocationsClient />
    </LocationsProvider>
  );
}
