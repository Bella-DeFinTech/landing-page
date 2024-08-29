"use client";

import { developers, docs, products } from "@/constant";
import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

const resources = [
  ["Products", products],
  ["Developers", developers],
  ["Docs", docs],
] as const;

export const Menu = () => {
  const [open, setOpen] = useState(false);
  const root = useRef<HTMLDivElement>(null);
  const toggle = useCallback(() => setOpen((prev) => !prev), []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [open]);

  return (
    <>
      {createPortal(
        <svg
          onClick={toggle}
          className="840:hidden ml-auto cursor-pointer fixed top-[22px] right-8 z-30"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <line
            x1="3"
            y1="6"
            x2="21"
            y2="6"
            stroke="white"
            strokeWidth="2"
            className="transition-transform duration-200"
            style={{
              transform: open ? "rotate(45deg) translate(3px, 3px)" : "none",
              transformOrigin: "center",
            }}
          />
          <line
            x1="3"
            y1="12"
            x2="21"
            y2="12"
            stroke="white"
            strokeWidth="2"
            className="transition-opacity duration-200"
            style={{
              opacity: open ? 0 : 1,
            }}
          />
          <line
            x1="3"
            y1="18"
            x2="21"
            y2="18"
            stroke="white"
            strokeWidth="2"
            className="transition-transform duration-200"
            style={{
              transform: open ? "rotate(-45deg) translate(3px, -3px)" : "none",
              transformOrigin: "center",
            }}
          />
        </svg>,
        document.body
      )}
      {open &&
        createPortal(
          <>
            <div className="fixed overflow-y-auto fadeIn top-0 left-0 right-0 bottom-0 bg-black/90 z-20 text-xl pt-[68px]">
              <div className="h-full w-full pt-[100px]">
                <div
                  ref={root}
                  className="gap-y-10 flex items-center flex-col h-fit"
                >
                  {resources.map(([title, links], i) => (
                    <div key={i}>
                      <details
                        onClick={(e) => {
                          const el = e.currentTarget;
                          window.requestAnimationFrame(() => {
                            if (el.open) {
                              Array.from(
                                root.current?.querySelectorAll("details") ?? []
                              ).forEach((d) => {
                                const _el = d as HTMLDetailsElement;
                                if (_el.open && _el !== el) {
                                  (_el.children[0] as HTMLElement).click();
                                }
                              });
                            }
                          });
                        }}
                      >
                        <summary className="list-none text-3xl w-[212px]">
                          {title.toUpperCase()}
                        </summary>
                        <ul className="mt-5 flex flex-col gap-y-4 pl-[30px]">
                          {links.map((link, j) => (
                            <li key={j}>
                              <a href={link.link} target="__blank">
                                {link.name}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </details>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </>,
          document.body
        )}
    </>
  );
};
