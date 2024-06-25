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
        <p className="mb-2 text-lg font-semibold text-txtTitle">
          Advanced AI Solutions
        </p>
        <p className="text-txtParagraph text-lg">
          We develop tailored LLM and RAG-based AI applications to address
          specific business challenges.
        </p>

        <Skeleton />
      </Card>
    </div>
  );
};
