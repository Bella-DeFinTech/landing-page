import React, { useState, useRef } from "react";
import cx from "classnames";
import useClickAway from "react-use/lib/useClickAway";
import { useLocale, type Locales } from "./locale";
import { useRouter } from "next/router";

interface IProps {
  hoverColor?: string;
  children: React.ReactNode[];
  onSelect: (selected: number) => void;
}

export const Menu = ({ children, hoverColor, onSelect }: IProps) => {
  const { locale } = useRouter();
  const ref = useRef<HTMLUListElement>(null);
  useClickAway(ref, () => {
    setShowList(false);
  });
  const [showList, setShowList] = useState(false);
  const handleClick = () => setShowList(true);
  const handleSelect = (e: React.MouseEvent<HTMLLIElement>, i: number) => {
    e.stopPropagation();
    setShowList(false);
    onSelect(i);
  };
  return (
    <ul ref={ref} className="root" onClick={handleClick}>
      <i className="icon">
        {locale === "en" ? "EN" : locale === "zh_cn" ? "ZH" : "TR"}
      </i>
      <ul className={cx("list", { active: showList })}>
        {React.Children.map(children, (v, i) => (
          <li onClick={(e) => handleSelect(e, i)} key={i}>
            {v}
          </li>
        ))}
      </ul>
      <style jsx>
        {`
          .root {
            position: relative;
            cursor: pointer;
            font-size: 1em;
          }

          .list {
            min-width: 120px;
            opacity: 0;
            visibility: hidden;
            position: absolute;
            top: 0;
            left: 0;
            background-color: #fff;
            box-shadow: 0 0 15px rgba(0, 0, 0, 0.16);
            border-radius: 4px;
            padding: 10px 0;
            clip-path: polygon(0 0, 100% 0%, 100% 0, 0 0);
          }

          i.icon {
            width: 2.86rem;
            height: 2.86rem;
            border-radius: 50%;
            border: 1px solid rgba(0, 178, 249, 1);
            color: rgba(0, 178, 249, 1);
            font-weight: bold;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: rgba(0, 178, 249, 0.08);
            -webkit-font-smoothing: none;
            font-style: normal;
          }

          // @media (max-width: 1100px) {
          //   i.icon {
          //     display: none;
          //   }
          // }

          .list li {
            padding: 10px;
          }

          .list li:hover {
            background-color: ${hoverColor || "#e1e1e1"};
          }

          .list.active {
            animation: fade-in 0.2s;
            opacity: 1;
            visibility: visible;
            clip-path: polygon(0 0, 100% 0%, 100% 100%, 0 100%);
          }

          @keyframes fade-in {
            0% {
              opacity: 0.3;
              visibility: hidden;
              clip-path: polygon(0 0, 100% 0%, 100% 0, 0 0);
            }

            100% {
              opacity: 1;
              visibility: visible;
              clip-path: polygon(0 0, 100% 0%, 100% 100%, 0 100%);
            }
          }
        `}
      </style>
    </ul>
  );
};

export const MenuItem = ({ children }: { children: any }) => children;
