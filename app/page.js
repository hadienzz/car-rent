import Container from "@/components/Container/Container";
import Header from "@/components/Header/Header";
import AdsMain from "@/components/Ads/AdsMain";
import Head from "next/head";
import PickMain from "@/components/Pick-Off/PickMain";

const App = () => {
  return (
    <>
      <Container>
        <Header />

        <AdsMain />
        <PickMain />
      </Container>
    </>
  );
};

export default App;
