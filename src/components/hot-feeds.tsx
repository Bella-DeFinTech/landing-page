import { useTranslation } from "next-i18next";

const Feed = () => {
  const { t } = useTranslation(["routes"]);
  return (
    <div className="root flex">
      <div className="property flex">
        <i className="icon"></i>
        <div className="name"></div>
      </div>
      <div className="amount"></div>
      <div className="interest flex">
        <div className="actions flex v-center h-center">
          <button className="deposit">{t("deposit")}</button>
          <button className="loan">{t("loan")}</button>
        </div>
      </div>
      <style jsx>
        {`
          .root {
            height: 7.14rem;
            background: rgba(255, 255, 255, 1);
            box-shadow: 0rem 0.14rem 1rem 0rem rgba(0, 107, 147, 0.06);
            margin-top: 1.43rem;
            border-radius: 1rem;
            padding: 0 10px;
          }

          .actions {
            flex: 1;
          }

          .actions button {
            background-color: #fff;
            width: 6.97rem;
            height: 2.43rem;
            font-size: 1rem;
            color: var(--primary-blue);
            border: 0.09rem solid rgba(77, 175, 254, 1);
            border-radius: 1.46rem;
          }

          .actions button + button {
            margin-left: 1.57rem;
          }

          .property {
            flex-basis: 50%;
          }

          .amount {
            flex-basis: 25%;
          }

          .interest {
            flex-basis: 25%;
          }
        `}
      </style>
    </div>
  );
};

export default () => {
  const { t } = useTranslation(["common"]);
  return (
    <div className="root">
      <div className="title">
        {t("hot")}
        {t("currency")}
      </div>
      <div className="table">
        <div className="head flex">
          <div className="property">{t("property")}</div>
          <div className="amount">{t("amount")}</div>
          <div className="interest">{t("interest")}</div>
        </div>
        <div className="body">
          {new Array(10).fill(1).map((v, i) => (
            <Feed key={i} />
          ))}
        </div>
      </div>
      <style jsx>
        {`
          .root {
            width: 100%;
            margin-bottom: 4.71rem;
            margin-top: 2.14rem;
          }

          .title {
            font-size: 1.57rem;
            font-weight: 500;
            position: relative;
          }

          .title::before {
            content: "";
            width: 0.21rem;
            height: 1.14rem;
            background: rgba(1, 183, 128, 1);
            border-radius: 0.11rem;
            position: absolute;
            left: -0.57rem;
            top: 50%;
            transform: translate(0, -50%);
          }

          .title {
            left: 0.57rem;
          }

          .property {
            flex-basis: 50%;
          }

          .amount {
            flex-basis: 25%;
          }

          .interest {
            flex-basis: 25%;
          }

          .table .head {
            margin-top: 2.14rem;
            font-size: 1.43rem;
          }
        `}
      </style>
    </div>
  );
};
