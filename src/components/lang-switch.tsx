"use client";

import { useEffect, useState } from "react";
// import { Button } from "./button";
// import { Gap } from "./gap";
import clsx from "clsx";
import Link from "next/link";
import { useParams } from "next/navigation";
import { langs } from "@/lang";

export const LangSwitch = () => {
  const params = useParams();
  const { lang } = params;
  const [showMenu, setShowMenu] = useState(false);
  const [hideMenu, setHideMenu] = useState(true);
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
      <button
        onClick={() => {
          setShowMenu(true);
          setHideMenu(false);
        }}
        className="py-4"
      >
        <div className="border rounded-full border-white flex-shrink-0 flex-grow-0 w-8 h-8 flex items-center justify-center">
          {langs
            .find((la) => la.code === lang)
            ?.code.split("-")[0]
            .toUpperCase()}
        </div>
      </button>
      <div
        className={clsx(
          "absolute bg-[rgba(39,39,39,1)] text-white rounded-lg w-[170px] top-full left-1/2 -translate-x-1/2 px-2 py-2",
          {
            "lang-switch-on block": showMenu && !hideMenu,
            "lang-switch-off block": !showMenu && !hideMenu,
            hidden: hideMenu,
          }
        )}
        onAnimationEnd={() => {
          if (!showMenu) {
            setHideMenu(true);
          }
        }}
      >
        {langs
          .filter((la) => la.code !== lang)
          .map((la) => (
            <Link href={"/" + la.code} key={la.code} className="block group">
              <div className="rounded-lg transition-colors duration-200 group-hover:bg-black group-hover:text-white p-5 h-full">
                {la.name}
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};
