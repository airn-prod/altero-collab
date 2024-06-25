import React, { ReactNode } from "react";

export const CalloutChip = ({ children }: { children: ReactNode }) => {
  return (
    <span className="mb-4 inline-block bg-white w-fit rounded-md border border-borderLight bg-bgWhite text-primary px-2 py-1 text-xs font-semibold">
      {children}
    </span>
  );
};
