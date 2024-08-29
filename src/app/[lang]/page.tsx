import {
  ProductSuit,
  Gap,
  Ecos,
  Header,
  Navigation,
  SmartTrading,
  UseCase,
  Footer,
  Exchanges,
} from "@/components";
import { Investor } from "@/components/investor";
import { importLang, Locale } from "@/lang";

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const translations = await importLang(lang);
  return (
    <>
      <Navigation translations={translations} />
      <main className="max-w-8xl mx-auto mt-10 1100:mt-[70px]">
        <div className="px-5 840:px-8 xl:px-[100px]">
          <Header translations={translations} />
          <Gap y={70} />
          <Ecos translations={translations} />
          <Gap y={40} />
          <ProductSuit translations={translations} />
          <SmartTrading translations={translations} />
          <UseCase translations={translations} />
          <Investor />
          <Gap y={64} />
          <Exchanges />
          <Gap y={96} />
          <Footer />
        </div>
      </main>
    </>
  );
}
