import { Brands } from "./ecos";
import { Title } from "./title";

export const Exchanges = () => (
  <div>
    <div className="my-10">
      <Title>Exchanges</Title>
    </div>
    <div className="my-10">
      <Brands list={[]} />
    </div>
  </div>
);
