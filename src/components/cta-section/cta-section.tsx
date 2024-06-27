"use client";

import { MaxWidthWrapper } from "../max-width-wrapper";
import { Button } from "../ui/button";

const words = `At Altero Labs, our mission is to drive innovation and provide the tools and knowledge needed for success in the fast-paced tech world.`;

export const Cta = () => {
  return (
    <section id="cta" className="relative overflow-hidden bg-bgGrey">
      <MaxWidthWrapper className="relative z-20 mx-auto flex h-full flex-col justify-center items-center py-20 md:py-16">
        <h2 className="text-center max-w-3xl text-3xl leading-tight mb-6 sm:text-4xl sm:leading-tight md:text-[44px] md:leading-[56px]">
          Discover Your Path to Innovation
        </h2>
        <p className="text-center max-w-3xl text-base text-txtParagraph mb-10 md:text-lg">
          Connect with Altero Labs and embark on a journey of transformative solutions.
        </p>

        <a href="mailto:info@alterolab.com">
          <Button>Connect with AlteroLabs</Button>
        </a>
      </MaxWidthWrapper>
    </section>
  );
};
