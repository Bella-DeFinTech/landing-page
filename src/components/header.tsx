import { Translations } from "@/locales/en-US";
import { Illustration } from "./illustration";

export const Header = ({ translations }: { translations: Translations }) => {
  return (
    <header>
      <div className="flex justify-between">
        <div className="1100:w-[531px] flex flex-col gap-y-6 840:gap-y-[35px]">
          <p className="font-medium text-[32px] leading-normal 1100:text-[60px] 1100:leading-[76px]">
            {translations.title}
          </p>
          <p className="1100:text-[20px] text-sm 1100:leading-[28px]">
            {translations.subTitle}
          </p>
          <a
            href="http://lpfarm.bella.fi/"
            className="bg-white text-black rounded-lg py-[21px] px-[43px] inline-flex items-center w-fit h-10 1100:h-auto"
            target="_blank"
          >
            Start Now
          </a>
        </div>
        <Illustration />
      </div>
    </header>
  );
};
