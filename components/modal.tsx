import { Image } from "./image";
import React from "react";
import { useToggle } from "react-use";
import cx from "classnames";

export const Modal: React.FC<{ handleClose: () => void }> = ({
  handleClose,
  children,
}) => {
  const [show, toggleShow] = useToggle(false);
  React.useEffect(() => {
    const t = setTimeout(() => {
      toggleShow();
    }, 250);
    return () => {
      clearTimeout(t);
    };
  }, []);
  return (
    <div className={cx("root", { show })}>
      {/* <div className="header flex v-center h-center">
        选择钱包
        <div onClick={() => handleClose()}>
          <Image style={{ width: '.15rem', height: '.15rem', position: 'absolute', transform: 'translate(0, -50%)', top: '50%', right: '.2rem' }} src={`/images/close.png`} />
        </div>
      </div> */}
      <div className="body">{children}</div>
      <style jsx>
        {`
          .root {
            position: fixed;
            // top: 50%;
            // left: 50%;
            // transform: translate(-50%, -50%);
            z-index: 1000;
            border-radius: 0.16rem;
            opacity: 0;
            visibility: hidden;
            top: 0;
            left: 0;
            bottom: 0;
            overflow-y: auto;
            padding: 70px 0;
          }

          .show {
            animation: fadeIn 0.35s cubic-bezier(0.4, 0, 0.2, 1);
            opacity: 1;
            visibility: visible;
          }

          .header {
            position: relative;
            border-top-right-radius: 0.16rem;
            border-top-left-radius: 0.16rem;
            background: rgba(239, 242, 253, 1);
            font-size: 0.18rem;
            color: #16214c;
            height: 0.65rem;
          }

          .body {
            // background-color: #fff;
            // border-bottom-right-radius:0.16rem;
            // border-bottom-left-radius:0.16rem;
            // padding: .16rem;
          }

          @keyframes fadeIn {
            0% {
              visibility: hidden;
              opacity: 0;
              transform: translate(0, -15px);
            }

            100% {
              visiblity: visible;
              transform: translate(0, 0);
              opacity: 1;
            }
          }
        `}
      </style>
    </div>
  );
};
