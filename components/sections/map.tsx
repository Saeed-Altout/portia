"use client";

import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useGetDataMapQuery } from "@/services/map/hooks";

export const Map = () => {
  const { data } = useGetDataMapQuery();

  return (
    <section id="map" className="screen">
      <ComposableMap className="overflow-visible">
        <Geographies geography="/features.json">
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                className="fill-[#2628A6]/10 stroke-[#2628A6]/5"
              />
            ))
          }
        </Geographies>
        {data?.countries.map(
          ({
            id,
            name,
            parents_count,
            latitude,
            longitude,
            country_key,
            flag_url,
          }) => (
            <Marker
              key={id}
              coordinates={[longitude, latitude]}
              className="cursor-pointer group relative"
            >
              <foreignObject
                x={"-75px"}
                y={"-120px"}
                className="z-[1000] relative hidden transition-all group-hover:block w-[150px] h-[100px] bg-white py-3 px-4 rounded-xl shadow-lg text-[12px] text-center after:content-[''] after:absolute after:bottom-[-14px] after:left-1/2 after:-translate-x-1/2 after:border-[8px] after:border-transparent after:border-t-white overflow-visible"
              >
                <Avatar className="h-5 w-5 mx-auto mb-2">
                  <AvatarImage src={flag_url} />
                  <AvatarFallback>{country_key}</AvatarFallback>
                </Avatar>
                <div className="font-medium line-clamp-1">{name}</div>
                <div className="text-[#727282] line-clamp-2">
                  {parents_count} available proxies
                </div>
              </foreignObject>

              <g style={{ zIndex: 1 }}>
                <circle r={10} fill="#2628A6" opacity={0.1} />
                <circle r={6} fill="#2628A6" opacity={0.2} />
                <circle r={3} fill="#2628A6" />
              </g>
            </Marker>
          )
        )}
      </ComposableMap>
    </section>
  );
};
