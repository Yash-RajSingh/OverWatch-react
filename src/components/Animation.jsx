import { motion, useInView } from "framer-motion";
import { useRef } from "react";
const AnimationComponent = (props) => {
  const elementRef = useRef(null);
  const isInView = useInView(elementRef, { once: true });
  return (
    <motion.div
      ref={elementRef}
      initial={{ y: 30, opacity: 0 }}
      animate={isInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
      exit={{ y: -30, opacity: 0 }}
      transition={{ duration: 0.4, delay: 0.3 }}
    >
      {props.children}
    </motion.div>
  );
};

export default AnimationComponent;
