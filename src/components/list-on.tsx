import { Brands } from "./ecos";
import { Title } from "./title";

export const ListOn = () => (
  <div>
    <div className="my-10">
      <Title>Listed on</Title>
    </div>
    <div className="my-10">
      <Brands list={[]} />
    </div>
  </div>
);
