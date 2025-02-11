"use client";
import { motion } from "framer-motion";
import { TranslateWrapper } from "./translate-wrapper";
import { PartnerItems } from "./partner-items";

export const Partners = () => {
  return (
    <section className="bg-bgGrey">
      <div className="relative mx-auto max-w-7xl overflow-hidden border-b border-white py-20">
        <div className="flex overflow-hidden">
          <TranslateWrapper>
            <PartnerItems />
          </TranslateWrapper>
          <TranslateWrapper>
            <PartnerItems />
          </TranslateWrapper>
        </div>

        <div className="absolute bottom-0 left-0 top-0 w-1/3 max-w-64 bg-gradient-to-r from-bgGrey to-bgGrey/0" />
        <div className="absolute bottom-0 right-0 top-0 w-1/3 max-w-64 bg-gradient-to-l from-bgGrey to-bgGrey/0" />
      </div>
    </section>
  );
};
