import React from "react";

import { Card } from "../../ui/Card";
import { Ping } from "./ping";

export const KeyValueThreeCard = () => {
  return (
    <div className="col-span-2 h-[415px] sm:h-[375px] md:col-span-1">
      <Card>
        <p className="mb-2 text-xl font-semibold text-txtTitle">
          eSIM Solutions
        </p>
        <p className="mb-8 text-txtParagraph text-xl">
           Global connectivity with our customizable eSIM services for travelers.
        </p>

        <Ping />
      </Card>
    </div>
  );
};
