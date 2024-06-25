import { FiArrowRight } from "react-icons/fi";

export const MobileMenuLink = ({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) => {
  return (
    <div className="relative text-neutral-950">
      <a
        href={href}
        className="flex w-full cursor-pointer items-center justify-between border-b border-neutral-300 py-6 text-start text-2xl font-semibold"
      >
        <span>{children}</span>
        <FiArrowRight />
      </a>
    </div>
  );
};
