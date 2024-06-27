"use client";

import { MaxWidthWrapper } from "../layout-box/max-width-wrapper";
import { TextGenerateEffect } from "./text-generate-effect";

const words = `At Altero, our mission is to drive innovation and provide the tools and knowledge needed for success in the fast-paced tech world.`;
  
export const Quote = () => {
  return (
    <section className="relative overflow-hidden bg-bg">
      <MaxWidthWrapper className="relative z-20 mx-auto flex h-full flex-col justify-center py-20 md:py-80">
        <TextGenerateEffect words={words} />
      </MaxWidthWrapper>
    </section>
  );
};
