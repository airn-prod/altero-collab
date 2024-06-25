import { Band } from "./band";
import { FaLocationDot } from "react-icons/fa6";

const LOOP_DURATION = 6;
export const Ping = () => {
  return (
    <div className="absolute bottom-0 left-1/2 w-fit -translate-x-1/2 translate-y-1/6 mb-4">
      <FaLocationDot className="relative z-10 text-7xl text-bgLight" />
      <Band delay={0} />
      <Band delay={LOOP_DURATION * 0.25} />
      <Band delay={LOOP_DURATION * 0.5} />
      <Band delay={LOOP_DURATION * 0.75} />
    </div>
  );
};
