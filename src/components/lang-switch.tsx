"use client";

import { useEffect, useState } from "react";
import { Button } from "./button";
import { Gap } from "./gap";
import clsx from "clsx";
import Link from "next/link";
import { useParams } from "next/navigation";
import { langs } from "@/lang";

export const LangSwitch = () => {
  const params = useParams();
  const { lang } = params;
  const [showMenu, setShowMenu] = useState(false);
  useEffect(() => {
    const onClick = (e: Event) => {
      setShowMenu(false);
    };

    const next = () => {
      if (!showMenu) {
        return;
      }
      document.addEventListener("click", onClick);
    };
    window.requestAnimationFrame(next);
    return () => {
      document.removeEventListener("click", onClick);
    };
  }, [showMenu]);
  return (
    <div className="relative">
      <Button
        outline
        onClick={() => {
          setShowMenu(true);
        }}
      >
        {langs.find((la) => la.code === lang)?.name}
        <Gap x={14} />
        <svg
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={clsx("duration-300 transition-transform", {
            "rotate-180": showMenu,
          })}
        >
          <path
            d="M4.99998 3.87831L8.71233 0.166016L9.77298 1.22667L4.99998 5.99968L0.227051 1.22667L1.28771 0.166016L4.99998 3.87831Z"
            fill="white"
          />
        </svg>
      </Button>
      <div
        className={clsx(
          "absolute bg-white text-black rounded-lg w-[220px] top-full right-0",
          {
            "block lang-switch": showMenu,
            hidden: !showMenu,
          }
        )}
      >
        {langs
          .filter((la) => la.code !== lang)
          .map((la) => (
            <Link
              href={"/" + la.code}
              key={la.code}
              className="block py-5 pl-5"
            >
              {la.name}
            </Link>
          ))}
      </div>
    </div>
  );
};
