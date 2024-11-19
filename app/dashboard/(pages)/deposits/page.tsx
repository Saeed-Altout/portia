import { Cards } from "./_components/cards";
import { Tables } from "./_components/tables";

import { Heading } from "@/components/dashboard";

export default function DepositsPage() {
  return (
    <>
      <Heading title="Welcome back" newProxy addFunds />
      <Cards />
      <Tables />
    </>
  );
}
