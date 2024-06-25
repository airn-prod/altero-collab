"use client";
import React from "react";
import { MaxWidthWrapper } from "../max-width-wrapper";
import { CalloutChip } from "../ui/CalloutChip";
import { BentoGrid } from "./bento-grid";

export const KeyValue = () => {
  return (
    <section id="features" className="relative overflow-hidden">
      <MaxWidthWrapper className="relative z-20 pb-20 pt-20 md:pb-28 md:pt-40">
        <div className="flex flex-col w-full items-center mx-auto mb-12">
          <CalloutChip>Our Key Value</CalloutChip>
          <h2 className="text-center max-w-3xl text-3xl leading-tight mb-10 sm:text-4xl sm:leading-tight md:text-[44px] md:leading-[56px]">
            To empowering businesses and individuals for success, we believe
            with our key value
          </h2>
          <p className="text-center max-w-3xl text-base text-txtParagraph mb-[80px] md:text-lg">
            With today&apos;s fast-paced technological development, we are
            dedicated to pushing the limits of technology in individuals through
            innovation. We believe that the value we bring will impact Indonesia
            in the future.
          </p>
        </div>

        <BentoGrid />
      </MaxWidthWrapper>
    </section>
  );
};
