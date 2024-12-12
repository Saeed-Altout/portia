"use client";

import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";

type MarkerData = {
  markerOffset: number;
  name: string;
  coordinates: [number, number];
};

const markers: MarkerData[] = [
  {
    markerOffset: -25,
    name: "Melbourne, AUS",
    coordinates: [144.9631, -37.8136],
  },
  { markerOffset: -25, name: "Tokyo, JPN", coordinates: [139.6917, 35.6895] },
  { markerOffset: -25, name: "New York, USA", coordinates: [-74.006, 40.7128] },
  { markerOffset: -25, name: "London, UK", coordinates: [-0.1276, 51.5072] },
  { markerOffset: -25, name: "Dubai, UAE", coordinates: [55.2708, 25.2048] },
  {
    markerOffset: -25,
    name: "Cape Town, ZA",
    coordinates: [18.4241, -33.9249],
  },
  {
    markerOffset: -25,
    name: "São Paulo, BRA",
    coordinates: [-46.6333, -23.5505],
  },
  { markerOffset: -25, name: "Mumbai, IND", coordinates: [72.8777, 19.076] },
];
export const Map = () => {
  return (
    <section id="map" className="screen pb-20">
      <ComposableMap>
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
        {markers.map(({ name, coordinates, markerOffset }) => (
          <Marker
            key={name}
            coordinates={coordinates}
            className="cursor-pointer group relative"
          >
            <circle r={10} fill="#2628A6" opacity={0.1} />
            <circle r={6} fill="#2628A6" opacity={0.2} />
            <circle r={3} fill="#2628A6" />
            <text
              textAnchor="middle"
              y={markerOffset}
              className="text-[10px] hidden group-hover:block"
            >
              {name}
            </text>
          </Marker>
        ))}
      </ComposableMap>
    </section>
  );
};
