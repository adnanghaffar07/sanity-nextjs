"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const variants = {
  hidden: { y: 100, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.5 } },
};

// Slides its content up into view the first time it is scrolled to.
export default function ScrollAnimation({ children }: { children: ReactNode }) {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <motion.div ref={ref} variants={variants} initial="hidden" animate={inView ? "show" : "hidden"}>
      {children}
    </motion.div>
  );
}
