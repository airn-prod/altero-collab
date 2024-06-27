import { motion } from "framer-motion";
import { MaxWidthWrapper } from "../layout-box/max-width-wrapper";

export const HeroContent = () => {
  return (
    <MaxWidthWrapper className="relative z-20 mx-auto flex h-full flex-col justify-end py-24 md:py-24">
      <motion.div
        initial={{
          y: 25,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1.25,
          ease: "easeInOut",
        }}
        className="relative"
      ></motion.div>
      <motion.h1
        initial={{
          y: 25,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1.25,
          delay: 0.25,
          ease: "easeInOut",
        }}
        className="mb-3 max-w-3xl text-start text-3xl font-regular leading-tight text-txtTitle sm:text-4xl sm:leading-tight md:text-[56px] md:leading-[72px]"
      >
        Transforming Talent, <br></br>
        Driving Innovation
      </motion.h1>
      <motion.p
        initial={{
          y: 25,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1.25,
          delay: 0.5,
          ease: "easeInOut",
        }}
        className="mb-2 max-w-3xl text-start text-base leading-relaxed text-txtParagraph sm:text-lg md:text-lg"
      >
        We emphasis AI technology to develop large language models <br></br> (LLMs) 
        to empower education in Indonesia.
      </motion.p>
      <motion.div
        initial={{
          y: 25,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1.25,
          delay: 0.75,
          ease: "easeInOut",
        }}
        className="flex flex-col items-center gap-6 sm:flex-row"
      ></motion.div>
    </MaxWidthWrapper>
  );
};
