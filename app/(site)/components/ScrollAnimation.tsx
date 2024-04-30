"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ScrollAnimation = ({ children }: { children: any }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const variants = {
    hidden: { y: 100, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
    >
      {children}
    </motion.div>
  );
};

export default ScrollAnimation;
