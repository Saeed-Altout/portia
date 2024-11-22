import { cn } from "@/lib/utils";

export const OfferList = ({
  offer,
  offerIndex,
}: {
  offer: Offer;
  offerIndex: number;
}) => {
  return (
    <div>
      {offer.package?.feature_groups?.map((featureGroup, groupIndex) => (
        <ul key={groupIndex} className="flex flex-col border-b">
          <li
            className={cn(
              "py-6 px-4 flex justify-end md:justify-center items-center text-gray-500 text-center text-sm odd:bg-white even:bg-[#F5F5FA] relative featureGroup-item",
              offerIndex !== 0 && "before:md:hidden"
            )}
            data-content={featureGroup.name}
          ></li>
          {featureGroup.features?.map((feature, featureIndex) => (
            <li
              key={featureIndex}
              className={cn(
                "py-6 px-4 flex justify-end md:justify-center items-center text-gray-500 text-center text-sm odd:bg-white even:bg-[#F5F5FA] relative feature-item min-h-[90px] h-32",
                offerIndex !== 0 && "before:md:hidden"
              )}
              data-content={feature.name}
            >
              {typeof feature.value === "string" &&
                feature.value !== "true" &&
                feature.value !== "flase" && (
                  <span
                    className={cn(
                      offerIndex === 0 &&
                        "w-2/3 md:w-1/2 md:ml-auto line-clamp-3 text-right md:text-center text-xs md:text-sm text-wrap"
                    )}
                  >
                    {feature.value}
                  </span>
                )}

              {feature.value === "true" && (
                <span className="text-[#26A6A4] bg-[#B5F7F6] block rounded-full w-6 h-6 ml-auto md:mx-auto first:!ml-auto p-[2px]">
                  ✔
                </span>
              )}

              {(feature.value === "flase" || feature.value === null) && (
                <span>━</span>
              )}
            </li>
          ))}
        </ul>
      ))}
    </div>
  );
};
