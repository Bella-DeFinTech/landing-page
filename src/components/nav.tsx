import Image from "next/image";
import { LangSwitch } from "./lang-switch";
import { Translations } from "@/locales/en-US";
import { Menu } from "./menu";
import { developers, docs, products } from "@/constant";

const resources = [
  ["Products", products],
  ["Developers", developers],
  ["Documentation", docs],
] as const;

export const Navigation = ({
  translations,
}: {
  translations: Translations;
}) => {
  return (
    <nav className="pt-0 840:pt-10 sticky top-0 840:top-[-20px] bg-[rgba(0,0,0,.6)] z-10 backdrop-blur-sm text-sm 1100:text-base">
      <div className="max-w-8xl mx-auto ">
        <div className="px-5 840:px-8 xl:px-[100px] flex items-center h-[68px]">
          <Image
            className="h-[30px] w-fit 1100:h-[42px]"
            src="/assets/bella.png"
            width={500}
            height={155}
            alt="logo"
          />
          <Menu />
          <ul className="hidden 840:flex ml-auto items-center gap-x-5">
            {resources.map(([title, links], i) => (
              <li key={i} className="relative group">
                <div className="group-hover:opacity-[.82] px-5 py-4 duration-200 transition-opacity cursor-pointer">
                  {title}
                </div>
                <ul
                  style={{ transformOrigin: "50% 0" }}
                  className="invisible delay-75 opacity-0 scale-y-[0.3] pointer-events-none w-[170px] absolute top-full left-1/2 -translate-x-1/2 group-hover:scale-y-100 group-hover:visible group-hover:opacity-100 group-hover:pointer-events-auto bg-[rgba(39,39,39,1)] duration-300 transition-all p-2.5 drop-shadow-lg rounded-md"
                >
                  {links.map((link, j) => (
                    <li key={j}>
                      <a
                        className="block px-3 py-4 hover:bg-black text-white"
                        href={link.link}
                        target="__blank"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
            <li className="ml-5">
              <LangSwitch />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
