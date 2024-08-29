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
          <div className="flex items-center text-white font-medium text-2xl 1100:text-[40px]">
            <Image
              className="mr-4 w-[30px] h-[30px] 1100:w-[42px] 1100:h-[42px]"
              src="/assets/logo.png"
              width={42}
              height={42}
              alt="logo"
            />
            Bella
          </div>
          <Menu />
          <ul className="hidden 840:flex ml-auto items-center gap-x-10">
            {resources.map(([title, links], i) => (
              <li key={i} className="relative group">
                <div className="group-hover:opacity-[.8] duration-200 transition-opacity cursor-pointer">
                  {title}
                </div>
                <ul
                  style={{ transformOrigin: "50% 0" }}
                  className="invisible delay-75 opacity-0 scale-y-[0.3] pointer-events-none w-[170px] absolute top-full right-0 group-hover:scale-y-100 group-hover:visible group-hover:opacity-100 group-hover:pointer-events-auto bg-[rgba(39,39,39,1)] duration-300 transition-all py-2.5 shadow-lg rounded-md"
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
            <li>
              <LangSwitch />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
