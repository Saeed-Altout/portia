"use client";

import { motion } from "framer-motion";
import Link from "next/link";
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
            Testimonials
          </motion.span>
          <motion.h1
            className="text-3xl md:text-4xl lg:text-5xl font-semibold"
            variants={textVariants}
          >
            Why To Choose Portia.io?
          </motion.h1>
        </motion.div>

        <motion.p className="text lg:text-xl" variants={textVariants}>
          At Portia.io, we strive to deliver exceptional proxy services to our
          customers. Our dedication to quality and customer satisfaction shines
          through in the feedback we receive.
        </motion.p>

        <motion.div
          className="trustpilot-widget"
          data-locale="en-US"
          data-template-id="56278e9abfbbba0bdcd568bc"
          data-businessunit-id="66f53227f3776e76986a3387"
          data-style-height="52px"
          data-style-width="100%"
          variants={textVariants}
        >
          <Link
            href="https://www.trustpilot.com/review/portia.pro"
            target="_blank"
            rel="noopener"
          >
            Trustpilot
          </Link>
          <script
            type="text/javascript"
            src="//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js"
            async
          />
        </motion.div>
      </motion.div>
    </section>
  );
};
