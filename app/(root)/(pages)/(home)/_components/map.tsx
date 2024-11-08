import Image from "next/image";

export const Map = () => {
  return (
    <section id="map" className="screen py-28 px-14">
      <div className="h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] flex justify-center items-center">
        <Image
          src="/icons/map.svg"
          alt="Map"
          width={1000}
          height={1000}
          className="object-contain"
          priority
        />
      </div>
    </section>
  );
};
