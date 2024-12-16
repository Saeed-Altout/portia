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
  { markerOffset: -25, name: "Moscow, RUS", coordinates: [37.6173, 55.7558] },
  { markerOffset: -25, name: "Beijing, CHN", coordinates: [116.4074, 39.9042] },
  { markerOffset: -25, name: "Berlin, GER", coordinates: [13.405, 52.52] },
  { markerOffset: -25, name: "Paris, FRA", coordinates: [2.3522, 48.8566] },
  { markerOffset: -25, name: "Madrid, ESP", coordinates: [-3.7038, 40.4168] },
  { markerOffset: -25, name: "Toronto, CAN", coordinates: [-79.3832, 43.6532] },
  { markerOffset: -25, name: "Seoul, KOR", coordinates: [126.978, 37.5665] },
  {
    markerOffset: -25,
    name: "Buenos Aires, ARG",
    coordinates: [-58.3816, -34.6037],
  },
  { markerOffset: -25, name: "Bangkok, THA", coordinates: [100.5018, 13.7563] },
  { markerOffset: -25, name: "Rome, ITA", coordinates: [12.4964, 41.9028] },
];

export const Map = () => {
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
        {markers.map(({ name, coordinates, markerOffset }) => (
          <Marker
            key={name}
            coordinates={coordinates}
            className="cursor-pointer group relative"
          >
            <circle r={10} fill="#2628A6" opacity={0.1} />
            <circle r={6} fill="#2628A6" opacity={0.2} />
            <circle r={3} fill="#2628A6" />
            <foreignObject
              x={"-75px"}
              y={"-120px"}
              className="relative hidden transition-all group-hover:block w-[150px] h-[100px] bg-white py-3 px-4 rounded-xl shadow-lg text-[12px] text-center space-y-2 after:content-[''] after:absolute after:bottom-[-14px] after:left-1/2 after:-translate-x-1/2 after:border-[8px] after:border-transparent after:border-t-white overflow-visible"
            >
              <div className="h-5 w-5 rounded-full bg-primary mx-auto" />
              <div className="font-medium line-clamp-1">{name}</div>
              <div className="text-[#727282] line-clamp-1">
                20 available proxies
              </div>
            </foreignObject>
          </Marker>
        ))}
      </ComposableMap>
    </section>
  );
};
