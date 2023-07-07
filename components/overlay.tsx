export const Overlay = () => (
  <div className="root">
    <style jsx>
      {`
        .root {
          position: fixed;
          top: 0;
          left: 0;
          background-color: rgba(12,20,51,.9);
          bottom: 0;
          right: 0;
          z-index: 500;
          animation: fadeIn .25s ease-in;
        }

        @keyframes fadeIn {
          0% {
            visibility: hidden;
            opacity: .3;
            clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
          }

          100% {
            visiblity: visible;
            opacity: 1;
            clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
          }
        }
      `}
    </style>
  </div>
)