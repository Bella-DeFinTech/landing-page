import Image from "next/image";
import { Button } from "./button";
import Link from "next/link";

const links = [
  [
    ["Recources", ""],
    ["Ai Bot Docs", ""],
    ["Flex Savings Docs", ""],
    ["LP Farm Docs", ""],
    ["Tuner Getting Started", ""],
    ["Brand Assets", ""],
  ],
  [
    ["Foundation", ""],
    ["Contact Us", ""],
    ["Venture Fund", ""],
    ["Developers", ""],
    ["Tuner", ""],
  ],
];

const medias = [
  ["Linkedin", ""],
  ["Github", ""],
  ["Twitter", ""],
  ["Telegram", ""],
  ["Discord", ""],
  ["Medium", ""],
];

export const Footer = () => (
  <footer className="bg-[#191A23] rounded-3xl p-[60px] my-8">
    <div className="pr-[95px] border-b border-white">
      <div className="flex items-center">
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
        <div className="font-bold text-xl ml-6">
          AI Agent for Crypto Trading and Yield Farming
        </div>
      </div>
      <div className="mt-[66px] flex justify-between">
        <div className="bg-[#292A32] py-[32.5px] px-10 flex gap-x-5 h-fit rounded-lg">
          <input
            className="outline-0 border-white border bg-transparent px-2 rounded-lg"
            type="email"
            placeholder="Enter Email Address"
          />
          <Button fill accent>
            Subscribe to news
          </Button>
        </div>
        {links.map((list, i) => (
          <div className="flex flex-col gap-y-6 text-lg" key={i}>
            {list.map((link, j) => (
              <Link key={j} href={link[1]}>
                {link[0]}
              </Link>
            ))}
          </div>
        ))}
      </div>
      <div className="flex items-center gap-x-[30px] mt-[66px] mb-[50px]">
        {medias.map((media, i) => (
          <Link key={i} href={media[1]}>
            <Image
              src={`/assets/medias/${i}.svg`}
              width={30}
              height={30}
              alt={media[0]}
            />
          </Link>
        ))}
      </div>
    </div>
    <div className="text-lg mt-[50px] flex gap-x-10">
      <div>© 2024 Bella. All Rights Reserved.</div>
      <div>
        <Link href="">Privacy Policy</Link>
      </div>
    </div>
  </footer>
);
