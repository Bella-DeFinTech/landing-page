import { FC, PropsWithChildren } from "react";

export const Title: FC<PropsWithChildren> = ({ children }) => (
  <div className="bg-[#02E8F4] w-fit flex h-fit py-0.5 sm:py-2 items-center px-[7px] text-black flex-none font-medium text-2xl 1100:text-[40px] rounded">
    {children}
  </div>
);
