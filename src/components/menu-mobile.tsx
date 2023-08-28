import cx from 'classnames'

const offsetX = (1.28 / Math.cos(Math.PI * 0.25) - 1.28) / 2

export const Menu = ({ className = '', onClick, on = false, colorful = false }: { className?: string, onClick: () => void, colorful?: boolean, on?: boolean }) => (
  <div onClick={() => onClick()} className={cx("root", className, { on })}>
    <div className="first"></div>
    <div className="second"></div>
    <div className="third"></div>
    <style jsx>
      {`
        .root {
          height:1.29rem;
          width: 1.29rem;
          position: fixed;
          right: 1.43rem;
          z-index: 600;
          top: 1.64rem;
        }

        .root > div {
          position: absolute;
          height: 2px;
          border-radius: 1px;
          background: ${colorful ? 'var(--primary-gradient-color)' : '#7E82A4'};
          left: 0;
          transition: all .2s;
        }

        .on > div {
          background: #fff;
        }

        .first {
          width: 100%;
          top: 0;
          transform-origin: 0 0;
        }

        .second {
          width: 50%;
          top: 50%;
          transform: translate(0, -50%);
          transition: opacity .2s;
        }

        .third {
          width: 80%;
          bottom: 0;
          transform-origin: 0 100%;
        }

        .first, .third {
          transition: transform .2s;
        }

        .on .first{
          transform: rotate(45deg) translate(${offsetX}rem, -.07rem);
        }

        .on .second {
          opacity: 0;
        }

        .on .third {
          width: 100%;
          transform: rotate(-45deg) translate(${offsetX}rem, .07rem);
        }
      `}
    </style>
  </div>
)