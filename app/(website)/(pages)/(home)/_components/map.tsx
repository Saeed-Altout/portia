import Image from "next/image";

import { mapLg } from "@/app/(website)/assets/images";

export const Map = () => {
  return (
    <section className="container-section pt-10 md:h-[600px]">
      <Image src={mapLg} alt="Map" className="w-full h-full object-contain" />
    </section>
  );
};
