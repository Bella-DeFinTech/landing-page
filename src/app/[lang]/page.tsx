import {
  ProductSuit,
  Gap,
  Ecos,
  Header,
  Navigation,
  SmartTrading,
  UseCase,
  Footer,
} from "@/components";
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
          <Gap y={104} />
          <Footer />
        </div>
      </main>
    </>
  );
}
