import { Translations } from "@/locales/en-US";
import { Illustration } from "./illustration";

export const Header = ({ translations }: { translations: Translations }) => {
  return (
    <header>
      <div className="flex justify-between">
        <div className="1100:w-[531px] flex flex-col gap-y-6 840:gap-y-[35px]">
          <p className="font-medium text-[32px] leading-tight sm:leading-normal 1100:text-[60px] 1100:leading-[76px]">
            {translations.title}
          </p>
          <p className="1100:text-[20px] text-sm 1100:leading-[28px] 1100:whitespace-pre-line">
            {translations.subTitle}
          </p>
          <div className="flex">
            <a
              href="https://t.me/BellaSignalBot"
              className="bg-white text-black py-3 px-12 inline-flex rounded-full items-center w-fit h-10 1100:h-auto"
              target="__blank"
            >
              {translations.buttons.getSignals}
            </a>
            <a
              href="https://coinflip.bella.fi"
              className="bg-blue-500 text-white ml-5 py-3 px-12 inline-flex rounded-full items-center w-fit h-10 1100:h-auto"
              target="__blank"
            >
              {translations.buttons.playNow}
            </a>
          </div>
        </div>
        <Illustration />
      </div>
    </header>
  );
};
