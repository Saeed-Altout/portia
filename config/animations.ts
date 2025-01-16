// config/animations.ts
import { Variants } from "framer-motion";

// Define your animation variants
export const textVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

// Define your animation transition settings
export const animationTransition = {
  duration: 0.5,
  staggerChildren: 0.2,
};

// Define your viewport settings
export const animationViewport = {
  once: true,
  amount: 0.5,
};
