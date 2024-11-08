"use client";

import { OfferCard } from "./offer-card";
import { OfferSkeleton } from "./offer-skeleton";

import { useGetOffersQuery } from "@/app/(root)/hooks";

export const Content = () => {
  const { data: offers, isSuccess, isLoading, isError } = useGetOffersQuery();

  return (
    <section id="offers-table" className="w-full py-20">
      <div className="container space-y-12">
        {(isLoading || isError) && (
          <div className="w-full grid grid-cols-1 md:grid-cols-4">
            {[...Array(3)].map((_, offerIndex) => (
              <OfferSkeleton key={offerIndex} offerIndex={offerIndex} />
            ))}
          </div>
        )}
        {isSuccess && (
          <div className="w-full grid grid-cols-1 md:grid-cols-4">
            {offers.data.map((offer, offerIndex) => (
              <OfferCard
                key={offerIndex}
                offer={offer}
                offerIndex={offerIndex}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
