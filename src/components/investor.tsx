import { Brands } from "./ecos";
import { Title } from "./title";

export const Investor = () => {
  return (
    <div>
      <div className="my-10">
        <Title>Investor</Title>
      </div>
      <div className="my-10">
        <Brands list={[]} />
      </div>
    </div>
  );
};
