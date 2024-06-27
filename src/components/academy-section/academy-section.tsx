"use client";
import { motion } from "framer-motion";
import { MaxWidthWrapper } from "../layout-box/max-width-wrapper";
import { CalloutChip } from "../ui/CalloutChip";
import { BenefitItems } from "./benefit-items";

export const Academy = () => {
  return (
    <section className="relative overflow-hidden h-screen bg-white bg-[url('/ricoandfriends.png')] bg-center bg-cover ">
      <div className="bg-gradient-to-t from-bgLight via-bgLight/70 to-bgLight h-screen">
      <MaxWidthWrapper className="relative z-20 mx-auto flex h-full flex-col justify-between py-24 md:py-32">
        <div>
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
          >
            <CalloutChip>Altero Academy</CalloutChip>
          </motion.div>
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
            className="mb-3 max-w-3xl text-start text-3xl font-regular leading-tight text-txtTitle sm:text-4xl sm:leading-tight md:text-[44px] md:leading-[56px]"
          >
            Join Our Young Programmers and Master AI & Automation
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
            className="mb-32 max-w-3xl text-start text-base leading-relaxed text-txtParagraph sm:text-lg md:text-lg"
          >
            At Altero Academy, we are dedicated to empowering the next
            generation of tech innovators. Our hands-on educational programs
            focus on the practical application of cutting-edge AI technologies,
            including LangChain, RAG, and AutoRAG.
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
        </div>
        <BenefitItems />
      </MaxWidthWrapper>
      </div>
    </section>
  );
};
