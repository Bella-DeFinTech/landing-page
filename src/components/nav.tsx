import Image from "next/image";
import { LangSwitch } from "./lang-switch";
import { Translations } from "@/locales/en-US";

export const Navigation = ({
  translations,
}: {
  translations: Translations;
}) => {
  return (
    <nav className="pt-10 sticky top-[-20px] bg-[rgba(0,0,0,.6)] z-10 backdrop-blur-sm">
      <div className="h-[68px] 1440:px-[100px] 1440:w-auto w-[1240px] mx-auto flex items-center">
        <div className="flex items-center text-white font-medium text-[40px]">
          <Image
            className="mr-4"
            src="/assets/logo.png"
            width={42}
            height={42}
            alt="logo"
          />
          Bella
        </div>
        <ul className="ml-auto flex items-center gap-x-10">
          <li>
            <a href="/">Product</a>
          </li>
          <li>
            <a href="/">Developer</a>
          </li>
          <li>
            <a href="/">Documentation</a>
          </li>
          <li>
            <LangSwitch />
          </li>
        </ul>
      </div>
    </nav>
  );
};
