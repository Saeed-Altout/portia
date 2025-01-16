"use client";

import { motion, Variants } from "framer-motion";
import { Heading } from "@/components/ui/heading";
import { Circle, Icon } from "@/components/ui/circle-icon";
import { featuresData } from "@/config/constants";

const textVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export const Features = () => {
  return (
    <section id="features" className="screen py-36 space-y-16">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
      >
        <Heading
          title="What makes Portia.io Different?"
          description="We provide a lots of incredible features that you will need!"
        />
      </motion.div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ staggerChildren: 0.2 }}
      >
        {featuresData.map(({ title, description, icon }, index) => (
          <motion.div key={index} className="space-y-5" variants={textVariants}>
            <Circle>
              <Icon icon={icon} />
            </Circle>
            <div className="space-y-2">
              <h2 className="text-[#0A0A0A] text-lg md:text-xl font-medium">
                {title}
              </h2>
              <p className="text-[#727282]">{description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};
