import { motion } from "framer-motion";

const LOOP_DURATION = 6;

export const Band = ({ delay }: { delay: number }) => {
  return (
    <motion.span
      style={{
        translateX: "-50%",
        translateY: "-50%",
      }}
      initial={{
        opacity: 0,
        scale: 0.25,
      }}
      animate={{
        opacity: [0, 1, 1, 0],
        scale: 1,
      }}
      transition={{
        repeat: Infinity,
        repeatType: "loop",
        times: [0, 0.5, 0.75, 1],
        duration: LOOP_DURATION,
        ease: "linear",
        delay,
      }}
      className="absolute left-[50%] top-[40%] z-0 size-80 rounded-full border border-primary bg-gradient-to-br from-primary/50 to-primary/20"
    />
  );
};
