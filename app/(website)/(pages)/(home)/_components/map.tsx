import Image from "next/image";

export const Map = () => {
  return (
    <section className="max-container">
      <div className="relative h-[250px] md:h-[450px] lg:h-[800px]">
        <Image
          src="/icons/map.svg"
          alt="Map"
          className="w-full h-full object-contain"
          fill
        />
      </div>
    </section>
  );
};
