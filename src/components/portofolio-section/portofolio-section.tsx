"use client";
import React from "react";
import { MaxWidthWrapper } from "../max-width-wrapper";
import { CalloutChip } from "../ui/CalloutChip";
import { PortofolioItems } from "./portofolio-items";

export const Portofolio = () => {
  return (
    <section id="portfolio" className="relative overflow-hidden">
      <MaxWidthWrapper className="relative z-20 justify-between py-20 md:py-28">
        <div className="flex flex-col w-full items-center mx-auto mb-12">
          <CalloutChip>Our Portofolio</CalloutChip>
          <h2 className="text-center max-w-3xl text-3xl leading-tight mb-10 sm:text-4xl sm:leading-tight md:text-[44px] md:leading-[56px]">
            Transforming Ideas into Intelligent Realities
          </h2>
          <p className="text-center max-w-3xl text-base text-txtParagraph mb-[80px] md:text-lg">
            Our portfolio features innovative projects that showcase our expertise in AI integration
            and our commitment to delivering cutting-edge solutions.
          </p>
        </div>

        <PortofolioItems />
      </MaxWidthWrapper>
    </section>
  );
};
