"use client";

import { motion } from "framer-motion";
import {
  textVariants,
  animationTransition,
  animationViewport,
} from "@/config/animations";

export const Hero = () => {
  return (
    <section id="hero" className="bg-[#F5F5FA] py-24">
      <motion.div
        className="space-y-6 screen text-center"
        initial="hidden"
        whileInView="visible"
        viewport={animationViewport}
        transition={{ staggerChildren: animationTransition.staggerChildren }}
      >
        <motion.div className="space-y-3" variants={textVariants}>
          <motion.span
            className="text-[#03055E] font-semibold text-sm"
            variants={textVariants}
          >
            Why Portia.io?
          </motion.span>
          <motion.h1
            className="text-3xl md:text-4xl lg:text-5xl font-semibold"
            variants={textVariants}
          >
            Why To Choose Portia.io?
          </motion.h1>
        </motion.div>

        <motion.p className="text lg:text-xl" variants={textVariants}>
          At Portia.io, we are driven by the desire to provide a reliable,
          affordable, and flexible proxy service that meets the needs of our
          diverse clientele. Our journey began with a vision to create a proxy
          service that eliminates the common frustrations users face with
          traditional providers.
        </motion.p>
      </motion.div>
    </section>
  );
};
