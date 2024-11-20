"use client";

import { Heading } from "@/components/dashboard";
import { useGetUserDetails } from "@/hooks/dashboard";

import { Cards } from "./_components/cards";
import { Tables } from "./_components/tables";

export default function MyProxiesPage() {
  const { data: user } = useGetUserDetails();

  return (
    <>
      <Heading
        title={`Welcome back ${user?.data.first_name ?? ""}`}
        newProxy
        addFunds
      />
      <Cards />
      <Tables />
    </>
  );
}
