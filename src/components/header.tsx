import { Button } from "./button";
import { Illustration } from "./illustration";

export const Header = () => {
  return (
    <header className="max-w-[1240px] mx-auto">
      <div className="flex justify-between">
        <div className="w-[531px] flex flex-col gap-y-[35px]">
          <p className="font-medium text-[60px] leading-[76px]">
            Unleash the Power of AI in Crypto Trading
          </p>
          <p className="text-[20px] leading-[28px]">
            Enhance your trading and yield farming strategies to optimize
            profits and minimize risks. Implement AI tools to maximize returns
            while staying ahead of market trends.
          </p>
          <Button fill>Start Now</Button>
        </div>
        <Illustration />
      </div>
    </header>
  );
};
