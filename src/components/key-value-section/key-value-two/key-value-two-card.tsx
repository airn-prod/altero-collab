import React from "react";
import { motion } from "framer-motion";
import { FiLink } from "react-icons/fi";
import { CalloutChip } from "../../ui/CalloutChip";
import { Card } from "../../ui/Card";
import { Skeleton } from "./skeleton";

export const KeyValueTwoCard = () => {
  return (
    <div className="col-span-2 h-[375px] md:col-span-1">
      <Card>
        <p className="mb-2 text-xl font-semibold text-txtTitle">
          Advanced AI Solutions
        </p>
        <p className="text-txtParagraph text-xl">
        Custom AI solutions, including LLMs for Indonesian
        use cases and AI-driven applications.
        </p>

        <Skeleton />
      </Card>
    </div>
  );
};
