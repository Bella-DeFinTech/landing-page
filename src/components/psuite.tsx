export const PSuiteItem = ({ v }: { v: string[] }) => (
  <div>
    <h1>{v[0]}</h1>
    <div className="cc">{v[1]}</div>
    <style jsx>
      {`
        h1 {
          font-size: 1.71rem;
          font-family: DINNextLTPro-Regular;
          font-weight: 500;
          color: rgba(22, 33, 76, 1);
          line-height: 2.07rem;
        }

        .cc {
          font-size: 1.1rem;
          font-family: DINNextLTPro-Light, DINNextLTPro;
          font-weight: 300;
          color: rgba(108, 111, 134, 1);
          line-height: 1.71rem;
          margin-top: 1rem;
        }

        @media (max-width: 1100px) {
          h1 {
            font-size: 1.15rem;
            line-height: 1.36rem;
          }

          .cc {
            font-size: 1rem;
            margin-top: 0.72rem;
            line-height: 1.43rem;
          }
        }
      `}
    </style>
  </div>
);
