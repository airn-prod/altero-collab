"use client";
import React, { useState } from "react";

import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Logo } from "../ui/logo";
import { Links } from "./links";
import { CTAs } from "./cta";
import { MobileMenu } from "./mobile-menu";
import { MaxWidthWrapper } from "../max-width-wrapper";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 250 ? true : false);
  });

  return (
    <motion.nav
      initial={{
        opacity: 0,
        y: "-100%",
      }}
      animate={{
        opacity: 1,
        y: "0%",
      }}
      transition={{
        duration: 1.25,
        ease: "easeInOut",
      }}
      className={`fixed top-0 z-50 w-full px-6
      transition-all duration-300 ease-out lg:px-12
      ${
        scrolled
          ? "bg-neutral-950 py-3 shadow-xl text-white"
          : "bg-neutral-950/0 py-6 shadow-none text-black"
      }`}
    >
      <MaxWidthWrapper className="mx-auto flex items-center justify-between">
        <Logo
          color={`
      ${scrolled ? "white" : "black"}`}
        />
        <div className="hidden gap-6 lg:flex">
          <Links />
          <CTAs />
        </div>
        <MobileMenu />
      </MaxWidthWrapper>
    </motion.nav>
  );
};

export default Navbar;
