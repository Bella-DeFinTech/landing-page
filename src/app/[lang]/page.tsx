import {
  ProductSuit,
  Gap,
  Ecos,
  Header,
  Navigation,
  SmartTrading,
  DemocratizingCryptoTrading,
  Footer,
} from "@/components";

export default function Home() {
  return (
    <>
      <Navigation />
      <Gap y={70} />
      <Header />
      <Gap y={70} />
      <main>
        <Ecos />
        <Gap y={40} />
        <ProductSuit />
        <Gap y={104} />
        <SmartTrading />
        <Gap y={104} />
        <DemocratizingCryptoTrading />
      </main>
      <Footer />
    </>
  );
}
