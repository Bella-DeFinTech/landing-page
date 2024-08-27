import { Translations } from "@/locales/en-US";
import { Button } from "./button";
import { Illustration } from "./illustration";

export const Header = ({ translations }: { translations: Translations }) => {
  return (
    <header>
      <div className="flex justify-between">
        <div className="w-[531px] flex flex-col gap-y-[35px]">
          <p className="font-medium text-[60px] leading-[76px]">
            {translations.title}
          </p>
          <p className="text-[20px] leading-[28px]">{translations.subTitle}</p>
          <Button fill>Start Now</Button>
        </div>
        <Illustration />
      </div>
    </header>
  );
};
