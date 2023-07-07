import { useTranslation, langs } from "../i18n";
import { useRouter } from "next/router";
import { Menu, MenuItem } from "./menu";
import { useCallback, useRef, useEffect } from "react";
import {
  useToggle,
  useLockBodyScroll,
} from "react-use";
import { Menu as MenuMobile } from "./menu-mobile";
import { Modal } from "./modal";
import { Overlay } from "./overlay";
import SelectMenu from "./select-menu";
import {launchApp, useData} from './menus';

const LanToggle = ({
  onLanChange,
  list,
}: {
  list: string[];
  onLanChange: (v: number) => void;
}) => {
  const { t, i18n } = useTranslation(["lang"]);
  return (
    <div className="root">
      <Menu onSelect={onLanChange}>
        {list.map((v) => (
          <MenuItem key={v}>{t(v)}</MenuItem>
        ))}
      </Menu>
      <style jsx>
        {`
          .root {
            font-size: 1.14rem;
            // margin-left: 3.57rem;
            // margin-right: 1.29rem;
          }
        `}
      </style>
    </div>
  );
};

export default ({ width }: { width: number }) => {
  const router = useRouter();
  const ref = useRef<HTMLDivElement>(null);
  const [isShowOverlay, toggleOverlay] = useToggle(false);
  const [isShowMenu, toggleMenu] = useToggle(false);
  const {menus} = useData();

  useLockBodyScroll(isShowOverlay);

  const { i18n } = useTranslation();
  const { t } = useTranslation(["routes"]);

  useEffect(() => {
    if (!router.query.route) return;
    location.hash = "#" + router.query.route;

    if (isShowOverlay) {
      toggleOverlay();
      toggleMenu();
    }
  }, [router.query.route]);

  const handleLanChange = useCallback((i: number) => {
    i18n.changeLanguage(langs[i]);
  }, []);

  return (
    <>
      <div className="root flex v-center">
        <div className="indicator" ref={ref}></div>
        <div className="wrapper">
          <i className="brand icon"></i>
          <ul className="flex fr menus">
            {menus.map((v, i) => (
              <li key={i}>
                <span>{v[0]}</span>
                <i />
                <ul>
                  {v[1].map((item, j) => (
                    <li key={j}>
                      <a href={item.href} target="__blank">{item.name}</a>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
            <li className="launch-app">
              <a href={launchApp.href} target="__blank">{launchApp.name}</a>
            </li>
            <li>
              <LanToggle list={langs} onLanChange={handleLanChange} />
            </li>
          </ul>
        </div>
      </div>
      {isShowOverlay && <Overlay />}
      {isShowOverlay && (
        <Modal
          handleClose={() => {
            toggleOverlay(false);
            toggleMenu(false);
          }}
        >
          <SelectMenu />
        </Modal>
      )}

      <div className="menu-mobile">
        <MenuMobile
          on={isShowMenu}
          onClick={() => {
            toggleMenu();
            toggleOverlay();
          }}
        />
      </div>

      <style jsx>
        {`
        .root {
          left: 0;
          right: 0;
          z-index: 10;
          top: 0;
          padding-bottom: 20px;
          transition: background-color: .2s ease-in;
          padding: 18px 20px;
          position: sticky;
          margin: 0;
          transition: background .2s;
        }

        :global(.show-blur) .root {
          background: rgba(255,255,255,.92);
          background-drop: blur(3px);
          border-bottom: 1px solid #e1e1e1;
        }

        .indicator {
          position: absolute;
          top: -1px;
          height:1px;
          background: transparent;
          pointer-events: none;
          left: 0;
          width:1px;
        }

        .wrapper {
          display: flex;
          max-width: 81.5rem;
          width: 100%;
          margin: 0 auto;
        }

        .brand {
          background-size: auto 100%;
          background-image: url(/logo_new/logo_dark.svg);
          width: 7.79rem;
          height: 2.29rem;
          flex: 0 0 auto;
        }

        button {
          background-color: transparent;
          font-size:1rem;
          font-family:DINNextLTPro-Regular;
          font-weight:500;
          color:rgba(0,178,249,1);
          line-height:1.29rem;
          display: flex;
          align-items: center;
        }

        button:hover{
          cursor: pointer;
        }

        button i {
          background-image: url(/images/right.png);
          width: .71rem;
          height: .71rem;
          margin-left: .43rem;
        }

        .menu-mobile {
          position: relative;
          z-index: 1000;
        }

        .menus {
          display: none;
        }

        @media (min-width: 1024px) {
          .root {
            margin-top: 24px;
            height: 76px;
            top: 0px;
          }

          .menu-mobile {
            display: none;
          }

          .menus {
            display: flex;
          }

          .menus li {
            display: flex;
            align-items: center;
            padding: 0 10px;
          }

          .menus > li > i {
            background-size: cover;
            background-position: center;
            width: 16px;
            height: 16px;
            margin-left: 4px;
            background-image: url(/images/chevron-down.svg);
            // transition: transform 200ms;
          }

          .menus > li + li {
            margin-left: 10px;
          }

          .menus li,
          .menus a {
            font-size: 16px;
            color: rgba(22,33,76,1);
          }

          .menus > li {
            cursor: pointer;
            position: relative;
          }

          .menus > li ul {
            position: absolute;
            top: 100%;
            right: 14px;
            background-color: #fff;
            width: 150px;
            box-shadow: 0 4px 6px -1px rgb(0 0 0 / 10%), 0 2px 4px -2px rgb(0 0 0 / 10%);
            padding: 10px 0;
            transition: transform 200ms, opacity 200ms;
            transform: translate3d(0, 5px, 0);
            opacity: 0;
            visibility: hidden;
            pointer-events: none;
          }

          .menus > li ul li {
            padding: 0;
          }

          .menus > li ul li a {
            width: 100%;
            padding: 10px;
          }

          .menus > li ul li:hover {
            background-color: #f1f1f1;
          }

          .menus > li:hover ul {
            display: block;
            transform: translate3d(0, 0, 0);
            opacity: 1;
            visibility: visible;
            pointer-events: all;
          }

          .menus > li:hover i {
            transform: rotate(-180deg);
          }

          .menus > li li:hover a,
          .menus > li:hover span {
            color: #000;
            font-weight: bold;
          }

          .menus > li + li.launch-app {
            background-color: rgba(0,178,249,1);
            padding: 0 20px;
            border-radius: 20px;
            display: flex;
            align-items: center;
            transition: background-color 200ms;
            margin-left: 20px;
            flex: 0 0 auto;
          }

          .launch-app a {
            color: #fff;
          }

          .launch-app:hover {
            background-color: rgb(0, 163, 232)!important;
          }

          .launch-app:hover a {
            font-weight: bold;
          }
        }
      `}
      </style>
    </>
  );
};
