import { MockupMain } from "./mockup-main";
import { MockupSideBar } from "./mockup-side-bar";
import { MockupTopBar } from "./mockup-top-bar";

export const Mockup = () => (
  <div className="absolute -bottom-4 left-6 h-[340px] w-full overflow-hidden rounded-xl border border-borderLight bg-white sm:h-[370px]">
    <MockupTopBar />
    <div className="flex h-full w-full">
      <MockupSideBar />
      <MockupMain />
    </div>
  </div>
);
