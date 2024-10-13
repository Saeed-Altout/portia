"use client";

import { Table } from "./_components/table";
import { CardsSection } from "./_components/cards-section";

import { Heading } from "@/app/dashboard/_components/heading";
import { useGetUserProfileQuery } from "@/app/dashboard/hooks";

export default function DepositsPage() {
  const { data, isLoading, isError, isSuccess } = useGetUserProfileQuery();

  return (
    <>
      <Heading
        title={`Welcome back, ${data?.data.first_name}`}
        newProxy
        addFunds
        isLoading={isLoading || isError || !isSuccess}
      />
      <CardsSection />
      <Table />
    </>
  );
}
