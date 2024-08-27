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
        <ProductSuit />
        <Gap y={40} />
        <SmartTrading />
        <Gap y={40} />
        <DemocratizingCryptoTrading />
      </main>
      <Footer />
    </>
  );
}
