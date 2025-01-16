"use client";

import { motion } from "framer-motion";
import {
  textVariants,
  animationTransition,
  animationViewport,
} from "@/config/animations";

export const Hero = () => {
  return (
    <section id="hero" className="screen py-24 text-center">
      <motion.div
        className="space-y-6"
        initial="hidden"
        whileInView="visible"
        viewport={animationViewport}
        transition={{ staggerChildren: animationTransition.staggerChildren }}
      >
        <motion.div className="space-y-3" variants={textVariants}>
          <motion.h1
            className="text-3xl md:text-4xl lg:text-5xl font-semibold"
            variants={textVariants}
          >
            Pricing plans
          </motion.h1>
        </motion.div>

        <motion.p className="text lg:text-xl" variants={textVariants}>
          Transparent pricing that grows with your needs.
        </motion.p>
      </motion.div>
    </section>
  );
};
