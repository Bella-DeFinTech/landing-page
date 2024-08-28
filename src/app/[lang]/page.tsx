import {
  ProductSuit,
  Gap,
  Ecos,
  Header,
  Navigation,
  SmartTrading,
  UseCase,
  Footer,
  ListOn,
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
      <Gap y={70} />
      <main className="max-w-8xl mx-auto">
        <div className="px-[100px]">
          <Header translations={translations} />
          <Gap y={70} />
          <Ecos translations={translations} />
          <Gap y={40} />
          <ProductSuit translations={translations} />
          <Gap y={104} />
          <SmartTrading translations={translations} />
          <Gap y={104} />
          <UseCase translations={translations} />
          <Gap y={124} />
          <Investor />
          <Gap y={64} />
          <ListOn />
          <Gap y={96} />
          <Footer />
        </div>
      </main>
    </>
  );
}
