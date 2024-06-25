import { FiDollarSign, FiHome, FiLink } from "react-icons/fi";
import BeliesimIcon from "./beliesim-icon";

export const MockupSideBar = () => (
  <div className="h-full w-24 border-r border-borderLight bg-zinc-50 p-2">
    <div className="mb-4 flex items-center justify-between ">
      <BeliesimIcon />
    </div>
    <div className="space-y-1">
      <div className="flex items-center gap-1 rounded bg-orange-500 px-1 py-0.5 text-[10px] text-white">
        <FiHome />
        Dashboard
      </div>
      <div className="flex items-center gap-1 rounded px-1 py-0.5 text-[10px] text-txtParagraph">
        <FiLink />
        Affiliate
      </div>
      <div className="flex items-center gap-1 rounded px-1 py-0.5 text-[10px] text-txtParagraph">
        <FiDollarSign />
        Payout
      </div>
    </div>
  </div>
);
