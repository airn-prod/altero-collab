import { Card } from "../../ui/Card";
import { SpinningLogos } from "./spinning-logo";

export const KeyValueFourCard = () => {
  return (
    <div className="col-span-2 h-fit sm:h-[209px]">
      <Card>
        <div className="relative z-20">
          <p className="mb-2 text-xl font-semibold text-txtTitle">
            AI Academy
          </p>
          <p className="mb-8 text-txtParagraph max-w-lg text-xl">
             Practical AI training through Altero Academy, focusing on advanced technologies.
          </p>
        </div>
        <div className="absolute bottom-0 right-0 top-0 z-10 w-48 bg-gradient-to-r from-zinc-950/0 to-bgGrey" />
        <SpinningLogos />
      </Card>
    </div>
  );
};
