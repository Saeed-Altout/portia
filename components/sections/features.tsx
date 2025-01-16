"use client";

import { motion, Variants } from "framer-motion";
import { featuresData } from "@/config/constants";
import { Heading } from "@/components/ui/heading";
import { CircleIcon } from "@/components/circle-icon";

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

export const Features = () => {
  return (
    <section id="features" className="screen py-36 space-y-16">
      <Heading
        title="What makes Portia.io Different?"
        description="We provide a lots of incredible features that you will need!"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
        {featuresData.map(({ title, description, icon }, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="space-y-5"
          >
            <CircleIcon icon={icon} theme="primary" />
            <div className="space-y-2">
              <h2 className="text-[#0A0A0A] text-lg md:text-xl font-medium">
                {title}
              </h2>
              <p className="text-[#727282]">{description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
