import { KeyValueOneCard } from "./key-value-one/key-value-one-card";
import { KeyValueTwoCard } from "./key-value-two/key-value-two-card";
import { KeyValueThreeCard } from "./key-value-three/key-value-three-card";
import { KeyValueFourCard } from "./key-value-four/key-value-four-card";

export const BentoGrid = () => (
    <div className="col-span-1 grid grid-cols-2 gap-4 lg:col-span-8 lg:grid-cols-2">
      <KeyValueTwoCard />
      <KeyValueThreeCard />
      <KeyValueFourCard />
    </div>
);
