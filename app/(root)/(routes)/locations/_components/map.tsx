import Image from "next/image";

export const Map = () => {
  return (
    <section id="map" className="screen pb-20">
      <Image src="/icons/map2.svg" alt="Map" className="h-auto mx-auto w-full max-w-5xl" width={1000} height={1000} />
    </section>
  );
};
