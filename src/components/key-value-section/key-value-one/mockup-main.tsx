"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export const MockupMain = () => {
  const [commissions, setCommissions] = useState([
    {
      name: "Rp10.000",
      src: "https://api.dicebear.com/7.x/avataaars/svg?seed=John",
    },
    {
      name: "Rp25.000",
      src: "https://api.dicebear.com/7.x/avataaars/svg?seed=Dan",
    },
    {
      name: "Rp50.000",
      src: "https://api.dicebear.com/7.x/avataaars/svg?seed=Tom",
    },
    {
      name: "Rp15.000",
      src: "https://api.dicebear.com/7.x/avataaars/svg?seed=Andrea",
    },
    {
      name: "Rp12.000",
      src: "https://api.dicebear.com/7.x/avataaars/svg?seed=Pete",
    },
    {
      name: "Rp30.000",
      src: "https://api.dicebear.com/7.x/avataaars/svg?seed=Phil",
    },
    {
      name: "Rp20.000",
      src: "https://api.dicebear.com/7.x/avataaars/svg?seed=Garry",
    },
    {
      name: "Rp80.000",
      src: "https://api.dicebear.com/7.x/avataaars/svg?seed=Frank",
    },
    {
      name: "Rp40.000",
      src: "https://api.dicebear.com/7.x/avataaars/svg?seed=Don",
    },
  ]);

  useEffect(() => {
    const intervalRef = setInterval(() => {
      setCommissions((pv) => {
        const copy = [...pv];
        const lastEl = copy.shift();

        if (lastEl) {
          copy.push(lastEl);
        }

        return copy;
      });
    }, 5000);

    return () => clearInterval(intervalRef);
  }, []);

  return (
    <div className="relative w-full">
      <div className="relative z-0 w-full p-4">
        <div className="w-full border-b border-borderGray pb-2 text-base text-txtTitle">
          <span>Affiliate Transaction</span>
        </div>
        {commissions.map((u, i) => (
          <motion.div
            layout
            key={u.name}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
            }}
            style={{
              zIndex: i === commissions.length - 1 ? 0 : 1,
            }}
            className="relative flex items-center gap-1 py-2 text-xs"
          >
            <p className={i === 0 ? "text-txtParagraph" : "text-zinc-300"}>
              Commission
            </p>
            <p className={i === 0 ? "text-emerald-500" : "text-zinc-300"}>
              {u.name}
            </p>
          </motion.div>
        ))}
      </div>
      <div className="absolute bottom-0 left-0 right-0 top-1/4 z-10 bg-gradient-to-b from-white/0 via-white/90 to-white" />
    </div>
  );
};
