"use client";

import { MaxWidthWrapper } from "../max-width-wrapper";
import { TextGenerateEffect } from "./text-generate-effect";

const words = `At Altero Labs, our mission is to drive innovation and provide the tools and knowledge needed for success in the fast-paced tech world.`;

export const Quote = () => {
  return (
    <section className="relative overflow-hidden bg-bgGrey">
      <MaxWidthWrapper className="relative z-20 mx-auto flex h-full flex-col justify-center py-20 md:py-20">
        <TextGenerateEffect words={words} />
      </MaxWidthWrapper>
    </section>
  );
};
