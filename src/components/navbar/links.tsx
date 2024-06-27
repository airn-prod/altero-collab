import LINKS from "@/data/link";
import { NavLink } from "./nav-link";

export const Links = () => {
  return (
    <div className="flex items-center gap-4">
      {LINKS.map((l, index) => (
        <>
          <NavLink key={l.text} href={l.href}>
            {l.text}
          </NavLink>
          {index < LINKS.length - 1 && <div className="opacity-30">/</div>}
        </>
      ))}
    </div>
  );
};
