import { Card } from "../../ui/Card";
import { SpinningLogos } from "./spinning-logo";

export const KeyValueFourCard = () => {
  return (
    <div className="col-span-2 h-fit sm:h-[209px]">
      <Card>
        <div className="relative z-20">
          <p className="mb-2 text-lg font-semibold text-txtTitle">
            Optimized Development and Management
          </p>
          <p className="mb-8 text-txtParagraph max-w-lg text-lg">
            Supported by ITSM experts and DevOps engineers, our efficient task
            management system ensures smooth development.
          </p>
        </div>
        <div className="absolute bottom-0 right-0 top-0 z-10 w-48 bg-gradient-to-r from-zinc-950/0 to-bgGrey" />
        <SpinningLogos />
      </Card>
    </div>
  );
};
