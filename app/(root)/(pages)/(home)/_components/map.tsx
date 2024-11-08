import Image from "next/image";

export const Map = () => {
  return (
    <section
      id="map"
      className="container relative h-[250px] md:h-[400px] lg:h-[750px]"
    >
      <Image
        src="/icons/map.svg"
        alt="Map"
        className="object-contain"
        fill
        priority
      />
    </section>
  );
};
