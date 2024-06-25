import React from "react";

import { Card } from "../../ui/Card";
import { Ping } from "./ping";

export const KeyValueThreeCard = () => {
  return (
    <div className="col-span-2 h-[415px] sm:h-[375px] md:col-span-1">
      <Card>
        <p className="mb-2 text-lg font-semibold text-txtTitle">
          Strategic Location and Local Empowerment
        </p>
        <p className="mb-8 text-txtParagraph text-lg">
          Based in Bali, Indonesia, we attract top regional tech talent and
          offer a vibrant work environment.
        </p>

        <Ping />
      </Card>
    </div>
  );
};
