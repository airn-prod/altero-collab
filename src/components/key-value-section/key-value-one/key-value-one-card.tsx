"use client";
import { Card } from "../../ui/Card";

import { PulseLine } from "../../ui/PulseLine";
import { CornerBlur } from "../../ui/CornerBlur";

import { Mockup } from "./mockup";

export const KeyValueOneCard = () => {
  return (
    <div className="col-span-1 h-[600px] lg:col-span-4 lg:h-[600px]">
      <Card>
        <PulseLine />
        <p className="mb-2 text-lg font-semibold text-txtTitle">
          All-in-one IT Education and Management
        </p>
        <p className="mb-8 text-txtParagraph text-lg">
          Our IT megafactory provides end-to-end managed IT team services,
          reducing risks and costs for businesses.
        </p>

        <CornerBlur />
        <Mockup />
      </Card>
    </div>
  );
};
