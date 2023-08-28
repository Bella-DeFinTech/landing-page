export const FeatureItem = ({
  name,
  icon,
  descr,
}: {
  name: string;
  descr: string;
  icon: string;
}) => (
  <div className="flex c root">
    <i className="icon" />
    <h1>{name}</h1>
    <div className="descr">{descr}</div>
    <style jsx>
      {`
        .root {
          width: 20.85rem;
          padding: 0 2.17rem;
        }

        i {
          background-image: url(${icon});
          width: 4.43rem;
          height: 4.43rem;
        }

        h1 {
          font-size: 1.71rem;
          font-family: DINNextLTPro-Regular;
          font-weight: 500;
          color: rgba(22, 33, 76, 1);
          line-height: 2.07rem;
          margin-top: 2.79rem;
        }

        .descr {
          font-size: 1.1rem;
          font-family: DINNextLTPro-Light, DINNextLTPro;
          font-weight: 300;
          color: rgba(108, 111, 134, 1);
          line-height: 1.86rem;
          margin-top: 1rem;
        }

        @media (max-width: 1100px) {
          .root {
            width: 100%;
            padding: 2.15rem 1rem;
            height: auto;
          }

          i {
            width: 2.51rem;
            height: 2.51rem;
          }

          h1 {
            font-size: 1rem;
            margin-top: 1.29rem;
          }

          .descr {
            font-size: 1rem;
            margin-top: 0.5rem;
          }
        }
      `}
    </style>
  </div>
);
